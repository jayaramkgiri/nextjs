import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/market/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchInvoicesPages(query);
  const totalPages = 10;
  return (
    <>
      <section className="sticky left-0 top-0 z-20 bg-white pb-3 ">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 w-2/3">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 list-none">
                <li>
                  <a href="#" className="block w-1/3 py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3  w-1/3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="my-auto flex justify-center">
          <Search placeholder="Search" />
          <Pagination totalPages={10} />
        </div>
      </section >
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </>
  );
}
