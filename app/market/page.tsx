import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/market/table';
import Sort from '@/app/ui/market/sort';
import Filter from '@/app/ui/market/filter';
import YieldCard from '@/app/ui/market/yieldCard';
import Cards from '@/app/ui/overview/cards';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchMarketSummary, noOfPages } from '@/app/models/issuance';

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
  const marketSummary = await fetchMarketSummary();

  const totalPages = await noOfPages({
    OR: [
      {
        totalBuyVolume: { not: 0 },
      },
      {
        totalSellVolume: { not: 0 },
      },
    ],
  });
  return (
    <div className="h-[100vh] pr-6">
      <section className="m-2 flex w-[90%] gap-2">
        <YieldCard rating={'AAA'} />
        <YieldCard rating={'AA'} />
        <YieldCard rating={'A'} />
        <YieldCard rating={'BBB'} />
      </section>
      <section className="sticky left-0 top-0 z-20 m-0 bg-white pb-3 ">
        <div className="relative flex h-20 w-[90%] flex-row items-start justify-between self-stretch overflow-hidden p-0 ">
          <div className="mt-10 flex w-1/2">
            <Search placeholder="Search" />
          </div>
          <div className="mt-6 flex w-1/2 flex-row items-end justify-end gap-8">
            <Sort />
            <Filter />
          </div>
        </div>
        <div className="flex w-[90%] justify-between">
          <div className="flex h-full shrink-0 flex-row items-start justify-end gap-4">
            <Cards cardType="bid" marketSummary={marketSummary} />
            <Cards cardType="ask" marketSummary={marketSummary} />
          </div>
          <div className="flex flex-col justify-end">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </section>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
