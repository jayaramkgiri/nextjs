
import { useMemo, type CSSProperties } from "react";
import { fetchCardData } from '@/app/lib/data';


export default async  function Cards({ rupee, totalBid, propColor }: {
  rupee?: string;
  totalBid?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
}) {

  const valueStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const cardData = await fetchCardData();

  return (
    <div className="self-stretch shadow-[0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] rounded-9xl bg-white flex flex-col items-start justify-start py-[35px] px-[29px] gap-[120px] text-centre text-17xl text-seagreen font-h3 w-[182px]">
      <div className="self-stretch h-12 flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
            <img className="w-5 relative h-6" alt="" src={rupee} />
            <b
              className="self-stretch flex-1 relative leading-[133%]"
              style={valueStyle}
            >
             {`${cardData} Cr`} 
            </b>
          </div>
          <div className="self-stretch relative text-lg leading-[166%] font-semibold text-color-states-common-black opacity-[0.5]">
            83526 units
          </div>
        </div>
      </div>
      <h3 className="m-0 self-stretch relative text-5xl leading-[150%] font-semibold font-inherit text-text-primary">
        {totalBid}
      </h3>
    </div>
  );
}