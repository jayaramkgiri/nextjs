
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

export async function noOfPages(
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