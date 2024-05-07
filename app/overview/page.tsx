import Stepper from '@/app/ui/overview/stepper';
import YieldTable from '@/app/ui/overview/stepper';
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import Cards from "@/app/ui/overview/cards";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';

 
export default async function Page() {
  return (
    <main>
      <div className="self-stretch hidden md:block overflow-y-auto mb-4 flex flex-col items-start justify-start py-0 pr-5 pl-0 text-17xl">
        <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px] mq825:text-10xl mq825:leading-[38px]">
          Overview
        </h1>
      </div>
      <section className="grid gap-6 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
        <YieldTable />
          </Suspense>
      </section>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* <RevenueChart /> */}
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          {/* <LatestInvoices /> */}
        </Suspense>
      </div>
      <div className="w-full h-[982px] relative rounded-2xl bg-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq825:h-auto">
      {/* <section className="h-[982px] w-[880px] bg-white overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-8 px-8 pb-0 box-border max-w-[calc(100%_-_560px)] text-left text-17xl text-brand-primary font-h3 mq825:h-auto">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full shrink-0 mq450:gap-[16px]">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-5 pl-0">
            <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px] mq825:text-10xl mq825:leading-[38px]">
              Overview
            </h1>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <YieldTable />
            <YieldTable />
            {/* //   bidPadding="0px 0px 0px"
            //   propPadding="0px 0px 0px"
            //   propMinWidth="69px"
            //   propMinWidth1="69px"
            //   propMinWidth2="69px"
            //   propLineHeight="25px"
            //   propMinWidth3="69px"
            //   propLineHeight1="25px"
            // /> */}
          {/* </div> */}
          {/* <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]"> */}
            {/* //   bidPadding="unset"
            //   propPadding="unset"
            //   propMinWidth="74px"
            //   propMinWidth1="74px"
            //   propMinWidth2="74px"
            //   propLineHeight="150%"
            //   propMinWidth3="74px"
            //   propLineHeight1="150%"
            // /> */}
            {/* <YieldTable /> */}
            {/* //   bidPadding="unset"
            //   propPadding="unset"
            //   propMinWidth="74px"
            //   propMinWidth1="74px"
            //   propMinWidth2="74px"
            //   propLineHeight="150%"
            //   propMinWidth3="74px"
            //   propLineHeight1="150%"
            // /> */}
          {/* </div> */}
        {/* </div>  */}
       {/* </section>  */}
      </div>
      {/* <div className="h-[1024px] w-[280px] bg-neutral-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-16 pr-8 pl-0 box-border gap-[32px] mq450:gap-[16px] mq825:pt-[42px] mq825:pb-[42px] mq825:box-border">
      </div> */}
   </main>
  );
}