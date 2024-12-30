'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/react';

export default async function YieldCard({ rating, yields }: {rating: string, yields: Array<any>}) {
  const uptoThree = yields.find((y) => y.tenor_bucket === '0-3')[`${rating.toLowerCase()}_yield`]
  const threeToFive = yields.find((y) => y.tenor_bucket === '3-5')[`${rating.toLowerCase()}_yield`]
  const fiveToTen = yields.find((y) => y.tenor_bucket === '5-10')[`${rating.toLowerCase()}_yield`]
  const tenPlus = yields.find((y) => y.tenor_bucket === '10+')[`${rating.toLowerCase()}_yield`]
  return (
    <Card className="w-full rounded-lg bg-white p-2 shadow-md">
      <CardHeader className="m-0 flex flex-col gap-0 p-0">
        <h3 className="m-0 flex self-stretch px-2 pb-2 pt-0 text-inherit font-semibold text-neutral-600">
          {rating}
        </h3>
      </CardHeader>
      <CardBody className="m-0 p-0">
        <div className="text-small mr-2 flex flex-col items-center text-gray-500 ">
          <div className="flex w-full flex-row text-xs">
            <div className="w-full border-b border-r border-solid border-gray-200 pb-2 pl-1">
              0-3 Y
            </div>
            <div className="w-full border-b border-r border-solid border-gray-200 pb-2 pl-1">
              3-5 Y
            </div>
            <div className="w-full border-b border-r border-solid border-gray-200 pb-2 pl-1">
              5-10 Y
            </div>
            <div className="w-full border-b border-solid border-gray-200 pb-2 pl-1">
              10+ Y
            </div>
          </div>
          <div className="flex w-full flex-row text-xs">
            <div className="w-full border-r border-solid border-gray-200 pl-1 pt-2">
              {uptoThree === 0 ? '-' : `${uptoThree}%`}
            </div>
            <div className="w-full border-r border-solid border-gray-200 pl-1 pt-2">
              {threeToFive === 0 ? '-' : `${threeToFive}%`}
            </div>
            <div className="w-full border-r border-solid border-gray-200 pl-1 pt-2">
              {fiveToTen === 0 ? '-' : `${fiveToTen}%`}
            </div>
            <div className=" w-full pl-1 pt-2">
              {tenPlus === 0 ? '-' : `${tenPlus}%`}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
