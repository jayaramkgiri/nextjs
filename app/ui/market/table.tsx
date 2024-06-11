import { fetchIssuances } from '@/app/models/issuance';
import TableRow from '@/app/ui/explore/table-row';

export default async function DebenturesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const issuances = await fetchIssuances(currentPage);

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
                      <p>{issuance.description}</p>
                    </div>
                    <p className="text-sm text-gray-500">{issuance.isin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto h-[450px] w-[1100px] overflow-auto">
            <table className="relative ml-0 hidden border-collapse scroll-smooth md:table">
              <thead className="text-sm rounded-lg text-left font-normal text-darkgray">
                <tr className="">
                  <th
                    scope="col"
                    colSpan={3}
                    className=" font-medium"
                  >
                    BSE
                  </th>
                  <th
                    scope="col"
                    colSpan={4}
                    className=" font-medium"
                  >
                    NSE
                  </th>
                </tr>
                <tr className="sticky top-0 z-20 bg-white">
                  <th
                    scope="col"
                    className="sticky left-0 top-0 z-20 w-6 bg-white px-3 py-5 font-medium"
                  >
                    S.No
                  </th>
                  <th
                    scope="col"
                    className="sticky left-[59px] top-0 z-20 bg-white px-3 py-5 font-medium"
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
              <tbody className="text-secondary divide-y overflow-x-auto bg-white">
                {issuances?.map((issuance, index) => {
                  return (
                    <TableRow
                      key={Number(issuance.id)}
                      sno={index}
                      currentPage={currentPage}
                      cells={[
                        issuance.company.name,
                        issuance.isin,
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
