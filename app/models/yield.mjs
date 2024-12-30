import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function fetchYields() {
  // noStore();
  try {
    const date = await lastYieldDate();
    const yields = await prisma.yield.findMany({
      where: {calculated_date: date}
    });
    return yields;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch yields.');
  }
}

async function lastYieldDate() {
  return (await prisma.yield.findFirst({ orderBy: { calculated_date: 'desc' } })).calculated_date;
}
