import { Card, CardHeader, CardBody, Divider, Link, Image } from "@nextui-org/react";
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

    </div>
  );
}
