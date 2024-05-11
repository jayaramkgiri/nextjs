import Stepper from '@/app/ui/overview/stepper';
import YieldTable from '@/app/ui/overview/stepper';
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import Cards from "@/app/ui/overview/cards";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';

 
export default async function Page() {
  return (
    <>
      <section className='sticky top-0 left-0 z-20 bg-white pb-3 '>
        <div className="flex flex-col items-start justify-start self-stretch overflow-hidden py-0 pl-0 pr-5">
          <h1 className="text-brand-primary mt-5 text-left font-bold text-15xl">
            Overview
          </h1>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-4 p-4">
        <Suspense fallback={<CardsSkeleton />}>
        <YieldTable />
          </Suspense>
          <Suspense fallback={<CardsSkeleton />}>
        <YieldTable />
          </Suspense>
          <Suspense fallback={<CardsSkeleton />}>
        <YieldTable />
          </Suspense>
          <Suspense fallback={<CardsSkeleton />}>
        <YieldTable />
          </Suspense>
      </section>
   </>
  );
}