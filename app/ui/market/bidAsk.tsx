'use client';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { currencyFormatter } from '@/app/lib/utils';
import { Card, CardBody, CardHeader, Tooltip } from '@nextui-org/react';
import MarketDepth from '@/app/ui/explore/issuances/marketDepth';

function upArrow() {
  return (
    <div className="h-auto p-[2px] text-seagreen">
      <FaArrowUp />
    </div>
  );
}

function downArrow() {
  return (
    <div className="h-auto p-[2px] text-indianred">
      <FaArrowDown />
    </div>
  );
}

export function BidAskCell({
  units,
  price,
  closePrice,
}: {
  units: number | null;
  price: number | null;
  closePrice: number | null;
}) {
  return units && units !== 0 ? (
    <div className="container flex flex-col">
      <div className="flex flex-row">
        <Tooltip
          delay={500}
          closeDelay={500}
          content={
            <Card className="rounded-lg border border-solid border-gray-200 bg-white p-2">
              <CardBody className="text-xxs flex flex-col gap-1 font-semibold text-gray-500">
                <p className="text-2xs m-0 p-0">
                  Open&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;:{' '}
                  <FaIndianRupeeSign className="mt-1 h-[8px] p-0" />
                  998
                </p>
                <p className="text-2xs m-0 p-0">
                  Prev Close&ensp;:{' '}
                  <FaIndianRupeeSign className="mt-1 h-[8px] p-0" />
                  998
                </p>
              </CardBody>
            </Card>
          }
        >
          {closePrice &&
            price !== null &&
            (closePrice <= price ? upArrow() : downArrow())}
        </Tooltip>
        {price !== null && units !== null && (
          <div className="h-auto p-[2px] font-thin text-dimgray">
            <FaIndianRupeeSign />
          </div>
        )}
        <Tooltip
          delay={500}
          closeDelay={500}
          content={
            <Card className="rounded-lg border border-solid border-gray-200 bg-white p-2">
              <CardHeader className="border-b border-solid border-gray-300 pb-1">
                <p className="text-2xs  m-0 p-0 font-bold text-green-500">
                  Buy
                </p>
              </CardHeader>
              <CardBody className="text-xxs flex flex-col gap-1 pt-1 font-semibold text-gray-500">
                <p className="text-2xs m-0 p-0">Orders&ensp;: 2345</p>
                <p className="text-2xs m-0 p-0">
                  Yield&ensp;&ensp;&ensp;: 8.16%
                </p>
                <p className="text-2xs m-0 p-0">Volume&nbsp;: 456 Cr</p>
              </CardBody>
            </Card>
          }
        >
          <p className="m-0">
            {price !== null ? currencyFormatter(price) : ''}
          </p>
        </Tooltip>
      </div>
    </div>
  ) : (
    ''
  );
}
