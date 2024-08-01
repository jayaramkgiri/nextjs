'use client'
import {
  Card,
  CardHeader,
  CardBody,
} from '@nextui-org/react';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FileIcon, defaultStyles } from 'react-file-icon';
import Cashflows from '@/app/ui/explore/issuances/cashflows';
import MarketDepth from '@/app/ui/explore/issuances/marketDepth';

export default async function Page() {
  return (
    <div className="h-[85%] w-[95%] flex flex-col gap-x-6 gap-y-16">
      <div className='flex flex-row gap-6 w-full'>
        <Card className="col-span-2 row-span-1 rounded-lg bg-gray-200 shadow-lg w-2/3">
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
            <div className="m-0 flex w-full flex-col justify-between bg-white pb-2 px-2">
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
        <Card className="col-span-1 row-span-1 rounded-lg bg-gray-200 shadow-lg w-1/3">
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
              <div className="flex h-10 w-10">-</div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className='flex flex-row gap-6'>
        <div className='w-2/5'>
          <Cashflows />
        </div>
        <div className='w-1/2'><MarketDepth /></div>
      </div>
    </div >
  );
}
