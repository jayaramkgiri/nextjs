import { fetchCompanies, ITEMS_PER_PAGE } from '@/app/models/company';
import TableRow from '@/app/ui/explore/table-row';
import BackToTopButton from '@/app/ui/explore/issuances/backToTopButton';

export default async function CompaniesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const companies = await fetchCompanies(currentPage);

  return (
    <div className="w-full pt-0">
      <div className="inline-block w-full align-middle">
        <div className="rounded-lg ">
          <div className="mt-3 flex flex-col gap-2 md:hidden">
            {companies?.map((company, index) => (
              <div key={company.id} className="mb-2 rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{company.name}</p>
                    </div>
                    <p className="text-xs text-gray-500">{company.cin}</p>
                  </div>
                </div>
              </div>
            ))}
            <BackToTopButton />
          </div>
          <div className="hidden h-[calc(94vh-72px)] w-[90%] overflow-auto md:block">
            <table className="relative ml-0 hidden border-collapse scroll-smooth md:table">
              <thead className="relative rounded-lg text-left text-xs text-darkgray">
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
              <tbody className="text-secondary divide-y overflow-x-auto  bg-white text-xs font-medium">
                {companies?.map((company: any, index: number) => {
                  company['issuanceCount'] = company._count['issuances'];
                  return (
                    <TableRow
                      key={company.id}
                      isinHover={false}
                      showSno={true}
                      currentPage={currentPage}
                      sno={index}
                      itemsPerPage={ITEMS_PER_PAGE}
                      padding={2}
                      cells={[
                        company.name,
                        company.cin,
                        {
                          url: `/explore/debentures?cin=${company.cin}`,
                          value: company._count['issuances'],
                        },
                      ]}
                      clickable={false}
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
