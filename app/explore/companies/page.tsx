import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/explore/companies/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { noOfPages } from '@/app/models/company.mjs';
import TopNav from '@/app/ui/explore/top-nav';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const totalPages = await noOfPages();
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
      <div className="hidden md:block">
        <TopNav />
      </div>
      <div className="mx-auto flex w-[90%] flex-col items-start  justify-between self-stretch overflow-hidden px-4 md:hidden">
        <h2 className="text-md text-text-primary">Explore</h2>
        <TopNav />
      </div>
      <section className="hidden w-[90%] bg-white pb-3 md:block">
        <div className="flex justify-between">
          <Search placeholder="Search" />
          <Pagination totalPages={totalPages} />
        </div>
      </section>
      <section className="hidden h-full md:block">
        <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <Table query={query} currentPage={currentPage} />
        </Suspense>
      </section>
      <section className="h-full md:hidden">
        <div className="mx-auto flex h-auto w-[90%] flex-col items-start justify-between self-stretch overflow-hidden px-4">
          <div className="flex w-full">
            <Search placeholder="Search" />
          </div>
          <div className="flex w-full flex-col justify-end">
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
    </>
  );
}
