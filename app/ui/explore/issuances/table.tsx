import { fetchIssuances, ITEMS_PER_PAGE } from '@/app/models/issuance';
import TableRow from '@/app/ui/explore/table-row';
import IssuanceList from './issuanceList';

export default async function DebenturesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const issuances = await fetchIssuances({}, currentPage);

  return (
    <div className="flow-root pt-0">
      <div className="inline-block max-w-full align-middle">
        <div className="rounded-lg ">
          <div className="md:hidden">
            {issuances.map((issuance, index) => {
              return (
                <IssuanceList key={index} issuance={issuance} market={true} />
              );
            })}
          </div>
          <div className="absolute h-[calc(85vh-104px)] w-[75%] overflow-auto">
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
                    className="sticky left-[59px] top-0 z-20 w-6 bg-white px-3 py-5 font-medium"
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
                    Payment Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="text-secondary divide-y overflow-x-auto bg-white text-xs">
                {issuances &&
                  issuances.length > 0 &&
                  issuances.map((issuance, index) => {
                    return (
                      <TableRow
                        key={Number(issuance.id)}
                        isinHover={false}
                        sno={index}
                        currentPage={currentPage}
                        showSno={true}
                        itemsPerPage={ITEMS_PER_PAGE}
                        padding={2}
                        cells={[
                          issuance.company!.name,
                          issuance.isin,
                          issuance.faceValue,
                          issuance.allotmentDate,
                          issuance.redemptionDate,
                          issuance.couponBasis,
                          issuance.couponRate,
                          issuance.paymentFrequency,
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
