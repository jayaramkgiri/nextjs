import { fetchMarket } from '@/app/models/issuance';
import { fetchBseLatestOrders } from '@/app/models/bseOrderBook';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

import TableRow from '@/app/ui/explore/table-row';

function formatIssuances(issuances: any) {
  let formatted: any = {};
  for (let i = 0; i < issuances.length; i++) {
    formatted[issuances[i].isin] = issuances[i];
  }
  return formatted;
}

function upArrow() {
  return (
    <div className="h-auto p-[2px] text-seagreen">
      <FaArrowUp />
    </div>
  );
}

function downArrow() {
  return (
    <div className="h-auto p-[2px] text-indianred">
      <FaArrowDown />
    </div>
  );
}

function bidAskCell(
  units: number | null,
  price: number | null,
  closePrice: number | null,
  exchange: string,
) {
  const classNames = exchange === 'bse' ? 'bg-neutral-100' : 'bg-orange-100';
  return {
    value: (
      <div className="flex flex-col gap-1 ">
        <div className="flex flex-row">
          {closePrice &&
            price &&
            (closePrice < price ? upArrow() : downArrow())}
          {price && units && (
            <div className="h-auto p-[2px] font-light">
              <FaIndianRupeeSign />
            </div>
          )}
          {price || '-'}
        </div>
        <div className="text-xs text-dimgray">{units || 0} units</div>
      </div>
    ),
    classNames: classNames,
  };
}

export default async function DebenturesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const issuances = await fetchMarket(currentPage);

  return (
    <div className="flow-root pt-0">
      <div className="inline-block max-w-full align-middle">
        <div className="rounded-lg ">
          <div className="md:hidden">
            {issuances.map((issuance, index) => (
              <div key={issuance.isin} className="mb-2 rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{issuance.bseOrderBook[0].scripName}</p>
                    </div>
                    <p className="text-sm text-gray-500">{issuance.isin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute h-[calc(100vh-280px)] w-[75%] overflow-auto">
            <table className="relative ml-0 hidden border-collapse scroll-smooth md:table">
              <thead className="text-sm rounded-lg text-left font-normal text-darkgray">
                <tr className="sticky top-0 z-20 w-6  bg-white font-medium">
                  <th
                    scope="col"
                    className="sticky left-0 top-0 z-20 bg-white px-3 py-3"
                  ></th>
                  <th
                    scope="col"
                    className=" bg-white  px-3 py-3 font-medium "
                  ></th>
                  <th
                    scope="col"
                    colSpan={3}
                    className="bg-neutral-100 px-3 py-3 text-center font-medium"
                  >
                    BSE
                  </th>
                  <th
                    scope="col"
                    colSpan={3}
                    className="bg-orange-100 px-3 py-3 text-center font-medium"
                  >
                    NSE
                  </th>
                  <th
                    scope="col"
                    colSpan={6}
                    className="bg-white px-3 py-3 text-center font-medium"
                  ></th>
                </tr>
                <tr className="sticky top-10 z-20 border-b border-solid border-gray-200 bg-white">
                  <th
                    scope="col"
                    className="sticky left-0 top-10 z-20 w-4 bg-white px-3 py-3 font-medium"
                  >
                    ISIN
                  </th>
                  <th scope="col" className="px-3 py-3 font-medium">
                    Issuer Name
                  </th>
                  <th
                    scope="col"
                    className="bg-neutral-100 px-3 py-3 font-medium"
                  >
                    Scrip Name
                  </th>
                  <th
                    scope="col"
                    className="bg-neutral-100 px-3 py-3 font-medium"
                  >
                    Bids
                  </th>
                  <th
                    scope="col"
                    className="bg-neutral-100 px-3 py-3 font-medium"
                  >
                    Asks
                  </th>
                  <th
                    scope="col"
                    className="bg-orange-100 px-3 py-3 font-medium"
                  >
                    Scrip Name
                  </th>
                  <th
                    scope="col"
                    className="bg-orange-100 px-3 py-3 font-medium"
                  >
                    Bids
                  </th>
                  <th
                    scope="col"
                    className="bg-orange-100 px-3 py-3 font-medium"
                  >
                    Asks
                  </th>
                  <th scope="col" className="sticky px-3 py-3 font-medium ">
                    Face Value
                  </th>
                  <th scope="col" className="sticky px-3 py-3 font-medium ">
                    Allotment Date
                  </th>
                  <th scope="col" className="sticky px-3 py-3 font-medium ">
                    Redemption / Maturity
                  </th>
                  <th scope="col" className="sticky px-3 py-3 font-medium ">
                    Coupon Basis
                  </th>
                  <th scope="col" className="sticky px-3 py-3 font-medium ">
                    Coupon Rate
                  </th>
                  <th scope="col" className="sticky px-3 py-3 font-medium ">
                    Payment Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="text-secondary divide-y  bg-white">
                {issuances?.map((issuance, index) => {
                  return (
                    <TableRow
                      key={Number(issuance.id)}
                      sno={index}
                      showSno={false}
                      currentPage={currentPage}
                      cells={[
                        issuance.isin,
                        issuance.company!.name,
                        {
                          value: issuance.bseOrderBook[0]?.scripName,
                          classNames: 'bg-neutral-100',
                        },
                        bidAskCell(
                          issuance.bseOrderBook[0]?.totalBuyQty,
                          issuance.bseOrderBook[0]?.buyPrice,
                          issuance.bseOrderBook[0]?.close,
                          'bse',
                        ),
                        bidAskCell(
                          issuance.bseOrderBook[0]?.totalSellQty,
                          issuance.bseOrderBook[0]?.sellPrice,
                          issuance.bseOrderBook[0]?.close,
                          'bse',
                        ),
                        {
                          value: issuance.nseOrderBook[0]?.scripName,
                          classNames: 'bg-orange-100',
                        },
                        bidAskCell(
                          issuance.nseOrderBook[0]?.totalBuyQty,
                          issuance.nseOrderBook[0]?.buyPrice,
                          issuance.nseOrderBook[0]?.close,
                          'nse',
                        ),
                        bidAskCell(
                          issuance.nseOrderBook[0]?.totalSellQty,
                          issuance.nseOrderBook[0]?.sellPrice,
                          issuance.nseOrderBook[0]?.close,
                          'nse',
                        ),
                        issuance.faceValue,
                        issuance.allotmentDate,
                        issuance.redemptionDate,
                        issuance.couponBasis,
                        issuance.couponRate,
                        issuance.paymentFrequency,
                      ]}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
