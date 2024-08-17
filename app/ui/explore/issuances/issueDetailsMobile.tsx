import { FaIndianRupeeSign } from 'react-icons/fa6';
import { Card, CardHeader, CardBody } from '@nextui-org/react';

export default function IssueDetailsMobile() {
  return (
    <Card className="mx-5 rounded-lg bg-gray-200 shadow-md">
      <CardHeader className="m-0 flex flex-col gap-0 p-0">
        <h3 className="text-sm m-0 flex self-stretch px-2 py-2 font-semibold text-neutral-600">
          ISSUE DETAILS
        </h3>
      </CardHeader>
      <CardBody className="flex w-full flex-row overflow-hidden bg-white">
        <div className="flex w-full flex-col gap-0">
          <div className="m-0 flex h-auto w-full flex-col justify-between pb-2 pl-2">
            <p className="font-semibold text-darkgray">Face Value</p>
            <div className="flex flex-row items-start justify-start">
              <div className="font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              10,000,00
            </div>
          </div>
          <div className="m-0 flex h-auto w-full flex-col justify-between gap-0  pb-2 pl-2">
            <p className="font-semibold text-darkgray">Allotment Date</p>
            <div className="flex flex-row items-start justify-start">
              27 May, 2023
            </div>
          </div>
          <div className="m-0 flex h-auto w-full flex-col justify-between gap-0  pb-2 pl-2">
            <p className="font-semibold text-darkgray">Maturity / Redemption</p>
            <div className="flex flex-row items-start justify-start">
              27 May, 2030
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-0">
          <div className="m-0 flex h-auto w-full flex-col justify-between pb-2 pl-2">
            <p className="font-semibold text-darkgray">Issue Size</p>
            <div className="flex flex-row items-start justify-start">
              <div className="font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              200 Cr
            </div>
          </div>
          <div className="m-0 flex h-auto w-full flex-col justify-between pb-2 pl-2">
            <p className="font-semibold text-darkgray">Coupon</p>
            <div className="flex flex-row items-start justify-start">12.5%</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
