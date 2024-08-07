'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { Divider } from '@nextui-org/react';

export default function YieldCard({ rating }: { rating: string }) {
  return (
    <Card className="w-full rounded-lg bg-white p-2 shadow-md">
      <CardHeader className="m-0 flex flex-col gap-0 p-0">
        <h3 className="m-0 flex self-stretch px-2 py-2 text-inherit font-semibold text-neutral-600">
          {rating}
        </h3>
      </CardHeader>
      <CardBody className="m-0 p-0">
        <div className="text-small mr-6 flex flex-col items-center text-gray-500 ">
          <div className="flex w-full flex-row text-xs">
            <div className="w-full border-b border-r border-solid border-gray-200 pb-2 pl-2">
              0-3 Y
            </div>
            <div className="w-full border-b border-r border-solid border-gray-200 pb-2 pl-2">
              3-5 Y
            </div>
            <div className="w-full border-b border-r border-solid border-gray-200 pb-2 pl-2">
              5-10 Y
            </div>
            <div className="w-full border-b border-solid border-gray-200 pb-2 pl-2">
              10+ Y
            </div>
          </div>
          <div className="flex w-full flex-row text-xs">
            <div className="w-full border-r border-solid border-gray-200 pl-2 pt-2">
              7.81%
            </div>
            <div className="w-full border-r border-solid border-gray-200 pl-2 pt-2">
              8.81%
            </div>
            <div className="w-full border-r border-solid border-gray-200 pl-2 pt-2">
              9.81%
            </div>
            <div className=" w-full pl-2 pt-2">10.81%</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
