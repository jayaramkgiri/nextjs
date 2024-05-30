import { fetchIssuances } from '@/app/models/issuance';
import TableRow from '@/app/ui/explore/table-row';

export default async function DenenturesTable({
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
            {issuances?.map((issuance, index) => (
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
          <table className="relative ml-0 hidden w-full border-collapse overflow-auto scroll-smooth md:table">
            <thead className="text-sm relative rounded-lg text-left font-normal text-darkgray">
              <tr className="sticky top-[136px] z-10 bg-white">
                <th
                  scope="col"
                  className="sticky left-0 top-[142px] z-10 bg-white px-3 py-5 font-medium"
                >
                  S.No
                </th>
                <th
                  scope="col"
                  className="sticky left-0 top-[142px] z-10 bg-white px-3 py-5 font-medium"
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
              {issuances?.map((issuance: any, index) => {
                issuance['companyName'] = issuance.company.name;
                return (
                  <TableRow
                    key={issuance.id}
                    row={issuance}
                    sno={index}
                    cells={[
                      'companyName',
                      'isin',
                      'faceValue',
                      'allotmentDate',
                      'redemptionDate',
                      'couponBasis',
                      'couponRate',
                      'paymentFrequency',
                    ]}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
