const axios = require('axios');
qs = require('querystring');

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
  let marketDepthList = [];
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
      marketDepthList.push(marketDepth.data);
    } catch (_e) {
      errorList.push(symbol);
    }
  }
  return { marketDepth: marketDepthList, errors: errorList };
}

async function nseTrades() {
  const cookie = await getCookie();
  if (cookie) {
    let tradeList = await fetchTradeList(cookie);
    if (tradeList) {
      let symbolList = Array.from(
        new Set(tradeList.map((item) => item.symbol)),
      );
      const { marketDepth, errors } = await fetchMarketDepth(
        cookie,
        symbolList,
      );
    }
  }
  return;
}

nseTrades();
