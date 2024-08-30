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
    <div className="h:auto md:pr-6">
      <section className="m-2 hidden w-[90%] gap-2 md:flex">
        <YieldCard rating={'AAA'} />
        <YieldCard rating={'AA'} />
        <YieldCard rating={'A'} />
        <YieldCard rating={'BBB'} />
      </section>
      <section className="hidden h-full md:block">
        <section className="m-0 h-auto bg-white pb-3 ">
          <div className=" flex h-20 w-[90%] flex-row items-start justify-between self-stretch overflow-hidden p-0">
            <div className="mt-10 flex w-1/2">
              <Search placeholder="Search" />
            </div>
            <div className="mt-6 flex w-1/2 flex-row items-end justify-end gap-8">
              <Sort />
              <Filter />
            </div>
          </div>
          <div className="mt-3 flex w-[90%] justify-between">
            <div className="flex h-full shrink-0 flex-row items-start justify-end gap-4">
              <Cards cardType="bid" marketSummary={marketSummary} />
              <Cards cardType="ask" marketSummary={marketSummary} />
            </div>
            <div className="flex flex-col justify-end">
              <Pagination totalPages={totalPages} />
            </div>
          </div>
        </section>
        <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <Table query={query} currentPage={currentPage} />
        </Suspense>
      </section>
      <section className="h-full md:hidden">
        <div className="mx-auto flex h-auto w-[90%] flex-col items-start justify-between self-stretch overflow-hidden px-4">
          <h2 className="text-md text-text-primary">Market</h2>
          <div className="flex w-full">
            <Search placeholder="Search" />
          </div>
          <div className="mt-3 flex h-auto w-full flex-row items-end justify-between">
            <Sort />
            <Filter />
          </div>
          <div className="mt-2 flex h-full w-full shrink-0 items-start justify-between gap-4">
            <Cards cardType="bid" marketSummary={marketSummary} />
            <Cards cardType="ask" marketSummary={marketSummary} />
          </div>
          <div className="flex flex-col justify-end">
            <Pagination totalPages={totalPages} />
          </div>
          <Suspense
            key={query + currentPage}
            fallback={<InvoicesTableSkeleton />}
          >
            <Table query={query} currentPage={currentPage} />
          </Suspense>
          <div className="flex flex-col justify-end">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </section>
    </div>
  );
}
