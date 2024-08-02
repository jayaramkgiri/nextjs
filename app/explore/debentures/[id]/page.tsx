import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FileIcon, defaultStyles } from 'react-file-icon';
import Cashflows from '@/app/ui/explore/issuances/cashflows';
import MarketDepth from '@/app/ui/explore/issuances/marketDepth';

export default async function Page() {
  return (
    <div className="m-0 flex h-[88%] w-[95%] flex-col gap-x-3 gap-y-3 overflow-auto px-2 pb-2">
      <div className="mt-3 w-full">
        <div className="m-0 mb-3 flex w-full">
          <div className="m-0 flex w-1/4 self-stretch px-0 py-2">
            <h1 className="m-0 text-xl font-semibold text-neutral-600">
              INE196P07047
            </h1>
          </div>
          <div className="m-0 flex w-1/2 self-stretch px-0 py-2">
            <p className="text-md m-0 font-semibold text-blue-600">
              PIRAMAL CAPITAL & HOUSING FINANCE LIMITED
            </p>
          </div>
        </div>
        <div className="m-0 flex w-full">
          <div className="flex w-1/4 flex-col">
            <p className="m-0 py-1 text-xs font-normal text-neutral-500">
              BSE Scrip: 938742
            </p>
            <p className="m-0 text-xs font-normal text-neutral-500">
              NSE Scrip: 871REC28-N9
            </p>
          </div>
          <div className="m-0 flex w-1/4 self-stretch px-0">
            <p className="text-md font-semibold text-neutral-600">CRISIL AAA</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row gap-6">
        <Card className="col-span-2 row-span-1 w-2/3 rounded-lg bg-gray-200 shadow-lg">
          <CardHeader className="m-0 flex flex-col gap-0 p-0">
            <h3 className="m-0 flex self-stretch px-2 py-2 text-inherit font-semibold text-neutral-600">
              ISSUE DETAILS
            </h3>
          </CardHeader>
          <CardBody className="flex h-full flex-row divide-x divide-solid divide-gray-200 p-0">
            <div className="m-0 flex h-auto w-full flex-col justify-between bg-white pb-5 pl-5">
              <p className="font-semibold text-darkgray">Face Value</p>
              <div className="flex flex-row items-start justify-start">
                <div className="p-[2px] font-light text-dimgray">
                  <FaIndianRupeeSign />
                </div>
                10,000,00
              </div>
            </div>
            <div className="m-0 flex h-auto w-full flex-col justify-between  bg-white pb-5 pl-5">
              <p className="font-semibold text-darkgray">Allotment Date</p>
              <div className="flex flex-row items-start justify-start">
                <div className=" p-[2px] font-light text-dimgray">
                  <FaIndianRupeeSign />
                </div>
                27 May, 2023
              </div>
            </div>
            <div className="m-0 flex h-auto w-full flex-col justify-between bg-white pb-5 pl-5">
              <p className="font-semibold text-darkgray">Issue Size</p>
              <div className="flex flex-row items-start justify-start">
                <div className="p-[2px] font-light text-dimgray">
                  <FaIndianRupeeSign />
                </div>
                200 Cr
              </div>
            </div>
            <div className="m-0 flex h-auto w-full flex-col justify-between bg-white px-2 pb-5">
              <p className="font-semibold text-darkgray">
                Maturity / Redemption
              </p>
              <div className="flex flex-row items-start justify-start">
                <div className=" p-[2px] font-light text-dimgray">
                  <FaIndianRupeeSign />
                </div>
                27 May, 2030
              </div>
            </div>
            <div className="m-0 flex h-auto w-full flex-col justify-between bg-white pb-5 pl-5">
              <p className="font-semibold text-darkgray">Coupon</p>
              <div className="flex flex-row items-start justify-start">
                <div className="p-[2px] font-light text-dimgray">
                  <FaIndianRupeeSign />
                </div>
                12.5%
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="col-span-1 row-span-1 w-1/3 rounded-lg bg-gray-200 shadow-lg">
          <CardHeader className="m-0 flex flex-col gap-0 p-0">
            <h3 className="m-0 flex self-stretch px-2 py-2 text-inherit font-semibold text-neutral-600">
              DOWNLOADS
            </h3>
          </CardHeader>
          <CardBody className="flex flex-row divide-x divide-solid divide-gray-200 p-0">
            <div className="m-0 flex w-full flex-col justify-between bg-white px-3 pb-2">
              <p className="font-semibold text-darkgray">
                Information Memorandum
              </p>
              <div className="flex w-10">
                <FileIcon extension="IM.pdf" {...defaultStyles['pdf']} />
              </div>
            </div>
            <div className="m-0 flex w-full flex-col justify-between  bg-white px-3 pb-2">
              <p className="font-semibold text-darkgray">Rating Rationale</p>
              <div className="flex  w-10">
                <FileIcon extension="RR.pdf" {...defaultStyles['pdf']} />
              </div>
            </div>
            <div className="m-0 flex w-full flex-col justify-between  bg-white px-3 pb-2">
              <p className="font-semibold text-darkgray">Trust Deed</p>
              <div className="flex w-10">-</div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-2/5">
          <Cashflows />
        </div>
        <div className="w-3/5">
          <MarketDepth />
        </div>
      </div>
    </div>
  );
}
