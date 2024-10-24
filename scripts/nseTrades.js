const axios = require('axios');
require('any-date-parser');
const puppeteer = require('puppeteer');
const { PrismaClient } = require('@prisma/client');

const { formattedStringToNumber,
  dateFormatter,
  fetchSeriesInfo,
  fetchFaceValue
} = require('./lib/helpers.cjs');

const prisma = new PrismaClient();

function highestBuyPrices(orderBook) {
  let highestBPrice = null;

  let bid = orderBook.bid
  // Find the highest buy price
  for (let i = 0; i < bid.length; i++) {
    if ((bid[i] != null) && (typeof (bid[i].price) === 'number')) {
      if (highestBPrice === null || bid[i].price > highestBPrice) {
        highestBPrice = bid[i].price;
      }
    }
  }

  return highestBPrice;
}

function lowestSellPrice(orderBook) {
  let lowestSPrice = null;

  let ask = orderBook.ask
  // Find the highest buy price
  for (let i = 0; i < ask.length; i++) {
    if ((ask[i] != null) && (typeof (ask[i].price) === 'number')) {
      if (lowestSPrice === null || ask[i].price < lowestSPrice) {
        lowestSPrice = ask[i].price;
      }
    }
  }

  return lowestSPrice;
}

async function getCookie() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.nseindia.com/market-data/bonds-traded-in-capital-market')

  cookies = await page.cookies();
  await browser.close();
  return `nsit=${cookies.find((c) => (c.name === 'nsit')).value}; nseappid=${cookies.find((c) => (c.name === 'nseappid')).value}`;
}

async function fetchTradeList(cookie) {
  headers = {
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

  config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://www.nseindia.com/api/liveBonds-traded-on-cm?type=bonds',
    headers: headers,
  };

  try {
    tradeList = await axios.request(config);
  } catch (e) {
    console.log('Error Fetching TradeList', e);
    return null;
  }
  return tradeList.data.data;
}

async function fetchMarketDepth(cookie, symbolList) {
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
  let config = {};
  let marketDepthList = {};
  let errorList = [];
  for (symbol of symbolList) {
    config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://www.nseindia.com/api/quote-bonds?index=${symbol}`,
      headers: headers,
    };
    try {
      const marketDepth = await axios.request(config);
      marketDepthList[symbol] = marketDepth.data;
    } catch (e) {
      console.log(`Error fetching Market data for ${symbol}`, e);
      errorList.push(symbol);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return { marketDepth: marketDepthList, errors: errorList };
}
async function deleteEarliestVersion() {
  const minSeqNo = await prisma.nseOrderBook.aggregate({
    _min: {
      seqNo: true,
    },
  });
  const seqNo = minSeqNo._min.seqNo;
  if (seqNo && seqNo > 0) {
    try {
      await prisma.nseOrderBook.deleteMany({
        where: {
          seqNo: seqNo
        },
      });
      console.log(`Deleted version ${seqNo}`);
    } catch (e) {
      console.log(`Error deleting version ${seqNo}`);
    }
  }
}

module.exports.migrateNseMarketData = async function () {
  try {
    console.log('Fetching Cookie');
    const cookie = await getCookie();

    if (cookie) {
      console.log('Fetching Trade Data');
      let tradeList = await fetchTradeList(cookie);
      console.log('Completed Fetching Trade Data');

      if (tradeList) {
        let symbolList = Array.from(
          new Set(tradeList.map((item) => item.symbol)),
        );

        console.log('Fetching Market Depth');
        const { marketDepth, errors } = await fetchMarketDepth(
          cookie,
          symbolList,
        );

        const maxSeqNo = await prisma.orderBook.aggregate({
          _max: {
            seqNo: true,
          },
        });
        const seqNo = (maxSeqNo._max.seqNo || 0) + 1;
        console.log('Completed Fetching Market Depth');
        let dataList = [];
        for (const trade of tradeList) {
          if (marketDepth[trade.symbol]) {
            try {
              const data = {
                isin: trade.meta.isin,
                seqNo: seqNo,
                scripName: `${trade.symbol}-${trade.series}`,
                faceValue: fetchFaceValue(trade, marketDepth[trade.symbol]),
                maturityDate: dateFormatter(trade.maturity_date),
                creditRating: trade.credit_rating,
                close: formattedStringToNumber(trade.close),
                open: formattedStringToNumber(trade.open),
                high: formattedStringToNumber(trade.high),
                low: formattedStringToNumber(trade.low),
                totalBuyQty: fetchSeriesInfo(
                  marketDepth[trade.symbol].data,
                  trade.series,
                ).marketDeptOrderBook.totalBuyQuantity,
                totalSellQty: fetchSeriesInfo(
                  marketDepth[trade.symbol].data,
                  trade.series,
                ).marketDeptOrderBook.totalSellQuantity,
                buyPrice: highestBuyPrices(fetchSeriesInfo(marketDepth[trade.symbol].data, trade.series).marketDeptOrderBook),
                sellPrice: lowestSellPrice(fetchSeriesInfo(marketDepth[trade.symbol].data, trade.series).marketDeptOrderBook)
              };
              dataList.push(data);
            } catch (e) {
              console.log(`Error packing ${trade.symbol} ${trade.series}`, e);
            }
          }
        }
        console.log('Pushing Date to DB');
        await prisma.nseOrderBook.createMany({
          data: dataList,
        });
        console.log('Bond data migration completed.');
        await deleteEarliestVersion();
      }
    }
  } catch (error) {
    console.error('Error fetching or migrating bond data:', error);
  } finally {
    await prisma.$disconnect();
  }
}
