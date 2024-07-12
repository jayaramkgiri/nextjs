const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { migrateBseMarketData } = require('./bseTradesNew');
const { migrateNseMarketData } = require('./nseTradesNew');

async function migrateMarketData() {
  // await prisma.issuance.updateMany({
  //   data: {
  //     nseBuyOrders: null,
  //     nseSellOrders: null,
  //     nseBuyPrice: null,
  //     nseSellPrice: null,
  //     nseclose: null,
  //     bseBuyOrders: null,
  //     bseSellOrders: null,
  //     bseBuyPrice: null,
  //     bseSellPrice: null,
  //     bseclose: null,
  //     totalBuyVolume: null,
  //     totalSellVolume: null,
  //   },
  // });
  await Promise.all([migrateBseMarketData(), migrateNseMarketData()]);

  await prisma.$queryRaw`UPDATE "Issuance" SET "totalBuyVolume"=((coalesce("bseBuyOrders",0) * coalesce("bseBuyPrice", 0 )) + (coalesce("nseBuyOrders", 0) * coalesce("nseBuyPrice", 0)));`;
  await prisma.$queryRaw`UPDATE "Issuance" SET "totalSellVolume"=((coalesce("bseSellOrders",0) * coalesce("bseSellPrice", 0 )) + (coalesce("nseSellOrders", 0) * coalesce("nseSellPrice", 0)));`;
}

migrateMarketData();
