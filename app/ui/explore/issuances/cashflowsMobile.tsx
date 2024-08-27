import { FaIndianRupeeSign } from 'react-icons/fa6';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { BsInfoCircleFill } from 'react-icons/bs';

export default function CashflowsMobile() {
  return (
    <Card className="mx-5 mb-2 rounded-lg text-xs shadow-md">
      <CardHeader className="m-0 flex w-auto flex-col gap-1 bg-gray-200 px-2 py-2 ">
        <h3 className="m-0 flex self-stretch p-0 text-inherit font-semibold text-neutral-600">
          Cashflows
        </h3>
        <div className="m-0 flex w-full gap-2 text-inherit text-xxs font-semibold text-neutral-600">
          <p className="m-0 text-xxs"> Next Payment Cutoff:</p>
          <p className="m-0 text-xxs"> 24th June</p>
          <BsInfoCircleFill className="pt-[1px]" />
        </div>
      </CardHeader>
      <CardBody className="flex w-full flex-row divide-x divide-solid divide-gray-200 bg-white p-0">
        <div
          key="1"
          className="flex h-auto w-full flex-col divide-y divide-solid divide-gray-200 "
        >
          <div className=" flex h-auto flex-col  px-2 text-xxs">
            <div className="mx-0 my-2 flex h-auto flex-row items-start justify-between self-stretch text-darkgray">
              <div className=" inline-block w-1/4 shrink-0 font-semibold">
                Date
              </div>
              <div className=" inline-block w-1/4 shrink-0 font-semibold">
                Principal
              </div>
              <div className=" inline-block w-1/4 shrink-0 font-semibold">
                Interest
              </div>
              <div className=" inline-block w-1/4 shrink-0  font-semibold">
                Sum
              </div>
            </div>
            {new Array(16).fill('').map((_, index) => {
              return (
                <div
                  key={index}
                  className="m-0 flex h-auto flex-1 flex-row items-start justify-between self-stretch py-1"
                >
                  <div className="relative inline-block w-1/4 shrink-0 self-stretch">
                    24 May 2024
                  </div>
                  <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch">
                    <div className="flex flex-row items-start justify-start self-stretch">
                      <div className="h-auto pt-[1px]">
                        <FaIndianRupeeSign />
                      </div>
                      10,00,000
                    </div>
                  </div>
                  <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch">
                    <div className="flex flex-row items-start justify-start self-stretch">
                      <div className="h-auto pt-[1px]">
                        <FaIndianRupeeSign />
                      </div>
                      1,43,551
                    </div>
                  </div>
                  <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch">
                    <div className="flex flex-row items-start justify-start self-stretch">
                      <div className="h-auto pt-[1px]">
                        <FaIndianRupeeSign />
                      </div>
                      1,43,551
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
