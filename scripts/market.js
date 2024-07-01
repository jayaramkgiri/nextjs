const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { migrateBseMarketData } = require('./bseTrades');
const { migrateNseMarketData } = require('./nseTrades');

async function deleteEarliestVersion() {
    const minSeqNo = await prisma.orderBook.aggregate({
        _min: {
            seqNo: true,
        },
    });
    const seqNo = minSeqNo._min.seqNo;
    if (seqNo && seqNo > 0) {
        try {
            await prisma.orderBook.deleteMany({
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

async function migrateMarketData() {

    const maxSeqNo = await prisma.orderBook.aggregate({
        _max: {
            seqNo: true,
        },
    });
    const seqNo = (maxSeqNo._max.seqNo || 0) + 1;

    await migrateBseMarketData(seqNo);
    await migrateNseMarketData(seqNo);
    // await deleteEarliestVersion();
}


migrateMarketData();

