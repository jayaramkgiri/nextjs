
import { useMemo, type CSSProperties } from "react";
import { fetchCardData } from '@/app/lib/data';
import { FaIndianRupeeSign } from "react-icons/fa6";

export default async  function Cards({ totalBid, propColor }: {
  rupee?: string;
  totalBid?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
}) {
  const value2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch shadow-lg rounded-3xl flex flex-col gap-3 h-auto w-auto items-start font-h3 md:h-1/5 mx-6 py-2 px-6 my-8">
      <div className="text-xl font-semibold text-primary overflow-hidden">
        <p>
          {totalBid}
        </p>
      </div>
      <div className="self-stretch flex flex-col items-start text-sm md:text-xl gap-2 font-medium  overflow-hidden justify-start">
        <div className="flex flex-row  text-seagreen justify-start" style={value2Style}>
          <FaIndianRupeeSign />
          62.71 Cr
        </div>
        <div className="text-dimgray">
         {fetchCardData()} units
        </div>
      </div>
    </div> 
  );
}