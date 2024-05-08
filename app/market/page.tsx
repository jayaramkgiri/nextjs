import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from '@nextui-org/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/market/table';
import { CreateInvoice } from '@/app/ui/market/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Suspense } from 'react';

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
      <section>
        <div className="flex flex-col items-start justify-start self-stretch overflow-hidden py-0 pl-0 pr-5">
          <h1 className="text-8xl font-h3 text-brand-primary mt-2 text-left font-bold">
            Market
          </h1>
        </div>
        <div className="mt-4 flex my-auto">
          <Search placeholder="Search" />
          <Pagination
            total={10}
            classNames={{
              wrapper:
                'gap-1 overflow-visible h-10 rounded border border-divider text-gray-500',
              item: 'w-8 h-8 text-small rounded-lg bg-transparent border border-solid border-gray-200',
              cursor:
                "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
            }}
          />
        </div>
      </section>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </>
  );
}
