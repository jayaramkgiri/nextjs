import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/explore/companies/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { noOfPages } from '@/app/models/company';
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
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
      <TopNav />
      <section className="hidden bg-white pb-3 pr-10 md:block">
        <div className="flex justify-between">
          <Search placeholder="Search" />
          <Pagination totalPages={await noOfPages()} />
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
      <section className="h-full w-full md:hidden">
        <div className="mx-auto flex h-auto w-full flex-col items-start justify-between self-stretch overflow-hidden">
          <div className="flex w-full">
            <Search placeholder="Search" />
          </div>
          <div className="flex w-full flex-col justify-end">
            <Pagination totalPages={await noOfPages()} />
          </div>
          <Suspense
            key={query + currentPage}
            fallback={<InvoicesTableSkeleton />}
          >
            <Table query={query} currentPage={currentPage} />
          </Suspense>
          <div className="flex flex-col justify-end">
            <Pagination totalPages={await noOfPages()} />
          </div>
        </div>
      </section>
    </>
  );
}
