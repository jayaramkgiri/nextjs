import { FaIndianRupeeSign } from 'react-icons/fa6';
import { Card, CardHeader, CardBody } from '@nextui-org/react';

export default function IssueDetails({issuance}: {issuance: any}) {
  return (
    <Card className="col-span-2 row-span-1 w-2/3 rounded-lg bg-gray-200 shadow-md">
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
            {issuance.face_value}
          </div>
        </div>
        <div className="m-0 flex h-auto w-full flex-col justify-between  bg-white pb-5 pl-5">
          <p className="font-semibold text-darkgray">Allotment Date</p>
          <div className="flex flex-row items-start justify-start pb-[5px]">
          {issuance.allotment_date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
          </div>
        </div>
        <div className="m-0 flex h-auto w-full flex-col justify-between bg-white pb-5 pl-5">
          <p className="font-semibold text-darkgray">Issue Size</p>
          {issuance.issue_size && (
            <div className="flex flex-row items-start justify-start">
              <div className="p-[2px] font-light text-dimgray">
                <FaIndianRupeeSign />
              </div>
              {issuance.issue_size}
            </div>)
          }
        </div>
        <div className="m-0 flex h-auto w-full flex-col justify-between bg-white px-2 pb-5">
          <p className="font-semibold text-darkgray">Maturity / Redemption</p>
          <div className="flex flex-row items-start justify-start pb-[5px]">
            {issuance.redemption_date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
          </div>
        </div>
        <div className="m-0 flex h-auto w-full flex-col justify-between bg-white pb-5 pl-5">
          <p className="font-semibold text-darkgray">Coupon</p>
          {issuance.coupon && (
            <div className="flex flex-row items-start justify-start pb-[5px]">
              {issuance.coupon}%
            </div>)
          }
        </div>
      </CardBody>
    </Card>
  );
}
