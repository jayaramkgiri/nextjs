const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { migrateBseMarketData } = require('./bseTrades.cjs');
const { migrateNseMarketData } = require('./nseTrades.cjs');

const {
  bseOpenClose,
  nseOpenClose,
  bseBuyOrderSellOrder,
  nseBuyOrderSellOrder,
  bseBuyPriceSellPrice,
  nseBuyPriceSellPrice,
  mergeOpenClose,
  mergeBuyOrderSellOrder,
  mergeBuyPriceSellPrice,
} = require('./lib/helpers.cjs');

function marketData(iss, key1, key2) {
  let value = null;
  if (iss.bse_scrape === null) {
    value = eval(`nse${key1}${key2}(iss.nse_scrape)`);
  } else if (iss.nse_scrape === null) {
    value = eval(`bse${key1}${key2}(iss.bse_scrape)`);
  } else {
    value = eval(
      `merge${key1}${key2}(bse${key1}${key2}(iss.bse_scrape), nse${key1}${key2}(iss.nse_scrape))`,
    );
  }
  return value;
}

async function migrateMarketData(date = new Date()) {
  // await Promise.all([migrateBseMarketData(), migrateNseMarketData()]);
  date.setHours(0, 0, 0, 0);
  const trading_iss = await prisma.market.findMany({ where: { date: date } });
  for (const iss of trading_iss) {
    try {
    const openClose = marketData(iss, 'Open', 'Close');
    const buyOrderSellOrder = marketData(iss, 'BuyOrder', 'SellOrder');
    const buyPriceSellPrice = marketData(iss, 'BuyPrice', 'SellPrice');
    await prisma.market.update({
      where: { id: iss.id },
      data: {
        open: openClose['open'],
        close: openClose['close'],
        total_buy_order: buyOrderSellOrder['buyOrder'],
        total_sell_order: buyOrderSellOrder['sellOrder'],
        buy_price: buyPriceSellPrice['buyPrice'],
        sell_price: buyPriceSellPrice['sellPrice'],
        buy_volume:
          buyPriceSellPrice['buyPrice'] * buyOrderSellOrder['buyOrder'],
        sell_volume:
          buyPriceSellPrice['sellPrice'] * buyOrderSellOrder['sellOrder'],
      },
    });
  } catch (error) {
    console.log(`Error updating market data for ${iss.isin} -> ${error}`);
  }
}

migrateMarketData();
