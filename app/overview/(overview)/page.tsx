import Cards from '@/app/ui/overview/cards';
import SideNav from '@/app/ui/overview/sidenav';
import Stepper from '@/app/ui/overview/stepper';
import RevenueChart from '@/app/ui/overview/revenue-chart';
import LatestInvoices from '@/app/ui/overview/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';

 
export default async function Page() {
  return (
    <main>
      {/* <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div> */}
      <section className="self-stretch w-[880px] bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-8 px-8 pb-0 box-border text-left text-17xl text-color font-title-lg">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-5 pl-0">
            <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px] mq800:text-10xl mq800:leading-[38px]">
              Overview
            </h1>
          </div>
          <div className="w-[816px] flex flex-row items-start justify-start gap-[32px] text-base text-dimgray">
            <div className="flex-1 rounded-lgi bg-white shadow-[0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] h-[480px] flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start p-4 gap-[16px]">
                <div className="self-stretch h-12 flex flex-col items-start justify-start text-5xl text-color">
                  <h3 className="m-0 self-stretch flex-1 relative text-inherit leading-[150%] font-semibold font-inherit flex items-center">
                    AAA Rated NCDs
                  </h3>
                </div>
                <nav className="m-0 self-stretch h-8 flex flex-row items-start justify-start gap-[32px] text-left text-base text-darkgray font-title-lg">
                  <div className="self-stretch w-16 relative leading-[150%] font-semibold inline-block shrink-0">
                    Tenor
                  </div>
                  <div className="self-stretch w-16 relative leading-[150%] font-semibold inline-block shrink-0">
                    Yield
                  </div>
                  <div className="self-stretch w-16 relative leading-[150%] font-semibold inline-block shrink-0">{`Bid `}</div>
                  <div className="self-stretch w-16 relative leading-[150%] font-semibold inline-block shrink-0">
                    Ask
                  </div>
                </nav>
                <div className="self-stretch h-12 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      1-3 Y
                    </div>
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      7.4%
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px] object-cover"
                              alt=""
                              src="/rupee@2x.png"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            6.71 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          3526 units
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px] object-cover"
                              alt=""
                              src="/rupee-1@2x.png"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            4.23 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          2526 units
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover mt-[-3px]"
                    alt=""
                    src="/vector-37@2x.png"
                  />
                </div>
                <div className="self-stretch h-12 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      1-3 Y
                    </div>
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      7.4%
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px]"
                              alt=""
                              src="/rupee-2.svg"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            6.71 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          3526 units
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px]"
                              alt=""
                              src="/rupee-3.svg"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            4.23 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          2526 units
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover mt-[-3px]"
                    alt=""
                    src="/vector-37@2x.png"
                  />
                </div>
                <div className="self-stretch h-12 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      1-3 Y
                    </div>
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      7.4%
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px]"
                              alt=""
                              src="/rupee-2.svg"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            6.71 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          3526 units
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px]"
                              alt=""
                              src="/rupee-3.svg"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            4.23 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          2526 units
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-3px]"
                    alt=""
                    src="/vector-37-2.svg"
                  />
                </div>
                <div className="self-stretch h-12 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      1-3 Y
                    </div>
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      7.4%
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px]"
                              alt=""
                              src="/rupee-2.svg"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            6.71 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          3526 units
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px]"
                              alt=""
                              src="/rupee-3.svg"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            4.23 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          2526 units
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-3px]"
                    alt=""
                    src="/vector-37-2.svg"
                  />
                </div>
                <div className="self-stretch h-12 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      1-3 Y
                    </div>
                    <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
                      7.4%
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px]"
                              alt=""
                              src="/rupee-2.svg"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            6.71 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          3526 units
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                            <img
                              className="w-2 relative h-[11px]"
                              alt=""
                              src="/rupee-3.svg"
                            />
                          </div>
                          <div className="self-stretch flex-1 relative leading-[150%]">
                            4.23 Cr
                          </div>
                        </div>
                        <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                          2526 units
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover mt-[-3px]"
                    alt=""
                    src="/vector-37@2x.png"
                  />
                </div>
              </div>
            </div>
            <Stepper
              rupee="/rupee-2.svg"
              rupee1="/rupee-3.svg"
              customShape="/vector-37-2.svg"
              rupee2="/rupee-2.svg"
              rupee3="/rupee-3.svg"
              linkLabeller="/vector-37-2.svg"
              rupee4="/rupee-2.svg"
              vector37="/vector-37@2x.png"
            />
          </div>
          <div className="w-[816px] flex flex-row items-start justify-start gap-[32px]">
            <Stepper
              rupee="/rupee@2x.png"
              rupee1="/rupee-1@2x.png"
              customShape="/vector-37@2x.png"
              rupee2="/rupee@2x.png"
              rupee3="/rupee-1@2x.png"
              linkLabeller="/vector-37@2x.png"
              rupee4="/rupee@2x.png"
              vector37="/vector-37-2.svg"
              propColor="#404040"
              propPadding="unset"
              propMinWidth="unset"
              propMinWidth1="unset"
              propMinWidth2="unset"
              propMinWidth3="unset"
            />
            <Stepper
              rupee="/rupee@2x.png"
              rupee1="/rupee-3.svg"
              customShape="/vector-37-2.svg"
              rupee2="/rupee-2.svg"
              rupee3="/rupee-3.svg"
              linkLabeller="/vector-37-2.svg"
              rupee4="/rupee-2.svg"
              vector37="/vector-37-2.svg"
              propColor="#404040"
              propPadding="unset"
              propMinWidth="unset"
              propMinWidth1="unset"
              propMinWidth2="unset"
              propMinWidth3="unset"
            />
          </div>
        </div>
      </section>
      <div className="self-stretch flex-1 bg-white overflow-hidden flex flex-col items-center justify-start py-16 pr-8 pl-0 gap-[32px]">
        <Cards rupee="/rupee-40.svg" totalBid="Total Bid" />
        <Cards rupee="/rupee-41.svg" totalBid="Total Ask" propColor="#eb5757" />
      </div> 
    </main>
  );
}