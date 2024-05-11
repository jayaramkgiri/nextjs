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
      <section className='sticky top-0 left-0 z-20 bg-white pb-3 '>
        <div className="flex flex-col items-start justify-start self-stretch overflow-hidden py-0 pl-0 pr-5">
          <h1 className="text-brand-primary mt-5 text-left font-bold text-15xl">
            Explore
          </h1>
        </div>
        <div className="flex justify-center my-auto">
          <Search placeholder="Search" />
          <Pagination totalPages={10} />
        </div>
      </section>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
          <Table query={query} currentPage={currentPage} />
      </Suspense>
    </>
  );
}
