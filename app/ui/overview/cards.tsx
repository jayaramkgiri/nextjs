import { useMemo, type CSSProperties } from 'react';
import { fetchCardData } from '@/app/lib/data';
import { FaIndianRupeeSign } from 'react-icons/fa6';

export default async function Cards({
  totalBid,
  propColor,
}: {
  rupee?: string;
  totalBid?: string;

  /** Style props */
  propColor?: CSSProperties['color'];
}) {
  const value2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const count = await fetchCardData();
  return (
    <div className="my-2 flex h-auto w-auto flex-row items-start gap-3 self-stretch rounded-3xl px-2 py-2 shadow-md md:h-1/5">
      <div className="text-primary text-sm overflow-hidden font-medium">
        <p>{totalBid}</p>
      </div>
      <div className="text-sm flex flex-col items-start justify-start gap-2 self-stretch overflow-hidden font-medium ">
        <div
          className="flex flex-row  justify-start text-seagreen"
          style={value2Style}
        >
          <FaIndianRupeeSign />
          62.71 Cr
        </div>
        <div className="text-xs text-dimgray">{count} units</div>
      </div>
    </div>
  );
}
