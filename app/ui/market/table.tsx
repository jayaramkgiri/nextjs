import { fetchMarkets, ITEMS_PER_PAGE } from '@/app/models/market.mjs';
import { humanize_rating } from '@/app/models/issuance.mjs';

import TableRow from '@/app/ui/explore/table-row';
import { currencyFormatter } from '@/app/lib/utils';
import IssuanceList from '../explore/issuances/issuanceList';
import BackToTopButton from '../explore/issuances/backToTopButton';

export default async function DebenturesTable({
  query,
  currentPage,
  sort,
  filter
}: {
  query: string;
  currentPage: number;
  sort: string;
  filter: string;
}) {
  const issuances = await fetchMarkets(null, query, currentPage, sort, filter);

  return (
    <div className="w-full pt-0">
      {(issuances.length > 0) ? (
        <div className="inline-block w-full align-middle">
          <div className="rounded-lg ">
            <div className="mt-3 flex flex-col gap-2 md:hidden">
              {issuances.map((issuance: any, index: number) => {
                return (
                  <IssuanceList key={index} issuance={issuance} market={true} />
                );
              })}
              <BackToTopButton />
            </div>
            <div className="hidden h-[calc(88vh-96px)] w-[90%] overflow-auto md:block">
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
                <tbody className="divide-y bg-white  text-xs">
                  {issuances?.map((issuance: any, index: number) => {
                    const buy = {
                      units: issuance.total_buy_order,
                      price: issuance.buy_price,
                      volume: issuance.buy_volume,
                      closePrice: issuance.close,
                    };
                    const sell = {
                      units: issuance.total_sell_order,
                      price: issuance.sell_price,
                      volume: issuance.sell_volume,
                      closePrice: issuance.close,
                    };
                    return (
                      <TableRow
                        key={issuance.id}
                        sno={index}
                        showSno={true}
                        itemsPerPage={ITEMS_PER_PAGE}
                        currentPage={currentPage}
                        padding={0}
                        cells={[
                          issuance.isin,
                          issuance.company_name,
                          buy,
                          sell,
                          currencyFormatter(issuance.face_value),
                          humanize_rating(issuance),
                          issuance.allotment_date,
                          issuance.redemption_date,
                          issuance.coupon_basis,
                          issuance.coupon,
                        ]}
                        isinHover={true}
                        clickable={true}
                        clickPath={`/explore/debentures/${issuance.isin}`}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>) : (<div className='h-screen w-full text-center pt-20 text-xl'>No Data Found</div>)}
    </div>
  );
}
