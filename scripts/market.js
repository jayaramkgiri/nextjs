const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { migrateBseMarketData } = require('./bseTrades');
const { migrateNseMarketData } = require('./nseTrades');


async function migrateMarketData() {

    await migrateBseMarketData();
    await migrateNseMarketData();
}


migrateMarketData();

