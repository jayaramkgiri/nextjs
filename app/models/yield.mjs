const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function fetchYields() {
  // noStore();
  try {
    const yields = await prisma.yield.findFirst({
      orderBy: { calculated_date: 'desc' },
    });
    return yields;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch yields.');
  }
}
