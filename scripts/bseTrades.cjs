const axios = require('axios');
const puppeteer = require('puppeteer');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const {
  formattedStringToNumber,
  dateFormatter,
  highestBuyPrices,
  lowestSellPrice,
} = require('./lib/helpers.cjs');

async function fetchPageData(selector, page) {
  let tableData;
  try {
    await page.waitForSelector(selector);
    tableData = await page.evaluate((selector) => {
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
  } catch (error) {
    console.log(`Error fetching pageData for page ${page}`);
    return null;
  }
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
    if (tableData === null) {
      continue;
    }
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

async function fetchMarketDepth(bond) {
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
  let marketDepth = null;
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.bseindia.com/RealTimeBseIndiaAPI/api/MarketDepth/w?flag=&quotetype=EQ&scripcode=${bond.securityCode}`,
    // url: `https://api.bseindia.com/RealTimeBseIndiaAPI/api/MarketDepth/w?flag=&quotetype=EQ&scripcode=939447`,
    headers: marketHeaders,
  };
  try {
    const resp = await axios.request(config);
    if (resp.status == 200) {
      marketDepth = resp.data;
    } else {
      // console.log(`Error fetching marketData for ${bond.securityCode}`);
    }
  } catch (_e) {
    // console.log(`Error fetching marketData for ${bond.securityCode}`);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return marketDepth;
}

async function fetchSecurityInfo(bond) {
  let headers = {
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

  let securityInfo = null;
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.bseindia.com/BseIndiaAPI/api/DebSecurityInfo/w?scripcode=${bond.securityCode}`,
    // url: 'https://api.bseindia.com/BseIndiaAPI/api/DebSecurityInfo/w?scripcode=920EFSL26A',
    headers: headers,
  };

  try {
    const info = await axios.request(config);
    if (info.status == 200) {
      securityInfo = info.data.Table[0];
    } else {
      // console.log(`Error fetching marketData for ${bond.securityCode}`);
    }
  } catch (_e) {
    // console.log(`Error fetching marketData for ${bond.securityCode}`);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return securityInfo;
}

async function createParams(isin, bse_scrape, date) {
  iss = await prisma.issuance.findFirst({ where: { isin: isin } });
  return {
    isin: isin,
    date: date,
    cin: iss.cin,
    company_name: iss.company_name,
    description: iss.description,
    face_value: iss.face_value,
    allotment_date: iss.allotment_date,
    redemption_date: iss.redemption_date,
    coupon: iss.coupon,
    coupon_basis: iss.coupon_basis,
    coupon_type: iss.coupon_type,
    latest_rating: iss.latest_rating,
    latest_rating_agency: iss.latest_rating_agency,
    latest_rating_date: iss.latest_rating_date,
    interest_frequency: iss.interest_frequency,
    principal_frequency: iss.principal_frequency,
    bse_scrip: iss.bse_scrip,
    nse_scrip: iss.nse_scrip,
    bse_scrape: bse_scrape,
  };
}

module.exports.migrateBseMarketData = async function () {
  // console.log('Fetching Bond Data');
  const bondData = await fetchBondData();
  // console.log('Completed Fetching Bond Data');
  let migratedIsins = [];
  let errorList = [];

  for (const bond of bondData) {
    try {
      const marketDepth = await fetchMarketDepth(bond);
      const securityInfo = await fetchSecurityInfo(bond);
      if (securityInfo && marketDepth) {
        //   const data = {
        //     bseScripName: bond.securityName,
        //     bseFaceValue: securityInfo.ISFaceValue,
        //     bseMaturityDate: dateFormatter(securityInfo.ISMaturityDate),
        //     bseCreditRating: securityInfo.ISCreditRating,
        //     bseclose: bond.ltpClose,
        //     bseBuyOrders: formattedStringToNumber(marketDepth.TotalBQty),
        //     bseSellOrders: formattedStringToNumber(marketDepth.TotalSQty),
        //     bseBuyPrice: highestBuyPrices(marketDepth),
        //     bseSellPrice: lowestSellPrice(marketDepth),
        //   };
        // console.log('Pushing Date to DB');
        bond['security_info'] = securityInfo;
        bond['market_depth'] = marketDepth;
        const isin = securityInfo.ISSebiIsin.trim();
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        iss = await prisma.market.findFirst({
          where: { date: today, isin: isin },
        });

        if (iss !== null) {
          await prisma.market.update({
            where: {
              id: iss.id,
            },
            data: {
              bse_scrape: bond,
            },
          });
        } else {
          await prisma.market.create({
            data: await createParams(isin, bond, today),
          });
        }
        console.log(`Success pushing ${isin}`);
        migratedIsins.push(isin);
      } else {
        errorList.push(bond.securityName);
        console.error(`Error fetching bond ${bond.securityName}:`, error);
      }
    } catch (error) {
      errorList.push(bond.securityName);
      console.error(`Exception fetching bond ${bond.securityName}:`, error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  await prisma.$disconnect();
  return { success: migratedIsins, errors: errorList };
};
