import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/explore/companies/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
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
      <section className="sticky left-0 top-[64px] z-20 w-[90%] bg-white pb-3">
        <div className="my-auto flex justify-center">
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
