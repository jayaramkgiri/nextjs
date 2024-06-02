'use client';

import { FaIndianRupeeSign } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

export default function Cards({ cardType }: { cardType: string }) {
  const [units, setUnits] = useState<number>();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setUnits(Math.floor(Math.random() * 10000 + 170000));
    setValue((Math.random() + 41).toFixed(2));

    const interval = setInterval(() => {
      setUnits(Math.floor(Math.random() * 10000 + 170000));
      setValue((Math.random() + 41).toFixed(2));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      key={cardType}
      className="my-2 flex h-auto w-auto flex-row items-start gap-3 self-stretch rounded-3xl px-4 py-2 shadow-md md:h-1/5"
    >
      <div className="text-primary text-sm overflow-hidden font-medium">
        <p>{cardType === 'bid' ? 'Total Bids' : 'Total Asks'}</p>
      </div>
      <div className="text-sm my-4 flex flex-col items-start justify-start self-stretch overflow-hidden font-medium ">
        <div
          className={`flex flex-row  justify-start ${
            cardType === 'bid' ? 'text-seagreen' : 'text-indianred'
          }`}
        >
          <div className="h-auto p-[2px]">
            <FaIndianRupeeSign />
          </div>
          {value} Cr
        </div>
        <div className="text-xs text-dimgray">{units} units</div>
      </div>
    </div>
  );
}
