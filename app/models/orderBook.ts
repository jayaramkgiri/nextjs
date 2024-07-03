import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITEMS_PER_PAGE = 30;

export async function fetchMarketSummary() {
    // noStore();
    try {

        const bseSeqNo = await latestBseSeqNo() || 0;
        const nseSeqNo = await latestNseSeqNo() || 0;
        const bseTotalBuyQty = (await prisma.bseOrderBook.aggregate({
            _sum: { totalBuyQty: true },
            where: { seqNo: bseSeqNo },
        }))._sum.totalBuyQty || 0;
        const bseTotalBuyVolume: any[] = await prisma.$queryRaw`Select SUM("BseOrderBook"."totalBuyQty" * "BseOrderBook"."buyPrice") As "buyVolume" from "BseOrderBook" where "BseOrderBook"."seqNo"=${bseSeqNo}`
        const nseTotalBuyQty = (await prisma.nseOrderBook.aggregate({
            _sum: { totalBuyQty: true },
            where: { seqNo: nseSeqNo },
        }))._sum.totalBuyQty || 0;
        const nseTotalBuyVolume: any[] = await prisma.$queryRaw`Select SUM("NseOrderBook"."totalBuyQty" * "NseOrderBook"."buyPrice") As "buyVolume" from "NseOrderBook"  where "NseOrderBook"."seqNo"=${nseSeqNo}`;


        const bseTotalSellQty = (await prisma.bseOrderBook.aggregate({
            _sum: { totalSellQty: true },
            where: { seqNo: bseSeqNo },
        }))._sum.totalSellQty || 0;
        const bseTotalSellVolume: any[] = await prisma.$queryRaw`Select SUM("BseOrderBook"."totalSellQty" * "BseOrderBook"."sellPrice") As "sellVolume" from "BseOrderBook" where "BseOrderBook"."seqNo"=${bseSeqNo}`
        const nseTotalSellQty = (await prisma.nseOrderBook.aggregate({
            _sum: { totalSellQty: true },
            where: { seqNo: nseSeqNo },
        }))._sum.totalSellQty || 0;
        const nseTotalSellVolume: any[] = await prisma.$queryRaw`Select SUM("NseOrderBook"."totalSellQty" * "NseOrderBook"."sellPrice") As "sellVolume" from "NseOrderBook"  where "NseOrderBook"."seqNo"=${nseSeqNo}`
        const summary = {
            totalBuyQty: bseTotalBuyQty + nseTotalBuyQty,
            totalSellQty: bseTotalSellQty + nseTotalSellQty,
            totalBuyVolume: ((bseTotalBuyVolume[0]!.buyVolume + nseTotalBuyVolume[0]!.buyVolume) / 10000000).toFixed(2),
            totalSellVolume: ((bseTotalSellVolume[0]!.sellVolume + nseTotalSellVolume[0]!.sellVolume) / 10000000).toFixed(2),
        };
        return summary;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Market Summary.');
    }
}


export async function fetchMarket(
    currentPage: number = 1
) {
    // noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {

        const bseSeqNo = await latestBseSeqNo() || 0;
        const nseSeqNo = await latestNseSeqNo() || 0;
        const issuances = await prisma.issuance.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                OR: [
                    {
                        bseOrderBook: { some: {}, every: { seqNo: bseSeqNo } }
                    },
                    {
                        nseOrderBook: { some: {}, every: { seqNo: nseSeqNo } }
                    }
                ]
            },
            include: {
                bseOrderBook: { orderBy: { totalSellQty: 'desc' } },
                nseOrderBook: { orderBy: { totalSellQty: 'desc' } },
                company: true
            },
        });

        issuances.forEach((iss: any) => iss['issuerName'] = iss.company.name)
        return issuances;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Issuances.');
    }
}

async function latestBseSeqNo() {
    const maxSeqNo = await prisma.bseOrderBook.aggregate({
        _max: {
            seqNo: true,
        },
    });
    return maxSeqNo._max.seqNo;
}

async function latestNseSeqNo() {
    const maxSeqNo = await prisma.nseOrderBook.aggregate({
        _max: {
            seqNo: true,
        },
    });
    return maxSeqNo._max.seqNo;
}