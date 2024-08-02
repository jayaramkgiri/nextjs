'use client';

import { FaIndianRupeeSign } from 'react-icons/fa6';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default async function MarketDepth() {
  return (
    <div className="w-full">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="cashflows"
          id="cashflows"
          className="shadow-t-lg m-0 rounded-t-lg bg-gray-200 text-inherit font-semibold text-neutral-600"
        >
          <div className="flex flex-col">
            <p className="text-md m-0 p-0 text-inherit font-semibold text-neutral-600">
              MARKET DEPTH
            </p>
            <div className="m-0 flex px-0 pb-0 pt-2 text-inherit text-xs font-semibold text-neutral-600">
              <p className="m-0">Interest Accrued: </p>
              <div className="flex flex-row items-start justify-start pl-3">
                <div className="pr-[2px] pt-[2px] text-[10px]">
                  <FaIndianRupeeSign />
                </div>
                567
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="mt-0 rounded-lg pt-0 shadow-lg">
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
