
import { useMemo, type CSSProperties } from "react";
import { fetchCardData } from '@/app/lib/data';


export default async  function Cards({ rupee, totalBid, propColor }: {
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

  const cardData = await fetchCardData();

  return (
// <div className="self-stretch shadow-[0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] rounded-9xl bg-white flex flex-col items-start justify-start py-[35px] px-[29px] gap-[120px] text-left text-17xl text-seagreen font-h3 w-[182px]">
//       <div className="self-stretch flex flex-col items-start justify-start">
//         <div className="self-stretch h-12 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px]">
//           <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//             <img
//               className="h-6 w-5 relative"
//               loading="lazy"
//               alt=""
//               src={rupee}
//             />
//             <b
//               className="flex-1 relative leading-[48px] mq450:text-3xl mq450:leading-[29px] mq825:text-10xl mq825:leading-[38px]"
//               style={value2Style}
//             >
//               62.71 Cr
//             </b>
//           </div>
//           <div className="self-stretch relative text-lg leading-[30px] font-semibold text-darkslategray">
//             83526 units
//           </div>
//         </div>
//       </div>
//       <h3 className="m-0 self-stretch relative text-5xl leading-[150%] font-semibold font-inherit text-text-primary mq450:text-lgi mq450:leading-[29px]">
//         {totalBid}
//       </h3>
// </div> 


    <div className="flex-1 shadow-[0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] rounded-lgi bg-neutral-white flex flex-col items-start justify-start min-w-[255px] max-w-full text-left text-base text-dimgray-200 font-h3">
      <div className="self-stretch flex flex-col items-start justify-start pt-4 px-4 pb-12 gap-[16px] mq675:pt-5 mq675:pb-[31px] mq675:box-border">
        <div className="self-stretch flex flex-col items-start justify-start text-5xl text-text-primary">
          <div className="self-stretch h-12 relative leading-[150%] font-semibold flex items-center mq450:text-lgi mq450:leading-[29px]">
            AAA Rated NCDs
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 [row-gap:20px] text-darkgray mq450:flex-wrap">
          <div className="h-8 flex-1 relative leading-[150%] font-semibold inline-block min-w-[35px] max-w-[92px]">
            Tenor
          </div>
          <div className="h-8 flex-1 relative leading-[150%] font-semibold inline-block min-w-[35px] max-w-[92px]">
            Yield
          </div>
          <div className="h-8 flex-1 relative leading-[150%] font-semibold inline-block min-w-[35px] max-w-[92px]">
            Bids
          </div>
          <div className="h-8 flex-1 relative leading-[150%] font-semibold inline-block min-w-[35px] max-w-[92px]">
            Asks
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-h-[48px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 [row-gap:20px] mq450:flex-wrap">
            <div className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]">
              1-3 Y
            </div>
            <div className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]">
              7.4%
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-seagreen">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-2.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[25px]">6.71 Cr</div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  3526 units
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-indianred">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-3.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[25px]">4.23 Cr</div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  2526 units
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-3px]"
            alt=""
            src="/vector-37-2.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-h-[48px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 [row-gap:20px] mq450:flex-wrap">
            <div className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]">
              1-3 Y
            </div>
            <div className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]">
              7.4%
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-seagreen">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-2.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[25px]">6.71 Cr</div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  3526 units
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-indianred">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-3.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[25px]">4.23 Cr</div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  2526 units
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-3px]"
            alt=""
            src="/vector-37-2.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-h-[48px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 [row-gap:20px] mq450:flex-wrap">
            <div className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]">
              1-3 Y
            </div>
            <div className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]">
              7.4%
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-seagreen">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-2.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[25px]">6.71 Cr</div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  3526 units
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-indianred">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-3.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[25px]">4.23 Cr</div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  2526 units
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-3px]"
            alt=""
            src="/vector-37-2.svg"
          />
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-h-[48px]"
        >
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 [row-gap:20px] mq450:flex-wrap">
            <div className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]">
              1-3 Y
            </div>
            <div className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]">
              7.4%
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-seagreen">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-2.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[25px]">6.71 Cr</div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  3526 units
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-indianred">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-3.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[25px]">4.23 Cr</div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  2526 units
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-3px]"
            alt=""
            src="/vector-37-2.svg"
          />
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-h-[48px]"
        >
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 [row-gap:20px] mq450:flex-wrap">
            <div
              className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]"
            >
              1-3 Y
            </div>
            <div
              className="h-12 flex-1 relative leading-[150%] inline-block min-w-[69px] max-w-[92px]"
            >
              7.4%
            </div>
            <div
              className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-seagreen"
            >
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-2.svg"
                    />
                  </div>
                  <div
                    className="flex-1 relative leading-[25px]"
                  >
                    6.71 Cr
                  </div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  3526 units
                </div>
              </div>
            </div>
            <div
              className="flex-1 flex flex-col items-start justify-start min-w-[69px] max-w-[92px] text-indianred"
            >
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 h-[11px] relative"
                      alt=""
                      src="/rupee-3.svg"
                    />
                  </div>
                  <div
                    className="flex-1 relative leading-[25px]"
                  >
                    4.23 Cr
                  </div>
                </div>
                <div className="self-stretch h-3 relative text-xs leading-[150%] font-medium text-darkslategray flex items-center shrink-0">
                  2526 units
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-3px]"
            alt=""
            src="/vector-37-2.svg"
          />
        </div>
      </div>
    </div>
  );
}