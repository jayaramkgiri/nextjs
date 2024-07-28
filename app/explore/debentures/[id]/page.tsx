import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  Image,
} from '@nextui-org/react';
import { David_Libre } from 'next/font/google';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FileIcon, defaultStyles } from 'react-file-icon';

export default async function Page() {
  return (
    <div className="h-[85%]w-[95%] grid grid-flow-col grid-rows-3 gap-4 overflow-auto">
      <Card className="col-span-2 row-span-1 rounded-lg bg-gray-200 shadow-lg">
        <CardHeader className="m-0 flex flex-col gap-0 p-0">
          <h3 className="m-0 flex self-stretch px-2 py-2 text-inherit font-semibold text-neutral-600">
            ISSUE DETAILS
          </h3>
        </CardHeader>
        <CardBody className="flex flex-row divide-x divide-solid divide-gray-200 p-0">
          <div className="m-0 flex w-full flex-col justify-between bg-white pb-2 pl-5">
            <p className="font-semibold text-darkgray">Face Value</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              10,000,00
            </div>
          </div>
          <div className="m-0 flex w-full flex-col justify-between  bg-white pb-2 pl-5">
            <p className="font-semibold text-darkgray">Allotment Date</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              27 May, 2023
            </div>
          </div>
          <div className="m-0 flex w-full flex-col justify-between  bg-white pb-2 pl-5">
            <p className="font-semibold text-darkgray">Issue Size</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              200 Cr
            </div>
          </div>
          <div className="m-0 flex w-full flex-col justify-between bg-white pb-2 pl-5">
            <p className="font-semibold text-darkgray">Maturity / Redemption</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              27 May, 2030
            </div>
          </div>
          <div className="m-0 flex w-full flex-col justify-between bg-white pb-2 pl-5">
            <p className="font-semibold text-darkgray">Coupon</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              12.5%
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-1 col-start-3 row-span-2 h-[360px]  overflow-auto rounded-lg bg-gray-200 shadow-lg">
        <CardHeader className="m-0 flex flex-col gap-0  p-0">
          <h3 className="m-0 flex self-stretch px-2 py-2 text-inherit font-semibold text-neutral-600">
            CASHFLOWS
          </h3>
        </CardHeader>
        <CardBody className="flex h-72 flex-col bg-white p-0">
          <div className="m-2 flex h-6 w-full flex-row items-start justify-between text-darkgray">
            <div className="w-1/4 shrink-0 text-xs font-semibold">Date</div>
            <div className="w-1/4 shrink-0 text-xs font-semibold">
              Principal
            </div>
            <div className="w-1/4 shrink-0 text-xs font-semibold">Interest</div>
            <div className="w-1/4 shrink-0 text-xs font-semibold">Sum</div>
          </div>
          {new Array(16).fill('').map((_) => {
            return (
              <div className="m-2 flex h-auto w-full flex-row items-start justify-between self-stretch pr-2">
                <div className="relative inline-block w-1/4  shrink-0 self-stretch text-xs">
                  24 May 2024
                </div>
                <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch text-xs">
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-auto p-[2px]">
                      <FaIndianRupeeSign />
                    </div>
                    10,00,000
                  </div>
                </div>
                <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch text-xs ">
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-auto p-[2px]">
                      <FaIndianRupeeSign />
                    </div>
                    1,43,551
                  </div>
                </div>
                <div className="flex w-1/4 flex-col items-start justify-start  gap-2 self-stretch text-xs">
                  <div className="flex flex-row items-start justify-start self-stretch">
                    <div className="h-auto p-[2px]">
                      <FaIndianRupeeSign />
                    </div>
                    11,43,551
                  </div>
                </div>
              </div>
            );
          })}
        </CardBody>
      </Card>
      <Card className="col-span-2 col-start-1 row-span-2 row-start-2 rounded-lg bg-gray-200 shadow-lg">
        <CardHeader className="m-0 flex flex-col gap-0 p-0">
          <h3 className="m-0 flex self-stretch px-2 py-2 text-inherit font-semibold text-neutral-600">
            MARKET DEPTH
          </h3>
          <div className="m-0 flex w-full flex-row justify-between p-0 text-xs">
            <div className="m-0 w-full bg-green-500">
              <p className="text-secondary m-0 px-2 py-1">Buy</p>
            </div>
            <div className="w-full bg-red-500">
              <p className="text-secondary m-0 px-2 py-1">Sell</p>
            </div>
          </div>
        </CardHeader>
        <CardBody className=" flex h-72 w-full flex-col bg-white p-0 text-xs">
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
              {new Array(10).fill('').map((_) => {
                return (
                  <div className="mx-2 flex h-6 flex-1 flex-row items-start justify-between self-stretch">
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
              <div className="text-sm m-2 flex h-12 w-full flex-row items-start justify-between self-stretch text-darkgray">
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
              {new Array(5).fill('').map((_) => {
                return (
                  <div className="mx-2 flex h-12 flex-1 flex-row items-start justify-between self-stretch">
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
        </CardBody>
      </Card>
      <Card className="col-span-1 row-span-1 rounded-lg bg-gray-200 shadow-lg">
        <CardHeader className="m-0 flex flex-col gap-0 p-0">
          <h3 className="m-0 flex self-stretch px-2 py-2 text-inherit font-semibold text-neutral-600">
            DOWNLOADS
          </h3>
        </CardHeader>
        <CardBody className="flex flex-row divide-x divide-solid divide-gray-200 p-0">
          <div className="m-0 flex w-full flex-col justify-between bg-white pb-2 pl-5">
            <p className="font-semibold text-darkgray">
              Information Memorandum
            </p>
            <div className="flex h-10 w-10">
              <FileIcon extension="IM.pdf" {...defaultStyles['pdf']} />
            </div>
          </div>
          <div className="m-0 flex w-full flex-col justify-between  bg-white pb-2 pl-5">
            <p className="font-semibold text-darkgray">Rating Rationale</p>
            <div className="flex h-10 w-10">
              <FileIcon extension="RR.pdf" {...defaultStyles['pdf']} />
            </div>
          </div>
          <div className="m-0 flex w-full flex-col justify-between  bg-white pb-2 pl-5">
            <p className="font-semibold text-darkgray">Trust Deed</p>
            <div className="flex h-10 w-10">NA</div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
