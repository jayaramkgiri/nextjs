import { fetchIssuances, ITEMS_PER_PAGE } from '@/app/models/issuance.mjs';
import TableRow from '@/app/ui/explore/table-row';
import IssuanceList from './issuanceList';
import BackToTopButton from '@/app/ui/explore/issuances/backToTopButton';

export default async function DebenturesTable({
  query = '',
  currentPage = 1,
}: {
  query: string;
  currentPage: number;
}) {
  const issuances = await fetchIssuances(query, currentPage);

  return (
    <div className="w-full pt-0">
      <div className="inline-block w-full align-middle">
        <div className="rounded-lg ">
          <div className="mt-3 flex flex-col gap-2 md:hidden">
            {issuances.map((issuance, index) => {
              return (
                <IssuanceList key={index} issuance={issuance} market={false} />
              );
            })}
            <BackToTopButton />
          </div>
          <div className="hidden h-[calc(94vh-72px)] w-[90%] overflow-auto md:block">
            <table className="relative ml-0 hidden border-collapse scroll-smooth md:table">
              <thead className="rounded-lg text-left text-xs font-medium text-darkgray">
                <tr className="sticky top-0 z-20 bg-white">
                  <th
                    scope="col"
                    className="sticky left-0 top-0 z-20 w-6 bg-white px-3 py-5 font-medium"
                  >
                    S.No
                  </th>
                  <th
                    scope="col"
                    className="sticky left-[42px] top-0 z-20 w-6 bg-white px-3 py-5 font-medium"
                  >
                    Issuer Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    ISIN
                  </th>
                  <th scope="col" className="sticky px-3 py-5 font-medium ">
                    Face Value
                  </th>
                  <th scope="col" className="sticky px-3 py-5 font-medium ">
                    Allotment Date
                  </th>
                  <th scope="col" className="sticky px-3 py-5 font-medium ">
                    Redemption / Maturity
                  </th>
                  <th scope="col" className="sticky px-3 py-5 font-medium ">
                    Coupon Basis
                  </th>
                  <th scope="col" className="sticky px-3 py-5 font-medium ">
                    Coupon Rate
                  </th>
                  <th scope="col" className="sticky px-3 py-5 font-medium ">
                    Rating
                  </th>
                  <th scope="col" className="sticky px-3 py-5 font-medium ">
                    Payment Frequency
                  </th>
                  <th scope="col" className="sticky px-3 py-5 font-medium ">
                    Issue Size
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y overflow-x-auto bg-white text-xs">
                {issuances &&
                  issuances.length > 0 &&
                  issuances.map((issuance, index) => {
                    return (
                      <TableRow
                        key={issuance.isin}
                        isinHover={false}
                        sno={index}
                        currentPage={currentPage}
                        showSno={true}
                        itemsPerPage={ITEMS_PER_PAGE}
                        padding={2}
                        cells={[
                          issuance.company_name,
                          issuance.isin,
                          issuance.face_value,
                          issuance.allotment_date,
                          issuance.redemption_date,
                          issuance.coupon_basis,
                          issuance.coupon,
                          issuance.latest_rating,
                          issuance.interest_frequency,
                          issuance.issue_size,
                        ]}
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
