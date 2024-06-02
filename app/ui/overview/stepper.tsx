'use client';

import { useState, useEffect } from 'react';
import { FaIndianRupeeSign } from 'react-icons/fa6';

interface RatingKeys {
  [index: string]: number;
}

interface BidKeys {
  [index: string]: number | string;
}

const tenor = ['1-3', '3-5', '5-10', '10+'];

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

const yieldKeys: RatingKeys = {
  AAA: 7.5,
  AA: 8.5,
  A: 9.5,
  BBB: 11,
};

export default function Stepper({ rating }: { rating: string }) {
  const [bidUnits, setBidUnits] = useState<BidKeys>({});
  const [bidValue, setBidValue] = useState<BidKeys>({});
  const [askUnits, setAskUnits] = useState<BidKeys>({});
  const [askValue, setAskValue] = useState<BidKeys>({});
  const [yieldValue, setYieldValue] = useState<BidKeys>({});

  const baseUnit: number = ratingUnitkeys[rating];
  const baseValue: number = ratingValuekeys[rating];
  const baseYield: number = yieldKeys[rating];

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
    setYieldValue({
      '1-3': (Math.random() + baseYield).toFixed(2),
      '3-5': (Math.random() + (baseYield + 0.25)).toFixed(2),
      '5-10': (Math.random() + (baseYield + 0.5)).toFixed(2),
      '10+': (Math.random() + (baseYield + 1)).toFixed(2),
    });
    const interval = setInterval(() => {
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
      setYieldValue({
        '1-3': (Math.random() + baseYield).toFixed(2),
        '3-5': (Math.random() + (baseYield + 0.25)).toFixed(2),
        '5-10': (Math.random() + (baseYield + 0.5)).toFixed(2),
        '10+': (Math.random() + (baseYield + 1)).toFixed(2),
      });
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      key={rating}
      className="col-span-2 flex h-[480px] flex-1 flex-col items-start justify-start rounded-lgi bg-white text-left font-title-lg text-base text-dimgray shadow-lg"
    >
      <div className="flex flex-1 flex-col items-start justify-start self-stretch p-4 ">
        <div className="flex h-12 flex-col items-start justify-start self-stretch pb-2 text-5xl text-color">
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
        {tenor.map((t) => {
          return (
            <div className="flex h-12 flex-1 flex-row items-start justify-between self-stretch">
              <div className="relative inline-block w-16 shrink-0 self-stretch">
                {t} Y
              </div>
              <div className="relative inline-block w-16 shrink-0 self-stretch">
                {yieldValue[t]}%
              </div>
              <div className="flex w-32 flex-col items-start justify-start gap-2 self-stretch text-seagreen">
                <div className="flex flex-row items-start justify-start">
                  <div className="h-auto p-[2px]">
                    <FaIndianRupeeSign />
                  </div>
                  {bidValue[t]} Cr
                </div>
                <div className="relative flex h-3 shrink-0 items-center text-xs font-medium text-color-states-common-black opacity-[0.5]">
                  {bidUnits[t]} units
                </div>
              </div>
              <div className="flex w-32 flex-col items-start justify-start gap-2 self-stretch text-indianred">
                <div className="flex flex-row items-start justify-start self-stretch">
                  <div className="h-auto p-[2px]">
                    <FaIndianRupeeSign />
                  </div>
                  {askValue[t]} Cr
                </div>
                <div className="relative flex h-3 shrink-0 items-center self-stretch text-xs font-medium text-color-states-common-black opacity-[0.5]">
                  {askUnits[t]} units
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
