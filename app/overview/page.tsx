import Stepper from '@/app/ui/overview/stepper';
import YieldTable from '@/app/ui/overview/stepper';
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import Cards from '@/app/ui/overview/cards';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <>
      <section className="sticky left-0 top-0 z-20 bg-white pb-3 ">
        <div className="flex flex-col items-start justify-start self-stretch overflow-hidden py-0 pl-0 pr-5">
          <h1 className="text-brand-primary mt-5 pl-4 text-left text-15xl font-bold">
            Overview
          </h1>
        </div>
      </section>
      <section className="grid w-[90%] gap-10 p-4 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <YieldTable rating='AAA' />
        </Suspense>
        <Suspense fallback={<CardsSkeleton />}>
          <YieldTable rating='AA' />
        </Suspense>
        <Suspense fallback={<CardsSkeleton />}>
          <YieldTable rating='A' />
        </Suspense>
        <Suspense fallback={<CardsSkeleton />}>
          <YieldTable rating='BBB' />
        </Suspense>
      </section>
    </>
  );
}
