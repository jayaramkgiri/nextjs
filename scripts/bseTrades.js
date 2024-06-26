const axios = require('axios');
const puppeteer = require('puppeteer');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function formattedStringToNumber(str) {
  // Remove commas from the string
  const numberStr = str.replace(/,/g, '').replace(/-/g, '');
  // Convert the resulting string to a number
  let number = null;
  if (numberStr.length > 0) {
    number = parseFloat(numberStr);
  }
  return number;
}

function dateFormatter(str) {
  let dateStr = null;
  if (str && str.length > 0) {
    dateStr = new Date(str);
  }
  return dateStr;
}

function findHighestLowestPrices({ data }) {
  let highestBPrice = null;
  let lowestSPrice = null;

  // Find the highest buy price
  for (let i = 1; i <= 5; i++) {
    const bPriceStr = data[`BPrice${i}`];
    if (bPriceStr != null) {
      const bPrice = formattedStringToNumber(bPriceStr);
      if (highestBPrice === null || bPrice > highestBPrice) {
        highestBPrice = bPrice;
      }
    }
  }

  // Find the lowest sell price
  for (let i = 1; i <= 5; i++) {
    const sPriceStr = data[`SPrice${i}`];

    if (sPriceStr != null) {
      const sPrice = formattedStringToNumber(sPriceStr);
      if (lowestSPrice === null || sPrice < lowestSPrice) {
        lowestSPrice = sPrice;
      }
    }
  }

  return {
    highestBPrice,
    lowestSPrice,
  };
}

async function fetchPageData(selector, page) {
  await page.waitForSelector(selector);
  const tableData = await page.evaluate((selector) => {
    const rows = document.querySelector(selector).querySelectorAll('tr');
    let pageData = [];
    for (let row of rows) {
      const cells = row.querySelectorAll('td.TTRow, td.TTRow_right');
      if (cells && cells.length > 1) {
        const marketData = {
          securityCode: cells[0].textContent?.trim() || '',
          securityName: cells[1].textContent?.trim() || '',
          group: cells[2].textContent?.trim() || '',
          ltpClose: parseFloat(cells[3].textContent?.trim() || '0'),
          change: parseFloat(cells[4].textContent?.trim() || '0'),
          changePercent: parseFloat(cells[5].textContent?.trim() || '0'),
          ytmAtLtp: parseFloat(cells[6].textContent?.trim() || '0'),
          openPrice: parseFloat(cells[7].textContent?.trim() || '0'),
          highPrice: parseFloat(cells[8].textContent?.trim() || '0'),
          lowPrice: parseFloat(cells[9].textContent?.trim() || '0'),
          totalVolume: parseInt(cells[10].textContent?.trim() || '0', 10),
          totalTurnover: parseFloat(cells[11].textContent?.trim() || '0'),
        };
        pageData.push(marketData);
      }
    }
    return pageData;
  }, selector);
  return tableData;
}

async function fetchBondData() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const response = await Promise.all([
    page.goto('https://www.bseindia.com/markets/debt/debt_corporate_EOD.aspx'),
    page.waitForResponse((response) =>
      response.url().includes('markets/debt/debt_corporate_EOD.aspx'),
    ),
  ]);

  await page.setViewport({ width: 1200, height: 768 });
  const pageTableSelector = '#ContentPlaceHolder1_GridViewrcdsFC';
  await page.waitForSelector(pageTableSelector);
  // const pageCount = await page.evaluate(
  //   (selector) =>
  //     document
  //       .querySelector(selector)
  //       .childNodes[1].lastElementChild.querySelector('table').firstElementChild
  //       .firstElementChild.lastElementChild.textContent,
  //   pageTableSelector,
  // );
  let pageLoad = response[1].status();
  let bondData = [];
  const tableSelector = 'table#ContentPlaceHolder1_GridViewrcdsFC';

  let pageNo = 1;
  let tableData, resp;
  function switchPage(pageNo) {
    __doPostBack('ctl00$ContentPlaceHolder1$GridViewrcdsFC', `Page$${pageNo}`);
  }

  while (pageLoad == 200) {
    tableData = await fetchPageData(tableSelector, page);
    bondData = bondData.concat(tableData);
    pageNo = pageNo + 1;
    resp = await Promise.all([
      page.evaluate(switchPage, pageNo),
      page.waitForResponse((response) =>
        response.url().includes('markets/debt/debt_corporate_EOD.aspx'),
      ),
    ]);
    pageLoad = resp[1].status();
  }

  await browser.close();
  return bondData;
}

async function fetchMarketDepth(bondData) {
  const marketHeaders = {
    accept: 'application/json, text/plain, */*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.9,ta;q=0.8,en-GB;q=0.7',
    'cache-control': 'no-cache',
    origin: 'https://www.bseindia.com',
    pragma: 'no-cache',
    priority: 'u=1, i',
    referer: 'https://www.bseindia.com/',
    'sec-ch-ua':
      '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  };
  let config = {};
  let marketDepthList = {};
  let errorList = [];
  for (const bond of bondData) {
    config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.bseindia.com/RealTimeBseIndiaAPI/api/MarketDepth/w?flag=&quotetype=EQ&scripcode=${bond.securityCode}`,
      // url: `https://api.bseindia.com/RealTimeBseIndiaAPI/api/MarketDepth/w?flag=&quotetype=EQ&scripcode=939447`,
      headers: marketHeaders,
    };
    try {
      const marketDepth = await axios.request(config);
      if (marketDepth.status == 200) {
        marketDepthList[bond.securityCode] = marketDepth.data;
      } else {
        errorList.push(bond.securityCode);
        console.log(`Error fetching marketData for ${bond.securityCode}`);
      }
    } catch (_e) {
      console.log(`Error fetching marketData for ${bond.securityCode}`);
      errorList.push(bond.securityCode);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return { marketDepth: marketDepthList, errors: errorList };
}

async function fetchSecurityInfo(bondData) {
  headers = {
    accept: 'application/json, text/plain, */*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.9,ta;q=0.8,en-GB;q=0.7',
    'cache-control': 'no-cache',
    origin: 'https://www.bseindia.com',
    pragma: 'no-cache',
    priority: 'u=1, i',
    referer: 'https://www.bseindia.com/',
    'sec-ch-ua':
      '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  };

  let config = {};
  let securityInfoList = {};
  let errorList = [];

  for (const bond of bondData) {
    config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.bseindia.com/BseIndiaAPI/api/DebSecurityInfo/w?scripcode=${bond.securityCode}`,
      // url: 'https://api.bseindia.com/BseIndiaAPI/api/DebSecurityInfo/w?scripcode=975454',
      headers: headers,
    };

    try {
      const info = await axios.request(config);
      if (info.status == 200) {
        securityInfoList[bond.securityCode] = info.data.Table[0];
      } else {
        errorList.push(bond.securityCode);
        console.log(`Error fetching marketData for ${bond.securityCode}`);
      }
    } catch (_e) {
      console.log(`Error fetching marketData for ${bond.securityCode}`);
      errorList.push(bond.securityCode);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return { securityInfo: securityInfoList, infoErrors: errorList };
}

async function deleteEarliestVersion() {
  const minSeqNo = await prisma.bseOrderBook.aggregate({
    _min: {
      seqNo: true,
    },
  });
  const seqNo = minSeqNo._min.seqNo;
  if (seqNo && seqNo > 0) {
    try {
      await prisma.bseOrderBook.deleteMany({
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

async function migrateBondData() {
  try {
    console.log('Fetching Bond Data');
    const bondData = await fetchBondData();
    console.log('Completed Fetching Bond Data');

    if (bondData.length > 0) {
      console.log('Fetching Market Depth');
      const { marketDepth, errors } = await fetchMarketDepth(bondData);
      console.log('Completed Fetching Market Depth');

      console.log('Fetching Security Info');
      const { securityInfo, infoErrors } = await fetchSecurityInfo(bondData);
      console.log('Completed Fetching Security Info');

      if (errors.length > 0 || infoErrors.length > 0) {
        console.log(`Error occured while fetching marketdepth for ${errors}`);
        console.log(
          `Error occured while fetching marketdepth for ${infoErrors}`,
        );
      }
      const maxSeqNo = await prisma.bseOrderBook.aggregate({
        _max: {
          seqNo: true,
        },
      });
      const seqNo = maxSeqNo._max.seqNo + 1;
      let dataList = [];
      for (const bond of bondData) {
        if (securityInfo[bond.securityCode] && marketDepth[bond.securityCode]) {
          const data = {
            isin: securityInfo[bond.securityCode].ISSebiIsin,
            seqNo: seqNo,
            scripName: bond.securityName,
            scripCode: bond.securityCode,
            faceValue: securityInfo[bond.securityCode].ISFaceValue,
            maturityDate: dateFormatter(
              securityInfo[bond.securityCode].ISMaturityDate,
            ),
            creditRating: securityInfo[bond.securityCode].ISCreditRating,
            close: bond.ltpClose,
            open: bond.openPrice,
            high: bond.highPrice,
            low: bond.lowPrice,
            totalBuyQty: formattedStringToNumber(
              marketDepth[bond.securityCode].TotalBQty,
            ),
            totalSellQty: formattedStringToNumber(
              marketDepth[bond.securityCode].TotalSQty,
            ),
          };
          dataList.push(data);
        }
      }
      console.log('Pushing Date to DB');
      await prisma.bseOrderBook.createMany({
        data: dataList,
      });
    }
    console.log('Bond data migration completed.');
    await deleteEarliestVersion();
  } catch (error) {
    console.error('Error fetching or migrating bond data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

migrateBondData();
