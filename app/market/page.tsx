import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/market/table';
import Sort from '@/app/ui/market/sort';
import Filter from '@/app/ui/market/filter';
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
    <div className="pr-6">
      <section className="sticky left-0 top-0 z-20 mt-10 bg-white pb-3 ">
        <div className="flex w-full flex-row items-start justify-between self-stretch overflow-hidden p-0">
          <div className="w-1/2">
            <Search placeholder="Search" />
          </div>
          <div className="z-30 flex w-1/2 flex-row">
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
