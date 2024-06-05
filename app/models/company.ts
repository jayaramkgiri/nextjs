import { unstable_noStore as noStore } from 'next/cache';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITEMS_PER_PAGE = 30;
export async function fetchCompanies(
  // query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {

    const companies = await prisma.company.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      orderBy: [
        {name: 'asc'}
      ],
      include: {
        _count: {
          select: { issuances: true },
        },
      },
    });

    return companies;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Companies.');
  }
}

export async function noOfPages(
) {
  noStore();
  try {

    const issuancesCount = await prisma.company.count();
    return Math.floor(issuancesCount/ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Companies.');
  }
}