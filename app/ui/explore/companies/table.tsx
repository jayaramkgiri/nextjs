import { fetchCompanies, ITEMS_PER_PAGE } from '@/app/models/company.mjs';
import TableRow from '@/app/ui/explore/table-row';
import BackToTopButton from '@/app/ui/explore/issuances/backToTopButton';
import CompaniesList from '@/app/ui/explore/companies/companiesList';

export default async function CompaniesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const companies = await fetchCompanies(query, currentPage);

  return (
    <div className="w-full pt-0">
      {(companies.length > 0) ? (
        <div className="inline-block w-full align-middle">
          <div className="rounded-lg ">
            <div className="mt-3 flex flex-col gap-2 md:hidden">
              {companies?.map((company: any, index: number) => {
                return <CompaniesList key={index} company={company} />;
              })}
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
                <tbody className=" divide-y overflow-x-auto  bg-white text-xs font-medium">
                  {companies?.map((company: any, index: number) => {
                    return (
                      <TableRow
                        key={company.id}
                        isinHover={false}
                        hoverData={null}
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
                            value: company.active_issuances,
                          },
                        ]}
                        clickable={false}
                        clickPath={''}
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
