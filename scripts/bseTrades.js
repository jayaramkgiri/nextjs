const axios = require('axios');
const { JSDOM } = require('jsdom');
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

function findHighestLowestPrices({ data }) {
  let highestBPrice = null;
  let lowestSPrice = null;


  // Find the highest buy price
  for (let i = 1; i <= 5; i++) {
    const bPriceStr = data[`BPrice${i}`];
    if (bPriceStr != null) {
      const bPrice = formattedStringToNumber(bPriceStr)
      if ((highestBPrice === null || bPrice > highestBPrice)) {
        highestBPrice = bPrice;
      }
    }
  }

  // Find the lowest sell price
  for (let i = 1; i <= 5; i++) {
    const sPriceStr = data[`SPrice${i}`];

    if (sPriceStr != null) {
      const sPrice = formattedStringToNumber(sPriceStr)
      if ((lowestSPrice === null || sPrice < lowestSPrice)) {
        lowestSPrice = sPrice;
      }
    }
  }

  return {
    highestBPrice,
    lowestSPrice
  };
}

async function fetchBondData() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.bseindia.com/markets/debt/debt_corporate_EOD.aspx');
  await page.setViewport({ width: 1200, height: 768 });

  const bondData = [];
  const tableSelector = 'table#ContentPlaceHolder1_GridViewrcdsFC';
  await page.waitForSelector(tableSelector);
  let tableData = await page.evaluate((selector) => {

    const rows = document.querySelector(selector).querySelectorAll('tr');
    const marketHeaders = {
      "accept": "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "en-US,en;q=0.9,ta;q=0.8,en-GB;q=0.7",
      "cache-control": "no-cache",
      "origin": "https://www.bseindia.com",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "referer": "https://www.bseindia.com/",
      "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    }

    let index = 0;

    for (let row of rows) {
      try {
        const cells = row.querySelectorAll('td.TTRow, td.TTRow_right');
        if (cells && cells.length > 1) {
          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.bseindia.com/RealTimeBseIndiaAPI/api/MarketDepth/w?flag=&quotetype=EQ&scripcode=${cells[0].textContent?.trim()}`,
            // url: `https://api.bseindia.com/RealTimeBseIndiaAPI/api/MarketDepth/w?flag=&quotetype=EQ&scripcode=973883`,
            headers: marketHeaders
          };
          const marketDepth = await axios.request(config);
          const price = findHighestLowestPrices(marketDepth)
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
            totalBids: marketDepth.data['TotalBQty'],
            highestBPrice: price['highestBPrice'],
            lowestSPrice: price['lowestSPrice'],
            totalAsks: marketDepth.data['TotalSQty'],
          };
          return marketData;
        }
      } catch (e) {
        console.log(index);
      }
      index = index + 1;
    }
  });

  page.evaluate(`__doPostBack('ctl00$ContentPlaceHolder1$GridViewrcdsFC','Page$2')`);
  await new Promise(resolve => setTimeout(resolve, 3000));
  bondData = bondData.concat(tableData);
  console.log(bondData);
  await browser.close();
  return bondData;
}

async function migrateBondData() {
  try {
    const bondData = await fetchBondData();

    // for (const bond of bondData) {
    //   await prisma.bond.upsert({
    //     where: { securityCode: bond.securityCode },
    //     update: bond,
    //     create: bond,
    //   });
    // }
    console.log(bondData);
    console.log('Bond data migration completed.');
  } catch (error) {
    console.error('Error fetching or migrating bond data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

migrateBondData();



const puppeteer = require('puppeteer');



(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250
  });

  const page = await browser.newPage();

  await page.goto(
    'https://www.ftrac.co.in/CP_PRI_MEM_TRAD_MARK_WATC_VIEW.aspx',
  );


  await page.waitForSelector('#ctl00_SuperMainContent_txtFrmDealDate');

  await page.$eval('#ctl00_SuperMainContent_txtFrmDealDate', el => el.value = '01/01/2020');

  await page.waitForSelector('#ctl00_SuperMainContent_txtToDealDate');

  await page.$eval('#ctl00_SuperMainContent_txtToDealDate', el => el.value = '07/01/2020');

  await page.waitForSelector('#ctl00_SuperMainContent_btnExprtExcel');
  await page.click('#ctl00_SuperMainContent_btnExprtExcel');

  await browser.close();

});