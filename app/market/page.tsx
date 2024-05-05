import Pagination from '@/app/ui/market/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/market/table';
import { CreateInvoice } from '@/app/ui/market/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchInvoicesPages } from '@/app/lib/data';
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
    // <div className="w-full">
    //   <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-5 pl-0">
    //   <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px] mq825:text-10xl mq825:leading-[38px]">
    //           Market
    //         </h1>
    //   </div>
    //   <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
    //     <Search placeholder="Search invoices..." />
    //   </div>
    //    <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
    //     <Table query={query} currentPage={currentPage} />
    //   </Suspense>
    //   <div className="mt-5 flex w-full justify-center">
    //     <Pagination totalPages={totalPages} />
    //   </div>
    // </div>
    <div className="w-full">
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-5 pl-0">
        <h1 className="m-0 relative text-17xl leading-[48px] font-bold font-h3 text-brand-primary text-left inline-block min-w-[125px] mq975:text-10xl mq975:leading-[38px] mq450:text-3xl mq450:leading-[29px]">
          Market
        </h1>
       <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
         <Search placeholder="Search" />
       </div>
        <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
         <Table query={query} currentPage={currentPage} />
       </Suspense>
       <div className="mt-5 flex w-full justify-center">
         <Pagination totalPages={totalPages} />
       </div>
     </div>
     </div>
  );
}