import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITEMS_PER_PAGE = 30;
export async function fetchIssuances(
  // query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {

    const issuances = await prisma.issuance.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      include: {
        company: true
        },
      orderBy: {
        company: {name: 'asc'}
      }
      });
    return issuances;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Companies.');
  }
}