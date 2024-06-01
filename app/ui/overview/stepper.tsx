'use client';

import { useState, useEffect } from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6';

const ratingUnitkeys = {
  'AAA': 20000,
  'AA': 15000,
  'A': 10000,
  'BBB': 5000
}

const ratingValuekeys = {
  'AAA': 3.5,
  'AA': 3,
  'A': 2.5,
  'BBB': 2
}

export default function Stepper({ rating }: { rating: string }) {



  const [bidUnits, setBidUnits] = useState({});
  const [bidValue, setBidValue] = useState({});
  const [askUnits, setAskUnits] = useState({});
  const [askValue, setAskValue] = useState({});

  const baseUnit = ratingUnitkeys[rating];
  const baseValue = ratingValuekeys[rating];


  useEffect(() => {
    setBidUnits(
      {
        '1-3': Math.floor(Math.random() * 10000 + baseUnit),
        '3-5': Math.floor(Math.random() * 10000 + (baseUnit - 5000)),
        '5-10': Math.floor(Math.random() * 10000 + (baseUnit - 10000)),
        '10+': Math.floor(Math.random() * 10000 + 5000),
      });
    setAskUnits(
      {
        '1-3': Math.floor(Math.random() * 10000 + baseUnit),
        '3-5': Math.floor(Math.random() * 10000 + (baseUnit - 5000)),
        '5-10': Math.floor(Math.random() * 10000 + (baseUnit - 10000)),
        '10+': Math.floor(Math.random() * 10000 + 5000),
      });
    setBidValue({
      '1-3': (Math.random() + baseValue).toFixed(2),
      '3-5': (Math.random() + (baseValue - 0.5)).toFixed(2),
      '5-10': (Math.random() + (baseValue - 1)).toFixed(2),
      '10+': (Math.random()).toFixed(2),
    });
    setAskValue({
      '1-3': (Math.random() + baseValue).toFixed(2),
      '3-5': (Math.random() + (baseValue - 0.5)).toFixed(2),
      '5-10': (Math.random() + (baseValue - 1)).toFixed(2),
      '10+': (Math.random()).toFixed(2),
    });
    const interval = setInterval(
      // set number every 5s
      () => {
        setBidUnits(
          {
            '1-3': Math.floor(Math.random() * 10000 + baseUnit),
            '3-5': Math.floor(Math.random() * 10000 + (baseUnit - 5000)),
            '5-10': Math.floor(Math.random() * 10000 + (baseUnit - 10000)),
            '10+': Math.floor(Math.random() * 10000 + 5000),
          });
        setAskUnits(
          {
            '1-3': Math.floor(Math.random() * 10000 + baseUnit),
            '3-5': Math.floor(Math.random() * 10000 + (baseUnit - 5000)),
            '5-10': Math.floor(Math.random() * 10000 + (baseUnit - 10000)),
            '10+': Math.floor(Math.random() * 10000 + 5000),
          });
        setBidValue({
          '1-3': (Math.random() + baseValue).toFixed(2),
          '3-5': (Math.random() + (baseValue - 0.5)).toFixed(2),
          '5-10': (Math.random() + (baseValue - 1)).toFixed(2),
          '10+': (Math.random()).toFixed(2),
        });
        setAskValue({
          '1-3': (Math.random() + baseValue).toFixed(2),
          '3-5': (Math.random() + (baseValue - 0.5)).toFixed(2),
          '5-10': (Math.random() + (baseValue - 1)).toFixed(2),
          '10+': (Math.random()).toFixed(2),
        });
      },
      20000
    );
    return () => {
      clearInterval(interval);
    };
  }, [])

  return (
    <div className="flex-1 rounded-lgi bg-white shadow-lg h-[480px] flex flex-col items-start justify-start text-left col-span-2 text-base text-dimgray font-title-lg">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-4 ">
        <div className="self-stretch h-12 flex flex-col items-start justify-start text-5xl text-color">
          <h3
            className="m-0 self-stretch flex-1  text-inherit font-semibold flex items-center"
          >
            {rating} Rated NCDs
          </h3>
        </div>
        <div className="self-stretch h-12 flex flex-row items-start justify-between text-darkgray">
          <div className="self-stretch w-16 relative font-semibold inline-block shrink-0">
            Tenor
          </div>
          <div className="self-stretch w-16 relative font-semibold inline-block shrink-0">
            Yield
          </div>
          <div className="self-stretch w-32 relative font-semibold inline-block shrink-0">
            Bid
          </div>
          <div className="self-stretch w-32 relative font-semibold inline-block shrink-0">
            Ask
          </div>
        </div>
        <div className="self-stretch h-12 flex-1 flex flex-row items-start justify-between">
          <div className="self-stretch w-16 relative inline-block shrink-0">
            1-3 Y
          </div>
          <div className="self-stretch w-16 relative inline-block shrink-0">
            7.4%
          </div>
          <div className="self-stretch w-32 flex flex-col items-start justify-start text-seagreen gap-2">
            <div className="flex flex-row items-start justify-start">
              <div className='h-auto p-[2px]'>
                <FaIndianRupeeSign />
              </div>
              {bidValue['1-3']} Cr
            </div>
            <div className="relative text-xs font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
              {bidUnits['1-3']} units
            </div>
          </div>
          <div className="self-stretch w-32 flex flex-col items-start justify-start text-indianred gap-2">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className='h-auto p-[2px]'>
                <FaIndianRupeeSign />
              </div>
              {askValue['1-3']} Cr
            </div>
            <div className="self-stretch relative text-xs font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
              {askUnits['1-3']} units
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

