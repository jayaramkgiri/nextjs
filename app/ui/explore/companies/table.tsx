import { fetchCompanies } from '@/app/models/company';
import TableRow from '@/app/ui/explore/table-row';

export default async function CompaniesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const companies = await fetchCompanies(currentPage);

  return (
    <div className="flow-root pt-0">
      <div className="inline-block max-w-full align-middle">
        <div className="rounded-lg ">
          <div className="md:hidden">
            {companies?.map((company, index) => (
              <div key={company.id} className="mb-2 rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{company.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{company.cin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute h-[calc(100vh-280px)] w-[75%] overflow-auto">
            <table className="relative ml-0 hidden border-collapse scroll-smooth md:table">
              <thead className="text-sm relative rounded-lg text-left font-normal text-darkgray">
                <tr className="sticky top-0 z-20 bg-white">
                  <th
                    scope="col"
                    className="sticky left-0 top-0 z-20 bg-white px-3 py-3 font-medium"
                  >
                    S.No
                  </th>
                  <th
                    scope="col"
                    className="sticky left-0 top-0 z-20 bg-white px-3 py-3 font-medium"
                  >
                    Issuer Name
                  </th>
                  <th scope="col" className="px-3 py-3 font-medium">
                    Cin
                  </th>
                  <th scope="col" className="sticky px-3 py-3 font-medium ">
                    Active Debentures
                  </th>
                </tr>
              </thead>
              <tbody className="text-secondary divide-y overflow-x-auto bg-white">
                {companies?.map((company: any, index: number) => {
                  company['issuanceCount'] = company._count['issuances'];
                  return (
                    <TableRow
                      key={company.id}
                      showSno={true}
                      currentPage={currentPage}
                      sno={index}
                      cells={[
                        company.name,
                        company.cin,
                        company._count['issuances'],
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
