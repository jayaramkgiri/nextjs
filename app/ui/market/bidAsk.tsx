'use client';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { currencyFormatter } from '@/app/lib/utils';

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
  const clickHandler = (_e: any) => {
    console.log('jhsgdh');
  };

  return units && units !== 0 ? (
    <div
      className="container flex flex-col"
      onMouseEnter={clickHandler}
      onMouseLeave={clickHandler}
    >
      <div className="flex flex-row">
        {closePrice &&
          price !== null &&
          (closePrice <= price ? upArrow() : downArrow())}
        {price !== null && units !== null && (
          <div className="h-auto p-[2px] font-thin text-dimgray">
            <FaIndianRupeeSign />
          </div>
        )}
        {price !== null ? currencyFormatter(price) : ''}
      </div>
    </div>
  ) : (
    ''
  );
}
