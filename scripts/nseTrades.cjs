const axios = require('axios');
require('any-date-parser');
const puppeteer = require('puppeteer');
const { PrismaClient } = require('@prisma/client');

const {
  formattedStringToNumber,
  dateFormatter,
  fetchSeriesInfo,
  fetchFaceValue,
} = require('./lib/helpers.cjs');

const prisma = new PrismaClient();

function highestBuyPrices(orderBook) {
  let highestBPrice = null;

  let bid = orderBook.bid;
  // Find the highest buy price
  for (let i = 0; i < bid.length; i++) {
    if (bid[i] != null && typeof bid[i].price === 'number') {
      if (highestBPrice === null || bid[i].price > highestBPrice) {
        highestBPrice = bid[i].price;
      }
    }
  }

  return highestBPrice;
}

function lowestSellPrice(orderBook) {
  let lowestSPrice = null;

  let ask = orderBook.ask;
  // Find the highest buy price
  for (let i = 0; i < ask.length; i++) {
    if (ask[i] != null && typeof ask[i].price === 'number') {
      if (
        lowestSPrice === null ||
        (ask[i].price < lowestSPrice && ask[i].quantity !== 0)
      ) {
        lowestSPrice = ask[i].price;
      }
    }
  }

  return lowestSPrice;
}

async function getCookie() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    'https://www.nseindia.com/market-data/bonds-traded-in-capital-market',
  );

  cookies = await page.cookies();
  await browser.close();
  return `nsit=${cookies.find((c) => c.name === 'nsit').value}; nseappid=${cookies.find((c) => c.name === 'nseappid').value
    }`;
}

async function fetchTradeList(cookie) {
  let headers = {
    authority: 'www.nseindia.com',
    method: 'GET',
    path: '/api/liveBonds-traded-on-cm?type=bonds',
    scheme: 'https',
    accept: '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.9,ta;q=0.8,en-GB;q=0.7',
    'cache-control': 'no-cache',
    pragma: 'no-cache',
    priority: 'u=1, i',
    Cookie: cookie,
    Referer:
      'https://www.nseindia.com/market-data/bonds-traded-in-capital-market',
    'sec-ch-ua':
      '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  };

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://www.nseindia.com/api/liveBonds-traded-on-cm?type=bonds',
    headers: headers,
  };

  const tradeList = await axios.request(config);
  return tradeList.data.data;
}

async function fetchMarketDepth(cookie, symbol) {
  let headers = {
    authority: 'www.nseindia.com',
    method: 'GET',
    path: 'api/quote-bonds',
    scheme: 'https',
    accept: '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.9,ta;q=0.8,en-GB;q=0.7',
    'cache-control': 'no-cache',
    pragma: 'no-cache',
    priority: 'u=1, i',
    Cookie: cookie,
    Referer:
      'https://www.nseindia.com/market-data/bonds-traded-in-capital-market',
    'sec-ch-ua':
      '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  };
  let marketDepth = null;

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://www.nseindia.com/api/quote-bonds?index=${symbol}`,
    headers: headers,
  };
  const resp = await axios.request(config);
  if (resp.status == 200) {
    marketDepth = resp.data;
  } else {
    throw `Nse API Failed with ${resp.statu}`;
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return marketDepth;
}

module.exports.migrateNseMarketData = async function () {
  let migratedIsins = [];
  let errorList = [];
  // console.log('Fetching Cookie');
  const cookie = await getCookie();

  if (cookie) {
    // console.log('Fetching Trade Data');
    let tradeList = await fetchTradeList(cookie);
    // console.log('Completed Fetching Trade Data');

    if (tradeList) {
      for (const trade of tradeList) {
        // console.log('Fetching Market Depth');
        const marketDepth = await fetchMarketDepth(cookie, trade.symbol);
        // console.log('Completed Fetching Market Depth');

        if (marketDepth) {
          try {
            // const data = {
            //   nseScripName: `${trade.symbol}-${trade.series}`,
            //   nseFaceValue: fetchFaceValue(trade, marketDepth),
            //   nseMaturityDate: dateFormatter(trade.maturity_date),
            //   nseCreditRating: trade.credit_rating,
            //   nseclose: formattedStringToNumber(trade.close),
            //   nseBuyOrders: fetchSeriesInfo(marketDepth.data, trade.series)
            //     .marketDeptOrderBook.totalBuyQuantity,
            //   nseSellOrders: fetchSeriesInfo(marketDepth.data, trade.series)
            //     .marketDeptOrderBook.totalSellQuantity,
            //   nseBuyPrice: highestBuyPrices(
            //     fetchSeriesInfo(marketDepth.data, trade.series)
            //       .marketDeptOrderBook,
            //   ),
            //   nseSellPrice: lowestSellPrice(
            //     fetchSeriesInfo(marketDepth.data, trade.series)
            //       .marketDeptOrderBook,
            //   ),
            // };
            // console.log('Pushing Date to DB');
            trade['market_depth'] = marketDepth
            const isin = trade.meta.isin;
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            await prisma.market.upsert({
              where: {
                date_isin: {
                  isin: isin,
                  date: today
                }
              },
              create: {
                date: today,
                isin: isin,
                nse_scrape: trade
              },
              update: {
                nse_scrape: trade
              }
            })
            migratedIsins.push(isin);
          } catch (e) {
            errorList.push(trade.meta.isin);
            // console.log(`Error pushing ${trade.meta.isin}`, e);
          }
        } else {
          errorList.push(trade.meta.isin);
          // console.log(`Error pushing ${trade.meta.isin}`, e);
        }
      }
      console.log(`NSE Bond data migration completed for ${migratedIsins}`);
      console.log(`NSE Bond data migration errored for ${errorList}`);
    }
  }
  await prisma.$disconnect();
  return { success: migratedIsins, errors: errorList };
};
