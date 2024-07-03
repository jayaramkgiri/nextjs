import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/market/table';
import Cards from '@/app/ui/overview/cards';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchMarketSummary } from '@/app/models/orderBook'

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
  const marketSummary = await fetchMarketSummary();
  const totalPages = 10;
  return (
    <div className="pr-6">
      <section className="sticky left-0 top-0 z-20 bg-white pb-3 ">
        <div className="flex flex-row items-start justify-between self-stretch overflow-hidden py-0 pl-0 pr-5">
          <h1 className="text-brand-primary mt-5 pl-2 text-left text-15xl font-bold">
            Market
          </h1>
          <div className="my-0 flex h-auto shrink-0 flex-row items-end justify-start gap-4 overflow-hidden py-0">
            <Cards cardType="bid" marketSummary={marketSummary} />
            <Cards cardType="ask" marketSummary={marketSummary} />
          </div>
        </div>
        <div className="my-auto flex w-[90%] justify-center">
          <Search placeholder="Search" />
          <Pagination totalPages={10} />
        </div>
      </section>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
