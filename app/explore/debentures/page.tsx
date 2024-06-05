import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/explore/issuances/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { noOfPages } from '@/app/models/issuance';
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
      <section className="bg-white pb-3 pr-10">
        <div className="flex justify-between">
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
