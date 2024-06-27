
import { unstable_noStore as noStore } from 'next/cache';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITEMS_PER_PAGE = 30;
export async function fetchIssuances(
  query: object = {},
  currentPage: number = 1
) {
  // noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {

    const issuances = await prisma.issuance.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: query,
      include: {
        company: true
      },
      orderBy: {
        company: { name: 'asc' }
      }
    });
    issuances.forEach((iss: any) => iss['issuerName'] = iss.company.name)
    return issuances;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Issuances.');
  }
}

export async function fetchAllIsins(
) {
  // noStore();
  try {
    const issuances = await prisma.issuance.findMany({
      select: {
        isin: true,
      },
    });
    return issuances.map((i) => i.isin);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Issuances.');
  }
}

export async function noOfPages(
) {
  // noStore();
  try {

    const issuancesCount = await prisma.issuance.count();
    return Math.floor(issuancesCount / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Companies.');
  }
}