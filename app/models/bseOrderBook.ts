import { PrismaClient } from '@prisma/client'
import { fetchAllIsins } from '@/app/models/issuance';

const prisma = new PrismaClient()
const ITEMS_PER_PAGE = 30;

export async function fetchBseLatestOrders(
    currentPage: number = 1
) {
    try {
        const seqNo = await latestSeqNo() || 0;
        const isins = await fetchAllIsins();
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;

        let query: { seqNo: number, isin: object } = { seqNo: seqNo, isin: { in: [] } };
        if (isins && isins.length > 0) {
            query['isin'] = { in: isins };
        }

        const orders = await prisma.orderBook.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: query,
            orderBy: [
                { totalSellQty: 'desc' }
            ],

        });

        return orders;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Companies.');
    }
}

async function latestSeqNo() {
    const maxSeqNo = await prisma.orderBook.aggregate({
        _max: {
            seqNo: true,
        },
    });
    return maxSeqNo._max.seqNo;
}

export async function bseOrdersNoOfPages(
) {
    // noStore();
    try {

        const issuancesCount = await prisma.orderBook.aggregate({
            _count: { seqNo: true },
            where: {
                seqNo: 1,
            }
        });
        return Math.floor(issuancesCount._count.seqNo / ITEMS_PER_PAGE) + 1;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Companies.');
    }
}