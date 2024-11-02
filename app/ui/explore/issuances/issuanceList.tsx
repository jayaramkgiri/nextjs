'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { BidAskCell } from '../../market/bidAsk';
import { useRouter } from 'next/navigation';

export default function IssuanceList({
  issuance,
  market,
}: {
  issuance: any;
  market: boolean;
}) {
  const router = useRouter();
  const faceValue = 1000000;
  return (
    <div onClick={() => router.push('/explore/debentures/1')}>
      <Card className="w-full rounded-lg p-2 text-xs shadow-md">
        <CardHeader className="mb-2 flex flex-row gap-2">
          <div className="w-1/2 font-semibold">{issuance.isin}</div>
          <div className="flex w-1/2 flex-col">
            <p className="m-0 py-1 text-xxs font-normal text-neutral-500">
              BSE Scrip: 938742
            </p>
            <p className="m-0 text-xxs font-normal text-neutral-500">
              NSE Scrip: 871REC28-N9
            </p>
          </div>
        </CardHeader>
        <CardBody className="flex w-full flex-col gap-2">
          <div className="text-xxs font-normal text-blue-600">
            {issuance.company_name}
          </div>
          {market && (
            <div
              className={`flex w-full ${faceValue > 10000 && 'flex-col'} gap-2`}
            >
              <div className="flex w-full justify-start gap-2">
                <div className="w-2/5  text-xs text-gray-500">Buy Price</div>
                <BidAskCell
                  classNames="w-3/5"
                  units={1007686}
                  price={10999999.12}
                  closePrice={10999999}
                  showRupee={false}
                />
              </div>
              <div className="flex w-full justify-start gap-2">
                <div className="w-2/5 text-xs text-gray-500">Sell Price</div>
                <BidAskCell
                  classNames="w-3/5"
                  units={1007686}
                  price={10999999.12}
                  closePrice={10999999}
                  showRupee={false}
                />
              </div>
            </div>
          )}
          <div className="flex w-full gap-2">
            <div className="flex w-full gap-0">
              <div className="w-full text-xs text-gray-500">Face Value</div>
              <div className="w-full text-xs text-primary">1,000</div>
            </div>
            <div className="flex w-full gap-0">
              <div className="w-full text-xs text-gray-500">Coupon</div>
              <div className="w-full text-xs text-primary">Fixed 11.2%</div>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="flex w-full gap-0">
              <div className="w-full text-xs text-gray-500">Allotment</div>
              <div className="w-full text-xs text-primary">29 Jun 2019</div>
            </div>
            <div className="flex w-full gap-0">
              <div className="w-full text-xs text-gray-500">Maturity</div>
              <div className="w-full text-xs text-primary">31 Jul 2032</div>
            </div>
          </div>
          <div className="flex w-1/2 gap-2">
            <div className="flex w-full gap-0">
              <div className="w-full text-xs text-gray-500">Rating</div>
              <div className="w-full text-xs text-primary">Crisil AA</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
