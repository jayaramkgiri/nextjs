const axios = require('axios');
qs = require('querystring');
require('any-date-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function formattedStringToNumber(str) {
  if (typeof str == 'string') {
    // Remove commas from the string
    const numberStr = str.replace(/,/g, '').replace(/-/g, '');
    // Convert the resulting string to a number
    let number = null;
    if (numberStr.length > 0) {
      number = parseFloat(numberStr);
    }
    return number;
  } else {
    return str;
  }
}

function dateFormatter(str) {
  let dateStr = null;
  if (str && str.length > 0) {
    dateStr = Date.fromString(str);
  }
  return dateStr;
}

function fetchSeriesInfo(data, series) {
  let info = data[0];
  let index = 0;
  while (info.allSecurities.series !== series) {
    index = index + 1;
    info = data[index];
  }
  return info;
}

function fetchFaceValue(trade, market) {
  let faceValue = null;
  if (trade.face_value) {
    faceValue = formattedStringToNumber(trade.face_value);
  } else {
    faceValue = fetchSeriesInfo(market.data, trade.series).securityInfo
      .faceValue;
  }
  return faceValue;
}

async function getCookie() {
  headers = {
    accept: '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.9,ta;q=0.8,en-GB;q=0.7',
    'cache-control': 'no-cache',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  };

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://www.nseindia.com/market-data/bonds-traded-in-capital-market',
    headers: headers,
  };
  let cookie = null;
  try {
    resp = await axios.request(config);
    appId = qs.decode(resp.headers['set-cookie'].join(';'), ';').nseappid;
    nsit = qs.decode(resp.headers['set-cookie'].join(';'), ';').nsit;
    cookie = `nsit=${nsit}; nseappid=${appId};`;
  } catch (e) {
    console.log('Error fetching Cookies', e);
  }
  return cookie;
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
    } catch (_e) {
      errorList.push(symbol);
    }
  }
  return { marketDepth: marketDepthList, errors: errorList };
}

async function migrateNseTrades() {
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
        if (errors.length > 0) {
          console.log('Error Fetching Market Depth');
        } else {
          console.log('Completed Fetching Market Depth');
          const maxSeqNo = await prisma.nseOrderBook.aggregate({
            _max: {
              seqNo: true,
            },
          });
          const seqNo = (maxSeqNo._max.seqNo || 0) + 1;
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
        }
        console.log('Bond data migration completed.');
      }
    }
  } catch (error) {
    console.error('Error fetching or migrating bond data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

migrateNseTrades();
