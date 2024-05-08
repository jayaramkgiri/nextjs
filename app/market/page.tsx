import Pagination from '@/app/ui/market/pagination';
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
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-5 pl-0">
        <h1 className="mt-2 text-8xl font-bold font-h3 text-brand-primary text-left">
          Market
        </h1>
      </div>
      <div className="mt-4 flex md:mt-8">
        <Search placeholder="Search" />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}