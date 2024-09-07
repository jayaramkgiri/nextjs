import { FaIndianRupeeSign } from 'react-icons/fa6';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa6';
import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default async function MarketDepthMobile() {
  const user = await getSession();
  return (
    <Card className="mx-5 rounded-lg text-xs shadow-md">
      <CardHeader className="m-0 flex w-auto flex-col gap-1 bg-gray-200 px-2 py-2 ">
        <h3 className="m-0 flex self-stretch text-inherit font-semibold text-neutral-600">
          MARKET DEPTH
        </h3>
        <div className="m-0 flex w-full gap-2 text-inherit text-xxs font-semibold text-neutral-600">
          <p className="m-0 text-xxs">Interest Accrued: </p>
          <div className="flex flex-row items-start justify-start">
            <div className=" pt-[1px] text-xxs">
              <FaIndianRupeeSign />
            </div>
            567
          </div>
          <BsInfoCircleFill className="pt-[1px]" />
        </div>
      </CardHeader>
      <CardBody className="flex w-full flex-row divide-x divide-solid divide-gray-200  bg-white p-0">
        {!user && (
          <Link href="/api/auth/login">
            <FaLock className="hover:text-primary transtion-all absolute right-1/2 top-1/2 z-10 h-6 w-6 text-gray-500 duration-200 hover:scale-125 hover:cursor-pointer " />
          </Link>
        )}
        <div
          key="1"
          className="flex h-auto w-full flex-col divide-y divide-solid divide-gray-200 "
        >
          <div className="m-0 flex w-full flex-row justify-between divide-x divide-solid divide-gray-200 p-0 text-xxs">
            <div className="m-0 w-full">
              <p className="m-0 px-2 py-1 text-green-500">Buy</p>
            </div>
            <div className="w-full">
              <p className="m-0 px-2 py-1 text-red-500">Sell</p>
            </div>
          </div>
          <div className=" flex h-auto w-full flex-col  p-0 text-xxs">
            <div className="flex w-full flex-row justify-start divide-x divide-solid divide-gray-200">
              <div className="m-0 w-1/2 px-2">
                <div className="mx-0 my-2 flex h-auto flex-row items-start justify-between self-stretch text-darkgray">
                  <div className=" inline-block w-1/4 shrink-0 font-semibold">
                    Tenor
                  </div>
                  <div className=" inline-block w-1/4 shrink-0 font-semibold">
                    Yield
                  </div>
                  <div className=" inline-block w-1/4 shrink-0 font-semibold">
                    Bid
                  </div>
                  <div className=" inline-block w-1/4 shrink-0  font-semibold">
                    Ask
                  </div>
                </div>
                {new Array(10).fill('').map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={`m-0 flex h-auto flex-1 flex-row items-start justify-between self-stretch py-1 ${
                        !user && 'blur-sm'
                      }`}
                    >
                      <div className="relative inline-block w-1/4 shrink-0 self-stretch">
                        1 Y
                      </div>
                      <div className="relative inline-block w-1/4 shrink-0 self-stretch">
                        10%
                      </div>
                      <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch text-seagreen">
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-auto  pt-[1px]">
                            <FaIndianRupeeSign />
                          </div>
                          20 Cr
                        </div>
                      </div>
                      <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch text-indianred">
                        <div className="flex flex-row items-start justify-start self-stretch">
                          <div className="h-auto pt-[1px]">
                            <FaIndianRupeeSign />
                          </div>
                          2 Cr
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="m-0 w-1/2 px-2">
                <div className="mx-0 my-2 flex h-auto flex-row items-start justify-between self-stretch px-2 text-darkgray">
                  <div className=" inline-block w-1/4 shrink-0 font-semibold">
                    Tenor
                  </div>
                  <div className=" inline-block w-1/4 shrink-0 font-semibold">
                    Yield
                  </div>
                  <div className=" inline-block w-1/4 shrink-0 font-semibold">
                    Bid
                  </div>
                  <div className=" inline-block w-1/4 shrink-0  font-semibold">
                    Ask
                  </div>
                </div>
                {new Array(10).fill('').map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={`m-0 flex h-auto flex-1 flex-row items-start justify-between self-stretch px-2 py-1 ${
                        !user && 'blur-sm'
                      }`}
                    >
                      <div className="relative inline-block w-1/4 shrink-0 self-stretch">
                        1 Y
                      </div>
                      <div className="relative inline-block w-1/4 shrink-0 self-stretch">
                        10%
                      </div>
                      <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch text-seagreen">
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-auto  pt-[1px]">
                            <FaIndianRupeeSign />
                          </div>
                          20 Cr
                        </div>
                      </div>
                      <div className="flex w-1/4 flex-col items-start justify-start gap-2 self-stretch text-indianred">
                        <div className="flex flex-row items-start justify-start self-stretch">
                          <div className="h-auto  pt-[1px]">
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
      </CardBody>
    </Card>
  );
}
