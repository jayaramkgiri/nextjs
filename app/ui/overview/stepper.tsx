
import { useMemo, type CSSProperties } from "react";



export default function Stepper(  {rupee,
  rupee1,
  customShape,
  rupee2,
  rupee3,
  linkLabeller,
  rupee4,
  vector37,
  propColor,
  propPadding,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3} : {
    rupee?: string;
    rupee1?: string;
    customShape?: string;
    rupee2?: string;
    rupee3?: string;
    linkLabeller?: string;
    rupee4?: string;
    vector37?: string;
  
    /** Style props */
    propColor?: CSSProperties["color"];
    propPadding?: CSSProperties["padding"];
    propMinWidth?: CSSProperties["minWidth"];
    propMinWidth1?: CSSProperties["minWidth"];
    propMinWidth2?: CSSProperties["minWidth"];
    propMinWidth3?: CSSProperties["minWidth"];
  }) {

  const aAARatedNCDsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const list1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const tenorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const yieldStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const bidStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const askStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className="flex-1 rounded-lgi bg-white shadow-[0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] h-[480px] flex flex-col items-start justify-start text-left text-base text-dimgray font-title-lg">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-4 gap-[16px]">
        <div className="self-stretch h-12 flex flex-col items-start justify-start text-5xl text-color">
          <h3
            className="m-0 self-stretch flex-1 relative text-inherit leading-[150%] font-semibold font-inherit flex items-center"
            style={aAARatedNCDsStyle}
          >
            AAA Rated NCDs
          </h3>
        </div>
        <div className="self-stretch h-8 flex flex-row items-start justify-start gap-[32px] text-darkgray">
          <div className="self-stretch w-16 relative leading-[150%] font-semibold inline-block shrink-0">
            Tenor
          </div>
          <div className="self-stretch w-16 relative leading-[150%] font-semibold inline-block shrink-0">
            Yield
          </div>
          <div className="self-stretch w-16 relative leading-[150%] font-semibold inline-block shrink-0">
            Bid
          </div>
          <div className="self-stretch w-16 relative leading-[150%] font-semibold inline-block shrink-0">
            Ask
          </div>
        </div>
        <div className="self-stretch h-12 flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
              1-3 Y
            </div>
            <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
              7.4%
            </div>
            <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img className="w-2 relative h-[11px]" alt="" src={rupee} />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    6.71 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                  3526 units
                </div>
              </div>
            </div>
            <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 relative h-[11px]"
                      alt=""
                      src={rupee1}
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    4.23 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                  2526 units
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-3px]"
            alt=""
            src={customShape}
          />
        </div>
        <div className="self-stretch h-12 flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
              1-3 Y
            </div>
            <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
              7.4%
            </div>
            <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 relative h-[11px]"
                      alt=""
                      src={rupee2}
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    6.71 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                  3526 units
                </div>
              </div>
            </div>
            <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 relative h-[11px]"
                      alt=""
                      src={rupee3}
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    4.23 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                  2526 units
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-3px]"
            alt=""
            src={linkLabeller}
          />
        </div>
        <div className="self-stretch h-12 flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
              1-3 Y
            </div>
            <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
              7.4%
            </div>
            <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 relative h-[11px]"
                      alt=""
                      src={rupee4}
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    6.71 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                  3526 units
                </div>
              </div>
            </div>
            <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 relative h-[11px]"
                      alt=""
                      src="/rupee-3.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    4.23 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
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
        <div className="self-stretch h-12 flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
              1-3 Y
            </div>
            <div className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0">
              7.4%
            </div>
            <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 relative h-[11px]"
                      alt=""
                      src="/rupee-2.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    6.71 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                  3526 units
                </div>
              </div>
            </div>
            <div className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 relative h-[11px]"
                      alt=""
                      src="/rupee-3.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    4.23 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
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
          className="self-stretch h-12 flex flex-col items-start justify-start"
          style={list1Style}
        >
          <div className="self-stretch flex-1 flex flex-row items-center justify-start">
            <div
              className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0"
              style={tenorStyle}
            >
              1-3 Y
            </div>
            <div
              className="self-stretch w-[92px] relative leading-[150%] inline-block shrink-0"
              style={yieldStyle}
            >
              7.4%
            </div>
            <div
              className="self-stretch w-[92px] flex flex-col items-start justify-start text-seagreen"
              style={bidStyle}
            >
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 relative h-[11px]"
                      alt=""
                      src="/rupee-2.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    6.71 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                  3526 units
                </div>
              </div>
            </div>
            <div
              className="self-stretch w-[92px] flex flex-col items-start justify-start text-indianred"
              style={askStyle}
            >
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-col items-center justify-start py-[7px] px-0">
                    <img
                      className="w-2 relative h-[11px]"
                      alt=""
                      src="/rupee-3.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[150%]">
                    4.23 Cr
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-medium text-color-states-common-black flex items-center h-3 shrink-0 opacity-[0.5]">
                  2526 units
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover mt-[-3px]"
            alt=""
            src={vector37}
          />
        </div>
      </div>
    </div>
  );
};

