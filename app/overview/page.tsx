import YieldTable from '@/app/ui/overview/stepper';
import { Suspense } from 'react';
import Cards from '@/app/ui/overview/cards';
import { CardsSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <>
      <section className="sticky left-0 top-0 z-20  bg-white pb-8">
        <div className="flex flex-row items-start justify-between self-stretch overflow-hidden py-0 pl-0 pr-5">
          <h1 className="text-brand-primary mt-5 pl-4 text-left text-15xl font-bold">
            Overview
          </h1>
          <div className="mx-8 my-0 flex h-auto shrink-0 flex-row items-end justify-start gap-4 overflow-hidden py-0">
            <Cards cardType="bid" />
            <Cards cardType="ask" />
          </div>
        </div>
      </section>
      <section className="grid h-[450px] w-[94%] gap-10 overflow-auto p-4 pr-12 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <YieldTable rating="AAA" />
        </Suspense>
        <Suspense fallback={<CardsSkeleton />}>
          <YieldTable rating="AA" />
        </Suspense>
        <Suspense fallback={<CardsSkeleton />}>
          <YieldTable rating="A" />
        </Suspense>
        <Suspense fallback={<CardsSkeleton />}>
          <YieldTable rating="BBB" />
        </Suspense>
      </section>
    </>
  );
}
