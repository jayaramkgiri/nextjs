const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const ITEMS_PER_PAGE = 100;
export async function fetchIssuances(
  query = '',
  currentPage = 1,
  orderBy = { company_name: 'asc' },
) {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const issuances = await prisma.issuance.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            company_name: {
              contains: query, // Partial match in `name`
              mode: 'insensitive', // Case-insensitive
            },
          },
          {
            isin: {
              contains: query, // Partial match in `description`
              mode: 'insensitive', // Case-insensitive
            },
          },
          {
            latest_rating_agency: {
              contains: query, // Partial match in `description`
              mode: 'insensitive', // Case-insensitive
            },
          },
          {
            latest_rating: {
              contains: query, // Partial match in `description`
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
      orderBy: orderBy,
    });
    return issuances;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Issuances.');
  }
}

export async function noOfPages() {
  // noStore();
  try {
    const issuancesCount = await prisma.company.count();
    return Math.floor(issuancesCount / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Issuances.');
  }
}
