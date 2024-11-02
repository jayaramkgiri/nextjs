const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const ITEMS_PER_PAGE = 100;
export async function fetchMarkets(
  date = new Date(),
  query = '',
  currentPage = 1,
  orderBy = { sell_volume: 'desc' },
) {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  date.setHours(0, 0, 0, 0);
  try {
    const markets = await prisma.market.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        date: date,
        OR: [
          {
            company_name: {
              contains: query, // Partial match in `name`
              mode: 'insensitive', // Case-insensitive
            },
          },
          {
            isin: {
              contains: query, // Partial match in `description`
              mode: 'insensitive', // Case-insensitive
            },
          },
          {
            latest_rating_agency: {
              contains: query, // Partial match in `description`
              mode: 'insensitive', // Case-insensitive
            },
          },
          {
            latest_rating: {
              contains: query, // Partial match in `description`
              mode: 'insensitive', // Case-insensitive
            },
          },
        ],
      },
      orderBy: orderBy,
    });
    return markets;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch market data.');
  }
}

export async function fetchMarketSummary(date = new Date()) {
  // noStore();
  try {
    date.setHours(0, 0, 0, 0);
    const aggregate = await prisma.market.aggregate({
      where: { date: date },
      _sum: {
        total_buy_order: true,
        total_sell_order: true,
        buy_volume: true,
        sell_volume: true,
      },
    });

    return aggregate._sum;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Market Summary.');
  }
}

export async function noOfPages(date = new Date()) {
  // noStore();
  try {
    date.setHours(0, 0, 0, 0);
    const marketsCount = await prisma.market.count({ where: { date: date } });
    return Math.floor(marketsCount / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Market data.');
  }
}
