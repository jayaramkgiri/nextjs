const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
import { ratingOutlookList } from '@/lib/utils';

export const ITEMS_PER_PAGE = 100;
export async function fetchMarkets(
  date = null,
  query = '',
  currentPage = 1,
  sort = 'sell_volume',
  filter = '',
) {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  let orderBy = { sell_volume: 'desc' };
  if (date === null) {
    date = await lastMarketUpdatedDate();
  }
  let version = await fetchLatestVersion(date);
  date.setUTCHours(0, 0, 0, 0);
  if (sort === 'buy_volume') {
    orderBy = { buy_volume: 'desc' };
  }
  try {
    const markets = await prisma.market.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        date: date,
        version: version,
        NOT: [
          { buy_price: null },
          { sell_price: null},
        ],
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
      orderBy: orderBy,
    });
    return markets;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch market data.');
  }
}

export async function fetchMarketSummary(date = null, query = '', filter = '') {
  // noStore();

  try {
    if (date === null) {
      date = await lastMarketUpdatedDate();
    }
    date.setUTCHours(0, 0, 0, 0);
    let version = await fetchLatestVersion(date);
    const aggregate = await prisma.market.aggregate({
      where: {
        date: date,
        latest_rating: { in: ratingOutlookList(filter) },
        version: version,
        NOT: [
          { buy_price: null },
          { sell_price: null},
        ],
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

async function fetchLatestVersion(date) {
  let versions = (await prisma.market.findMany({where: {date: date}, distinct: ['version'], select: {version: true}})).map((r) => r['version']).sort()
  return versions[versions.length -1 ]
}

export async function noOfPages(date = null, query = '', filter = '') {
  // noStore();
  if (date === null) {
    date = await lastMarketUpdatedDate();
  }
  let version = await fetchLatestVersion(date)
  try {
    date.setUTCHours(0, 0, 0, 0);
    const marketsCount = await prisma.market.count({
      where: {
        date: date,
        latest_rating: { in: ratingOutlookList(filter) },
        version: version,
        NOT: [
          { buy_price: null },
          { sell_price: null},
        ],
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
    });
    return Math.floor(marketsCount / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Market data.');
  }
}

export async function fetchMarketdepth(isin, date = null){
  if (date === null) {
    date = await lastMarketUpdatedDate();
  }
  let version = await fetchLatestVersion(date);
  let market = await prisma.market.findFirst({where: {date: date, version: version, isin: isin}})
  let depth = null;
  if(market !== null && market.market_depth !== null) {
    depth = formatMarketDepth(market.market_depth);
  } 
  return depth;
}

function formatMarketDepth(depth) {
  let buy = {};
  let sell = {};
  if (Object.keys(depth.bse).length === 0 && Object.keys(depth.nse).length === 0) {
    return null;
  } else
  {
    if(Object.keys(depth.bse).length === 0 || Object.keys(depth.bse.buy).length === 0) {
      buy = depth.nse.buy;
    } else if (Object.keys(depth.bse).length === 0 || Object.keys(depth.bse.buy).length === 0) {
      buy = depth.bse.buy;
    } else {
      buy =  [...depth.bse.buy, ...depth.nse.buy]
    }
    if(Object.keys(depth.bse).length === 0 || Object.keys(depth.bse.sell).length === 0) {
      sell = depth.nse.sell;
    } else if (Object.keys(depth.bse).length === 0 || Object.keys(depth.bse.sell).length === 0) {
      sell = depth.bse.sell;
    } else {
      sell =  [...depth.bse.sell, ...depth.nse.sell]
    }
  }
  if(buy && buy.length > 0) {
    buy = buy.filter(s => s.quantity > 0).sort((a,b) => a.price > b.price)
  }
  if(sell && sell.length > 0) {
    sell = sell.filter(s => s.quantity > 0).sort((a,b) => a.price < b.price)
  }
  return {
    buy: buy,
    sell: sell
  }
}

