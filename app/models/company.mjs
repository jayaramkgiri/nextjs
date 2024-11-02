// import { unstable_noStore as noStore } from 'next/cache';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const ITEMS_PER_PAGE = 30;
export async function fetchCompanies(query = '', currentPage = 1) {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const companies = await prisma.company.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            name: {
              contains: query, // Partial match in `name`
              mode: 'insensitive', // Case-insensitive
            },
          },
          {
            cin: {
              contains: query, // Partial match in `description`
              mode: 'insensitive', // Case-insensitive
            },
          },
        ],
      },
      orderBy: { name: 'asc' },
    });

    return companies;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Companies.');
  }
}

export async function noOfPages() {
  // noStore();
  try {
    const companiesCount = await prisma.company.count();
    return Math.floor(companiesCount / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Companies.');
  }
}
