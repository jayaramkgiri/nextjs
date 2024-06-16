const axios = require('axios');
const { JSDOM } = require('jsdom');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fetchBondData() {
  const response = await axios.get('https://www.bseindia.com/markets/debt/debt_corporate_Eod.aspx');
  const { data } = response;

  const dom = new JSDOM(data);
  const document = dom.window.document;

  const bondData = [];
  const rows = document.querySelectorAll('table#ContentPlaceHolder1_GridViewrcdsFC tr');

  rows.forEach((row, index) => {
    try {
    const cells = row.querySelectorAll('td.TTRow, td.TTRow_right');
    if (cells && cells.length > 1) {
      bondData.push({
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
      });
    }
  } catch(e) {
    console.log(index);
  }
  });

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
