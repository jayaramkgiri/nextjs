const { db } = require('@vercel/postgres');

async function createBseOrderBook(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS bseOrderBook (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        createdAt DATE NOT NULL,
        updatedAt DATE NOT NULL,
        seqNo INT NOT NULL,
        isin VARCHAR(255) NOT NULL,
        scripName VARCHAR(255) NOT NULL,
        scripCode VARCHAR(255) NOT NULL,
        faceValue DOUBLE PRECISION,
        maturityDate Date,
        creditRating VARCHAR(255),
        close DOUBLE PRECISION,
        open DOUBLE PRECISION,
        high DOUBLE PRECISION,
        low DOUBLE PRECISION,
        totalBuyQty INT,
        totalSellQty INT,
        buyPrice DOUBLE PRECISION,
        sellPrice DOUBLE PRECISION
      );
    `;

    console.log(`Created "bseOrderBook" table`);

    return createTable;
  } catch (error) {
    console.error('Error creating bseOrderBook:', error);
    throw error;
  }
}

async function createNseOrderBook(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS n
      seOrderBook (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        createdAt DATE NOT NULL,
        updatedAt DATE NOT NULL,
        seqNo INT NOT NULL,
        isin VARCHAR(255) NOT NULL,
        scripName VARCHAR(255) NOT NULL,
        faceValue DOUBLE PRECISION,
        maturityDate Date,
        creditRating VARCHAR(255),
        close DOUBLE PRECISION,
        open DOUBLE PRECISION,
        high DOUBLE PRECISION,
        low DOUBLE PRECISION,
        totalBuyQty INT,
        totalSellQty INT,
        buyPrice DOUBLE PRECISION,
        sellPrice DOUBLE PRECISION
      );
    `;

    console.log(`Created "bseOrderBook" table`);

    return createTable;
  } catch (error) {
    console.error('Error creating bseOrderBook:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await createBseOrderBook(client);
  await createNseOrderBook(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
