const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const ITEMS_PER_PAGE = 100;

export const AGENCY_MAP = {
  'CARE RATINGS LIMITED': 'CARE',
  'ICRA LIMITED': 'ICRA',
  'CRISIL RATINGS LIMITED': 'CRISIL',
  'ACUITE RATINGS AND RESEARCH LIMITED': 'ACUITE',
  'INDIA RATING AND RESEARCH PRIVATE LIMITED': 'INDIA RATINGS',
  'INFOMERICS VALUATION AND RATING PRIVATE LIMITED': 'INFOMERICS',
  'BRICKWORK RATINGS INDIA PRIVATE LIMITED': 'BRICKWORKS',
};

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

export function humanize_rating(issuance) {
  let rating = '';
  if (
    issuance.latest_rating !== null &&
    issuance.latest_rating_agency !== null
  ) {
    rating = `${AGENCY_MAP[issuance.latest_rating_agency]} ${
      issuance.latest_rating
    }`;
  }
  return rating;
}


export async function fetchIssuanceById(isin) {
  try {
    const issuance = await prisma.issuance.findFirst({where: {isin: isin}})
    return issuance;
  } catch(error) {
    console.error('Database Error:', error);
  }
}

export async function noOfPages(query) {
  // noStore();
  try {
    const issuancesCount = await prisma.company.count({
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
    });
    return Math.floor(issuancesCount / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Issuances.');
  }
}
