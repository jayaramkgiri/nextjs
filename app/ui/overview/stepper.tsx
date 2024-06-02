'use client';

import { useState, useEffect } from 'react';
import { FaIndianRupeeSign } from 'react-icons/fa6';

interface RatingKeys {
  [index: string]: number;
}

interface BidKeys {
  [index: string]: number | string;
}

const ratingUnitkeys: RatingKeys = {
  AAA: 20000,
  AA: 15000,
  A: 10000,
  BBB: 5000,
};

const ratingValuekeys: RatingKeys = {
  AAA: 3.5,
  AA: 3,
  A: 2.5,
  BBB: 2,
};

export default function Stepper({ rating }: { rating: string }) {
  const [bidUnits, setBidUnits] = useState<BidKeys>({});
  const [bidValue, setBidValue] = useState<BidKeys>({});
  const [askUnits, setAskUnits] = useState<BidKeys>({});
  const [askValue, setAskValue] = useState<BidKeys>({});

  const baseUnit: number = ratingUnitkeys[rating];
  const baseValue: number = ratingValuekeys[rating];

  useEffect(() => {
    setBidUnits({
      '1-3': Math.floor(Math.random() * 10000 + baseUnit),
      '3-5': Math.floor(Math.random() * 10000 + (baseUnit - 5000)),
      '5-10': Math.floor(Math.random() * 10000 + (baseUnit - 10000)),
      '10+': Math.floor(Math.random() * 10000 + 5000),
    });

    setAskUnits({
      '1-3': Math.floor(Math.random() * 10000 + baseUnit),
      '3-5': Math.floor(Math.random() * 10000 + (baseUnit - 5000)),
      '5-10': Math.floor(Math.random() * 10000 + (baseUnit - 10000)),
      '10+': Math.floor(Math.random() * 10000 + 5000),
    });

    setBidValue({
      '1-3': (Math.random() + baseValue).toFixed(2),
      '3-5': (Math.random() + (baseValue - 0.5)).toFixed(2),
      '5-10': (Math.random() + (baseValue - 1)).toFixed(2),
      '10+': Math.random().toFixed(2),
    });
    setAskValue({
      '1-3': (Math.random() + baseValue).toFixed(2),
      '3-5': (Math.random() + (baseValue - 0.5)).toFixed(2),
      '5-10': (Math.random() + (baseValue - 1)).toFixed(2),
      '10+': Math.random().toFixed(2),
    });
    const interval = setInterval(
      // set number every 5s
      () => {
        setBidUnits({
          '1-3': Math.floor(Math.random() * 10000 + baseUnit),
          '3-5': Math.floor(Math.random() * 10000 + (baseUnit - 5000)),
          '5-10': Math.floor(Math.random() * 10000 + (baseUnit - 10000)),
          '10+': Math.floor(Math.random() * 10000 + 5000),
        });
        setAskUnits({
          '1-3': Math.floor(Math.random() * 10000 + baseUnit),
          '3-5': Math.floor(Math.random() * 10000 + (baseUnit - 5000)),
          '5-10': Math.floor(Math.random() * 10000 + (baseUnit - 10000)),
          '10+': Math.floor(Math.random() * 10000 + 5000),
        });
        setBidValue({
          '1-3': (Math.random() + baseValue).toFixed(2),
          '3-5': (Math.random() + (baseValue - 0.5)).toFixed(2),
          '5-10': (Math.random() + (baseValue - 1)).toFixed(2),
          '10+': Math.random().toFixed(2),
        });
        setAskValue({
          '1-3': (Math.random() + baseValue).toFixed(2),
          '3-5': (Math.random() + (baseValue - 0.5)).toFixed(2),
          '5-10': (Math.random() + (baseValue - 1)).toFixed(2),
          '10+': Math.random().toFixed(2),
        });
      },
      20000,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="col-span-2 flex h-[480px] flex-1 flex-col items-start justify-start rounded-lgi bg-white text-left font-title-lg text-base text-dimgray shadow-lg">
      <div className="flex flex-1 flex-col items-start justify-start self-stretch p-4 ">
        <div className="flex h-12 flex-col items-start justify-start self-stretch text-5xl text-color">
          <h3 className="m-0 flex flex-1  items-center self-stretch text-inherit font-semibold">
            {rating} Rated NCDs
          </h3>
        </div>
        <div className="flex h-12 flex-row items-start justify-between self-stretch text-darkgray">
          <div className="relative inline-block w-16 shrink-0 self-stretch font-semibold">
            Tenor
          </div>
          <div className="relative inline-block w-16 shrink-0 self-stretch font-semibold">
            Yield
          </div>
          <div className="relative inline-block w-32 shrink-0 self-stretch font-semibold">
            Bid
          </div>
          <div className="relative inline-block w-32 shrink-0 self-stretch font-semibold">
            Ask
          </div>
        </div>
        <div className="flex h-12 flex-1 flex-row items-start justify-between self-stretch">
          <div className="relative inline-block w-16 shrink-0 self-stretch">
            1-3 Y
          </div>
          <div className="relative inline-block w-16 shrink-0 self-stretch">
            7.4%
          </div>
          <div className="flex w-32 flex-col items-start justify-start gap-2 self-stretch text-seagreen">
            <div className="flex flex-row items-start justify-start">
              <div className="h-auto p-[2px]">
                <FaIndianRupeeSign />
              </div>
              {bidValue['1-3']} Cr
            </div>
            <div className="relative flex h-3 shrink-0 items-center text-xs font-medium text-color-states-common-black opacity-[0.5]">
              {bidUnits['1-3']} units
            </div>
          </div>
          <div className="flex w-32 flex-col items-start justify-start gap-2 self-stretch text-indianred">
            <div className="flex flex-row items-start justify-start self-stretch">
              <div className="h-auto p-[2px]">
                <FaIndianRupeeSign />
              </div>
              {askValue['1-3']} Cr
            </div>
            <div className="relative flex h-3 shrink-0 items-center self-stretch text-xs font-medium text-color-states-common-black opacity-[0.5]">
              {askUnits['1-3']} units
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
