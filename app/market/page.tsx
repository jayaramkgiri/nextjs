import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/market/table';
import Sort from '@/app/ui/market/sort';
import Filter from '@/app/ui/market/filter';
import YieldCard from '@/app/ui/market/yieldCard';
import Cards from '@/app/ui/common/cards';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchMarketSummary, noOfPages } from '@/app/models/market.mjs';
import { KiteConnect } from 'kiteconnect';
import {fetchYields} from '@/app/models/yield.mjs';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    sort?: string;
    filter?: string;
    page?: string;
    request_token?: string;
  };
}) {
  const kc = new KiteConnect({ api_key: process.env.KITE_API_KEY! });
  const query = searchParams?.query || '';
  const sort = searchParams?.sort || '';
  const filter = searchParams?.filter || '';
  const currentPage = Number(searchParams?.page) || 1;
  const marketSummary = await fetchMarketSummary(null, query, filter);

  console.log(searchParams?.request_token);
  if (searchParams?.request_token !== undefined) {
    const response = await kc.generateSession(
      searchParams.request_token,
      process.env.KITE_API_SECRET!,
    );
    kc.setAccessToken(response.access_token);
    const profile = await kc.getProfile();
    console.log(response.access_token);
    console.log('Profile:', profile);
  }

  const totalPages = await noOfPages(null, query, filter);
  const yields:Array<any> = await fetchYields();
  return (
    <div className="h:auto md:pr-6">
      <section className="m-2 hidden w-[85%] gap-2 md:flex">
        <YieldCard rating={'AAA'} yields={yields}/>
        <YieldCard rating={'AA'} yields={yields}/>
        <YieldCard rating={'A'} yields={yields}/>
        <YieldCard rating={'BBB'} yields={yields}/>
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
          <Table
            query={query}
            currentPage={currentPage}
            sort={sort}
            filter={filter}
          />
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
            <Table
              query={query}
              currentPage={currentPage}
              sort={sort}
              filter={filter}
            />
          </Suspense>
          <div className="flex flex-col justify-end">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </section>
    </div>
  );
}
