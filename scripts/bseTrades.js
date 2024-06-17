const axios = require('axios');
const { JSDOM } = require('jsdom');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function calculateWeightedAveragePrice(data) {
  // Calculate total buy quantity and weighted sum of buy prices
  let totalBQty = 0;
  let weightedBPriceSum = 0;

  for (let i = 1; i <= 5; i++) {
    const bQty = data[`BQty${i}`];
    const bPrice = data[`BPrice${i}`];

    if (bQty != null && bPrice != null) {
      totalBQty += bQty;
      weightedBPriceSum += bPrice * bQty;
    }
  }

  const weightedAvgBPrice = totalBQty > 0 ? weightedBPriceSum / totalBQty : null;

  // Calculate total sell quantity and weighted sum of sell prices
  let totalSQty = 0;
  let weightedSPriceSum = 0;

  for (let i = 1; i <= 5; i++) {
    const sQty = data[`SQty${i}`];
    const sPrice = data[`SPrice${i}`];

    if (sQty != null && sPrice != null) {
      totalSQty += sQty;
      weightedSPriceSum += sPrice * sQty;
    }
  }

  const weightedAvgSPrice = totalSQty > 0 ? weightedSPriceSum / totalSQty : null;

  return {
    weightedAvgBPrice,
    weightedAvgSPrice
  };
}

async function fetchBondData() {
  const response = await axios.get('https://www.bseindia.com/markets/debt/debt_corporate_Eod.aspx');
  const { data } = response;

  const dom = new JSDOM(data);
  const document = dom.window.document;

  const bondData = [];
  const rows = document.querySelectorAll('table#ContentPlaceHolder1_GridViewrcdsFC tr');
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
          url: `https://api.bseindia.com/RealTimeBseIndiaAPI/api/MarketDepth/w?flag=&quotetype=EQ&scripcode=${cells[1].textContent?.trim()}`,
          headers: marketHeaders
        };
        const marketDepth = await axios.request(config);
        const wap = calculateWeightedAveragePrice(marketDepth)
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
          weightedAvgBPrice: wap['weightedAvgBPrice'],
          weightedAvgSPrice: wap['weightedAvgSPrice'],
          totalAsks: marketDepth.data['TotalSQty']
        };
        bondData.push(marketData);
      }
    } catch (e) {
      console.log(index);
    }
    index = index + 1;
  }
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
