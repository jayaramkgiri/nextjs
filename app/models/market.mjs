const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
import { ratingOutlookList } from '@/lib/utils'

export const ITEMS_PER_PAGE = 100;
export async function fetchMarkets(
  date = null,
  query = '',
  currentPage = 1,
  sort = 'sell_volume',
  filter = ''
) {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  if (date === null) {
    date = await lastMarketUpdatedDate();
  }
  date.setHours(0, 0, 0, 0);
  try {
    const markets = await prisma.market.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        date: date,
        latest_rating: { in: ratingOutlookList(filter) },
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
      orderBy: { [sort]: 'desc' },
    });
    return markets;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch market data.');
  }
}

export async function fetchMarketSummary(date = null) {
  // noStore();

  try {
    if (date === null) {
      date = await lastMarketUpdatedDate();
    }
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

async function lastMarketUpdatedDate() {
  return (await prisma.market.findFirst({ orderBy: { date: 'desc' } })).date;
}

export async function noOfPages(date = null) {
  // noStore();
  if (date === null) {
    date = await lastMarketUpdatedDate();
  }
  try {
    date.setHours(0, 0, 0, 0);
    const marketsCount = await prisma.market.count({ where: { date: date } });
    return Math.floor(marketsCount / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Market data.');
  }
}
