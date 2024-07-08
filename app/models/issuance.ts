
import { unstable_noStore as noStore } from 'next/cache';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITEMS_PER_PAGE = 30;
export async function fetchIssuances(
  query: object = {},
  currentPage: number = 1,
  orderBy: object = { company: { name: 'asc' } }
) {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {

    const issuances = await prisma.issuance.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: query,
      include: {
        company: true
      },
      orderBy: orderBy,
    });
    issuances.forEach((iss: any) => iss['issuerName'] = iss.company.name)
    return issuances;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Issuances.');
  }
}


export async function fetchMarketSummary() {
  // noStore();
  try {

      const aggregate = (await prisma.issuance.aggregate({
          _sum: { totalSellVolume: true, totalBuyVolume: true,bseBuyOrders: true, nseBuyOrders: true, bseSellOrders: true, nseSellOrders: true  },
      }));
      const summary = {
          totalBuyQty: aggregate._sum.bseBuyOrders + aggregate._sum.nseBuyOrders,
          totalSellQty: aggregate._sum.bseSellOrders + aggregate._sum.nseSellOrders,
          totalBuyVolume: (aggregate._sum.totalBuyVolume / 10000000).toFixed(2),
          totalSellVolume: (aggregate._sum.totalSellVolume / 10000000).toFixed(2),
      };
      return summary;
  } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Market Summary.');
  }
}

export async function fetchAllIsins() {
  // noStore();
  try {
    const issuances = await prisma.issuance.findMany({
      select: {
        isin: true,
      },
    });
    return issuances.map((i) => i.isin);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Issuances.');
  }
}


export async function noOfPagesMarket(
) {
  // noStore();
  try {

    const issuancesCount = await prisma.issuance.count();
    return Math.floor(issuancesCount / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Companies.');
  }
}

export async function noOfPages(
  query: object = {},
) {
  // noStore();
  try {

    const issuancesCount = await prisma.issuance.aggregate({_count: true, where: query});
    return Math.floor(issuancesCount._count / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Companies.');
  }
}