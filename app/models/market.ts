import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const ITEMS_PER_PAGE = 100;
export async function fetchMarkets(
  query: object = {},
  currentPage: number = 1,
  orderBy: object = { sell_volume:  'desc' }
) {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {

    const markets = await prisma.market.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: query,
      orderBy: orderBy,
    });
    return markets;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch market data.');
  }
}