import { ClassNames } from '@emotion/react';
import { FaIndianRupeeSign } from 'react-icons/fa6';
// import { useState, useEffect } from 'react';

export default function Cards({
  cardType,
  marketSummary,
}: {
  cardType: string;
  marketSummary: {
    totalBuyQty: number;
    totalSellQty: number;
    totalBuyVolume: number;
    totalSellVolume: number;
  };
}) {
  // const [units, setUnits] = useState<number>();
  // const [value, setValue] = useState<string>();

  // useEffect(() => {
  //   setUnits(Math.floor(Math.random() * 10000 + 170000));
  //   setValue((Math.random() + 41).toFixed(2));

  //   const interval = setInterval(() => {
  //     setUnits(Math.floor(Math.random() * 10000 + 170000));
  //     setValue((Math.random() + 41).toFixed(2));
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div
      key={cardType}
      className="m-0 flex h-auto w-full flex-row items-start gap-3 self-stretch rounded-lg px-2 py-0 shadow-md md:h-1/5  md:w-auto md:px-4 "
    >
      <div className="text-primary md:text-sm mt-0 overflow-hidden text-xs font-medium md:mt-1 ">
        <p>{cardType === 'bid' ? 'Buy Orders' : 'Sell Orders'}</p>
      </div>
      <div className="md:text-sm my-2 flex flex-col items-start justify-start self-stretch overflow-hidden text-2xs font-medium ">
        <div
          className={`md:text-sm flex  flex-row justify-start ${
            cardType === 'bid' ? 'text-seagreen' : 'text-indianred'
          }`}
        >
          <div className="md:text-sm h-auto p-[1px] text-2xs md:p-[2px]">
            <FaIndianRupeeSign />
          </div>
          <p className="m-0 text-[12px]">
            {cardType === 'bid'
              ? (marketSummary.totalBuyVolume / 10000000).toFixed(2)
              : (marketSummary.totalSellVolume / 10000000).toFixed(2)}{' '}
            Cr
          </p>
        </div>
        <div className="ml-1 text-xxs text-dimgray md:text-2xs ">
          {cardType === 'bid'
            ? marketSummary.totalBuyQty.toLocaleString('en-IN')
            : marketSummary.totalSellQty.toLocaleString('en-IN')}{' '}
          units
        </div>
      </div>
    </div>
  );
}
