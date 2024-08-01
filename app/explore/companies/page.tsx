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
      <section className=" bg-white pb-3 pr-10">
        <div className="my-auto flex justify-center">
          <Search placeholder="Search" />
          <Pagination totalPages={await noOfPages()} />
        </div>
      </section>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </>
  );
}
