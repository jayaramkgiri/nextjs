import { Card, CardHeader, CardBody, Divider, Link, Image } from "@nextui-org/react";
import { David_Libre } from "next/font/google";
import { FaIndianRupeeSign } from 'react-icons/fa6';

export default async function Page() {
  return (
    <div className="grid grid-cols-3 gap-4 w-[90%]">
      <Card className="col-span-2 shadow-lg  bg-gray-200 rounded-lg">
        <CardHeader className="flex gap-3">
          <h3 className="m-0 px-3 py-auto flex flex-1  items-center self-stretch text-inherit font-semibold">
            ISSUE DETAILS
          </h3>
        </CardHeader>
        <CardBody className="flex flex-row divide-x divide-gray-200 p-0 divide-solid">
          <div className="m-0 w-full flex flex-col pl-5 pb-2 justify-between bg-white">
            <p className="text-darkgray font-semibold">Face Value</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              10,000,00
            </div>
          </div>
          <div className="m-0 w-full flex flex-col justify-between  pl-5 pb-2 bg-white">
            <p className="text-darkgray font-semibold">Allotment Date</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              27 May, 2023
            </div>
          </div>
          <div className="m-0 w-full flex flex-col justify-between  pl-5 pb-2 bg-white">
            <p className="text-darkgray font-semibold">Issue Size</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              200 Cr
            </div>
          </div>
          <div className="m-0 w-full flex flex-col justify-between pl-5 pb-2 bg-white">
            <p className="text-darkgray font-semibold">Maturity / Redemption</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              27 May, 2030
            </div>
          </div>
          <div className="m-0 w-full flex flex-col justify-between pl-5 pb-2 bg-white">
            <p className="text-darkgray font-semibold">Coupon</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              12.5%
            </div>
          </div>
        </CardBody>
      </Card >
      <Card className=" shadow-lg  bg-gray-200 rounded-lg">
        <CardHeader className="flex gap-3">
          <h3 className="m-0 px-3 py-auto flex flex-1  items-center self-stretch text-inherit font-semibold">
            ISSUE DETAILS
          </h3>
        </CardHeader>
        <CardBody className="flex flex-row divide-x divide-gray-200 p-0 divide-solid">
          <div className="m-0 w-full flex flex-col pl-5 pb-2 justify-between bg-white">
            <p className="text-darkgray font-semibold">Face Value</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              10,000,00
            </div>
          </div>
          <div className="m-0 w-full flex flex-col justify-between  pl-5 pb-2 bg-white">
            <p className="text-darkgray font-semibold">Allotment Date</p>
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              27 May, 2023
            </div>
          </div>
        </CardBody>
      </Card >
      <Card className="col-span-2 shadow-lg  bg-gray-200 rounded-lg">
        <CardHeader className="flex flex-col gap-3">
          <h3 className="m-0 px-3 py-auto flex flex-1  items-center self-stretch text-inherit font-semibold">
            ISSUE DETAILS
          </h3>
          <div className="w-full flex flex-row justify-between">
            <div className="bg-green">
              <p >Buy</p>
            </div>
            <div className="bg-red">
              <p>Sell</p>
            </div>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col divide-x divide-gray-200 p-0 divide-solid bg-white">
          <div className="flex h-12 w-full flex-row items-start justify-between self-stretch text-darkgray">
            <div className="relative inline-block w-16 shrink-0 self-stretch font-semibold">
              Tenor
            </div>
            <div className="relative inline-block w-16 shrink-0 self-stretch font-semibold">
              Yield
            </div>
            <div className="relative inline-block w-32 shrink-0 self-stretch font-semibold">
              Bid
            </div>
            <div className="relative inline-block w-32 shrink-0 self-stretch font-semibold">
              Ask
            </div>
          </div>
          <div
            className="flex h-12 flex-1 flex-row items-start justify-between self-stretch"
          >
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
        </CardBody>
      </Card >

    </div >
  );
}
