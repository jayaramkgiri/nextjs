import { PrismaClient } from '@prisma/client'
import { fetchAllIsins } from '@/app/models/issuance';

const prisma = new PrismaClient()
const ITEMS_PER_PAGE = 30;

export async function fetchLatestOrders(
    currentPage: number = 1
) {
    try {
        const seqNo = await latestSeqNo();
        const isins = fetchAllIsins();
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const orders = await prisma.bseOrderBook.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                seqNo: seqNo,
                isin: {
                    in: isins,
                },
            },
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
    const maxSeqNo = await prisma.bseOrderBook.aggregate({
        _max: {
            seqNo: true,
        },
    });
    return maxSeqNo._max.seqNo + 1;
}

export async function noOfPages(
) {
    // noStore();
    try {

        const issuancesCount = await prisma.company.count();
        return Math.floor(issuancesCount / ITEMS_PER_PAGE) + 1;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Companies.');
    }
}