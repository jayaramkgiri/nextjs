import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchYields(
date = new Date()
) {
  // noStore();
  try {
    date.setHours(0, 0, 0, 0);

    const yields = await prisma.yield.findFirst({
      where: {calculated_date: date}
    });
    return yields;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch yields.');
  }
}