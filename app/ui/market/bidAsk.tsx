'use client';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { currencyFormatter } from '@/app/lib/utils';
import { Tooltip } from "@nextui-org/react";
import MarketDepth from '@/app/ui/explore/issuances/marketDepth';

function upArrow() {
  return (
    <div className="h-auto p-[2px] text-seagreen">
      <FaArrowUp />
    </div>
  );
}

function downArrow() {
  return (
    <div className="h-auto p-[2px] text-indianred">
      <FaArrowDown />
    </div>
  );
}

export function BidAskCell({
  units,
  price,
  closePrice,
}: {
  units: number | null;
  price: number | null;
  closePrice: number | null;
}) {
  return units && units !== 0 ? (
    <Tooltip
      delay={1000}
      closeDelay={500}
      content={
        <div
          key="1"
          className="flex h-[calc(50vh-160px)] flex-col divide-y divide-solid divide-gray-200 overflow-auto"
        >
          <div className="m-0 flex w-full flex-row justify-between divide-x divide-solid divide-gray-200 p-0 text-xs">
            <div className="m-0 w-full">
              <p className="m-0 px-2 py-1 text-green-500">Buy</p>
            </div>
            <div className="w-full">
              <p className="m-0 px-2 py-1 text-red-500">Sell</p>
            </div>
          </div>
          <div className=" flex h-72 w-full flex-col bg-white p-0 text-xs">
            <div className="flex w-full flex-row justify-start divide-x divide-solid divide-gray-200 pb-0">
              <div className="w-1/2">
                <div className="m-2 flex h-6 flex-row items-start justify-between self-stretch text-darkgray">
                  <div className=" inline-block w-16 shrink-0 font-semibold">
                    Tenor
                  </div>
                  <div className=" inline-block w-16 shrink-0 font-semibold">
                    Yield
                  </div>
                  <div className=" inline-block w-16 shrink-0 font-semibold">
                    Bid
                  </div>
                  <div className=" inline-block w-16 shrink-0  font-semibold">
                    Ask
                  </div>
                </div>
                {new Array(10).fill('').map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="mx-2 flex h-6 flex-1 flex-row items-start justify-between self-stretch"
                    >
                      <div className="relative inline-block w-16 shrink-0 self-stretch">
                        1 Y
                      </div>
                      <div className="relative inline-block w-16 shrink-0 self-stretch">
                        10%
                      </div>
                      <div className="flex w-16 flex-col items-start justify-start gap-2 self-stretch text-seagreen">
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-auto p-[2px]">
                            <FaIndianRupeeSign />
                          </div>
                          20 Cr
                        </div>
                      </div>
                      <div className="flex w-16 flex-col items-start justify-start gap-2 self-stretch text-indianred">
                        <div className="flex flex-row items-start justify-start self-stretch">
                          <div className="h-auto p-[2px]">
                            <FaIndianRupeeSign />
                          </div>
                          2 Cr
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-1/2">
                <div className="text-sm m-2 flex h-6 w-full flex-row items-start justify-between self-stretch text-darkgray">
                  <div className="relative inline-block w-16 shrink-0 self-stretch font-semibold">
                    Tenor
                  </div>
                  <div className="relative inline-block w-16 shrink-0 self-stretch font-semibold">
                    Yield
                  </div>
                  <div className="relative inline-block w-16 shrink-0 self-stretch font-semibold">
                    Bid
                  </div>
                  <div className="relative inline-block w-16 shrink-0 self-stretch font-semibold">
                    Ask
                  </div>
                </div>
                {new Array(10).fill('').map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="mx-2 flex h-6 flex-1 flex-row items-start justify-between self-stretch"
                    >
                      <div className="relative inline-block w-16 shrink-0 self-stretch">
                        1 Y
                      </div>
                      <div className="relative inline-block w-16 shrink-0 self-stretch">
                        10%
                      </div>
                      <div className="flex w-16 flex-col items-start justify-start gap-2 self-stretch text-seagreen">
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-auto p-[2px]">
                            <FaIndianRupeeSign />
                          </div>
                          20 Cr
                        </div>
                      </div>
                      <div className="flex w-16 flex-col items-start justify-start gap-2 self-stretch text-indianred">
                        <div className="flex flex-row items-start justify-start self-stretch">
                          <div className="h-auto p-[2px]">
                            <FaIndianRupeeSign />
                          </div>
                          2 Cr
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      }
    >
      <div
        className="container flex flex-col"
      >
        <div className="flex flex-row">
          {closePrice &&
            price !== null &&
            (closePrice <= price ? upArrow() : downArrow())}
          {price !== null && units !== null && (
            <div className="h-auto p-[2px] font-thin text-dimgray">
              <FaIndianRupeeSign />
            </div>
          )}
          {price !== null ? currencyFormatter(price) : ''}
        </div>
      </div>
    </Tooltip>
  ) : (
    ''
  );
}
