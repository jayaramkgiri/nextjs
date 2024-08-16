import { fetchIssuances, ITEMS_PER_PAGE } from '@/app/models/issuance';

import TableRow from '@/app/ui/explore/table-row';
import { currencyFormatter } from '@/app/lib/utils';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { BidAskCell } from '../market/bidAsk';

export default async function DebenturesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const issuances = await fetchIssuances(
    {
      OR: [
        {
          totalBuyVolume: { not: 0 },
        },
        {
          totalSellVolume: { not: 0 },
        },
      ],
    },
    currentPage,
    [
      {
        totalBuyVolume: 'desc',
      },
      {
        totalSellVolume: 'desc',
      },
    ],
  );

  return (
    <div className="w-full pt-0">
      <div className="inline-block w-full align-middle">
        <div className="rounded-lg ">
          <div className="mt-3 flex flex-col gap-2 md:hidden">
            {issuances.map((issuance, index) => {
              return (
                <Card
                  key={index}
                  className="w-full rounded-lg p-2 text-xs shadow-md"
                >
                  <CardHeader className="mb-2">
                    <div className="font-semibold">{issuance.isin}</div>
                  </CardHeader>
                  <CardBody className="flex w-full flex-col gap-2">
                    <div className="text-xxs font-normal text-blue-600">
                      {issuance.company!.name}
                    </div>
                    <div className="flex w-full gap-2">
                      <div className="flex w-full gap-0">
                        <div className="w-full text-xs text-gray-500">
                          Buy Price
                        </div>
                        <BidAskCell units={100} price={99.12} closePrice={98} />
                      </div>
                      <div className="flex w-full gap-0">
                        <div className="w-full text-xs text-gray-500">
                          Sell Price
                        </div>
                        <BidAskCell units={100} price={99.12} closePrice={98} />
                      </div>
                    </div>
                    <div className="flex w-full gap-2">
                      <div className="flex w-full gap-0">
                        <div className="w-full text-xs text-gray-500">
                          Face Value
                        </div>
                        <div className="text-primary w-full text-xs">1,000</div>
                      </div>
                      <div className="flex w-full gap-0">
                        <div className="w-full text-xs text-gray-500">
                          Coupon
                        </div>
                        <div className="text-primary w-full text-xs">
                          Fixed 11.2%
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full gap-2">
                      <div className="flex w-full gap-0">
                        <div className="w-full text-xs text-gray-500">
                          Allotment
                        </div>
                        <div className="text-primary w-full text-xs">
                          29 Jun 2019
                        </div>
                      </div>
                      <div className="flex w-full gap-0">
                        <div className="w-full text-xs text-gray-500">
                          Maturity
                        </div>
                        <div className="text-primary w-full text-xs">
                          31 Jul 2032
                        </div>
                      </div>
                    </div>
                    <div className="flex w-1/2 gap-2">
                      <div className="flex w-full gap-0">
                        <div className="w-full text-xs text-gray-500">
                          Rating
                        </div>
                        <div className="text-primary w-full text-xs">
                          Crisil AA
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
          <div className="hidden h-[calc(80vh-96px)] w-[90%] overflow-auto md:block">
            <table className="ml-0 border-collapse scroll-smooth">
              <thead className="rounded-lg text-left text-xs font-normal text-darkgray">
                <tr className="sticky top-0 z-20 border-b border-solid border-gray-200 bg-white">
                  <th
                    scope="col"
                    className="sticky left-0 top-0 z-20 w-6 bg-white px-2 py-2 font-medium"
                  >
                    S.No
                  </th>
                  <th
                    scope="col"
                    className="sticky left-[42px] top-0 z-20 w-4 bg-white px-2 py-2 font-medium"
                  >
                    ISIN
                  </th>
                  <th scope="col" className="px-2 py-2 font-medium">
                    Issuer Name
                  </th>
                  <th scope="col" className=" px-2 py-2 font-medium">
                    Buy Price
                  </th>
                  <th scope="col" className="px-2 py-2 font-medium">
                    Sell Price
                  </th>
                  <th scope="col" className="sticky px-2 py-2 font-medium ">
                    Face Value
                  </th>
                  <th scope="col" className="sticky px-2 py-2 font-medium ">
                    Credit Rating
                  </th>
                  <th scope="col" className="sticky px-2 py-2 font-medium ">
                    Allotment Date
                  </th>
                  <th scope="col" className="sticky px-2 py-2 font-medium ">
                    Redemption / Maturity
                  </th>
                  <th scope="col" className="sticky px-2 py-2 font-medium ">
                    Coupon Basis
                  </th>
                  <th scope="col" className="sticky px-2 py-2 font-medium ">
                    Coupon Rate
                  </th>
                </tr>
              </thead>
              <tbody className="text-secondary divide-y bg-white  text-xs">
                {issuances?.map((issuance, index) => {
                  const buy = {
                    units: issuance.bseBuyOrders,
                    price: issuance.bseBuyPrice,
                    closePrice: issuance.bseclose,
                  };
                  const sell = {
                    units: issuance.bseSellOrders,
                    price: issuance.bseSellPrice,
                    closePrice: issuance.bseclose,
                  };
                  return (
                    <TableRow
                      key={Number(issuance.id)}
                      sno={index}
                      showSno={true}
                      itemsPerPage={ITEMS_PER_PAGE}
                      currentPage={currentPage}
                      padding={0}
                      cells={[
                        issuance.isin,
                        issuance.company!.name,
                        buy,
                        sell,
                        currencyFormatter(
                          issuance.faceValue ||
                            issuance.bseFaceValue ||
                            issuance.nseFaceValue,
                        ),
                        issuance.bseCreditRating || issuance.nseCreditRating,
                        issuance.allotmentDate,
                        issuance.redemptionDate ||
                          issuance.bseMaturityDate ||
                          issuance.nseMaturityDate,
                        issuance.couponBasis,
                        issuance.couponRate,
                      ]}
                      isinHover={true}
                      clickable={true}
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
