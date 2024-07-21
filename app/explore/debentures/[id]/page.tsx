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

export default async function Page() {
  return (
    <div className="grid w-[90%] grid-cols-3 gap-4">
      <Card className="col-span-2 rounded-lg  bg-gray-200 shadow-lg">
        <CardHeader className="flex gap-3">
          <h3 className="py-auto m-0 flex flex-1 items-center  self-stretch px-3 text-inherit font-semibold">
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
      <Card className=" rounded-lg  bg-gray-200 shadow-lg">
        <CardHeader className="flex gap-3">
          <h3 className="py-auto m-0 flex flex-1 items-center  self-stretch px-3 text-inherit font-semibold">
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
        </CardBody>
      </Card>
      <Card className="col-span-2 rounded-lg  bg-gray-200 shadow-lg">
        <CardHeader className="m-0 flex flex-col gap-0 p-0">
          <h3 className="text-md m-0 flex self-stretch px-2 py-2 font-semibold text-neutral-600">
            MARKET DEPTH
          </h3>
          <div className="m-0 flex w-full flex-row justify-between p-0">
            <div className="m-0 w-full bg-green-500">
              <p className="text-secondary text-sm m-0 px-2 py-1">Buy</p>
            </div>
            <div className="w-full bg-red-500">
              <p className="text-secondary text-sm m-0 px-2 py-1">Sell</p>
            </div>
          </div>
        </CardHeader>
        <CardBody className=" flex w-full flex-col  bg-white p-0">
          <div className="flex w-full flex-row justify-start divide-x divide-solid divide-gray-200">
            <div className="w-1/2">
              <div className="m-2 flex h-12 flex-row items-start justify-between self-stretch text-darkgray">
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
              <div className="mx-2 flex h-12 flex-1 flex-row items-start justify-between self-stretch">
                <div className="relative inline-block w-16 shrink-0 self-stretch">
                  1 Y
                </div>
                <div className="relative inline-block w-16 shrink-0 self-stretch">
                  10%
                </div>
                <div className="flex w-32 flex-col items-start justify-start gap-2 self-stretch text-seagreen">
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-auto p-[2px]">
                      <FaIndianRupeeSign />
                    </div>
                    20 Cr
                  </div>
                  <div className="relative flex h-3 shrink-0 items-center text-xs font-medium text-color-states-common-black opacity-[0.5]">
                    10,000 units
                  </div>
                </div>
                <div className="flex w-32 flex-col items-start justify-start gap-2 self-stretch text-indianred">
                  <div className="flex flex-row items-start justify-start self-stretch">
                    <div className="h-auto p-[2px]">
                      <FaIndianRupeeSign />
                    </div>
                    2 Cr
                  </div>
                  <div className="relative flex h-3 shrink-0 items-center self-stretch text-xs font-medium text-color-states-common-black opacity-[0.5]">
                    5,000 units
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="m-2 flex h-12 w-full flex-row items-start justify-between self-stretch text-darkgray">
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
              <div className="mx-2 flex h-12 flex-1 flex-row items-start justify-between self-stretch">
                <div className="relative inline-block w-16 shrink-0 self-stretch">
                  1 Y
                </div>
                <div className="relative inline-block w-16 shrink-0 self-stretch">
                  10%
                </div>
                <div className="flex w-32 flex-col items-start justify-start gap-2 self-stretch text-seagreen">
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-auto p-[2px]">
                      <FaIndianRupeeSign />
                    </div>
                    20 Cr
                  </div>
                  <div className="relative flex h-3 shrink-0 items-center text-xs font-medium text-color-states-common-black opacity-[0.5]">
                    10,000 units
                  </div>
                </div>
                <div className="flex w-32 flex-col items-start justify-start gap-2 self-stretch text-indianred">
                  <div className="flex flex-row items-start justify-start self-stretch">
                    <div className="h-auto p-[2px]">
                      <FaIndianRupeeSign />
                    </div>
                    2 Cr
                  </div>
                  <div className="relative flex h-3 shrink-0 items-center self-stretch text-xs font-medium text-color-states-common-black opacity-[0.5]">
                    5,000 units
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
