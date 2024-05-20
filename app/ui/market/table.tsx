import { fetchCompanies } from '@/app/models/company';
import TableRow from '@/app/ui/explore/table-row';

interface Company {
  id: number,
  name: string,
  cin: string
}

export default async function CompaniesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const companies = await fetchCompanies(currentPage);

  return (
    <div className="flow-root pt-6">
      <div className="inline-block max-w-full align-middle">
        <div className="rounded-lg p-2 md:pt-0">
          <div className="md:hidden">
            {companies?.map((company: Company) => (
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
          <table className="relative ml-0 hidden w-full border-collapse overflow-auto scroll-smooth md:table">
            <thead className="text-sm relative rounded-lg text-left font-normal text-darkgray">
              <tr className="sticky top-[152px] z-10 bg-white">
                <th
                  scope="col"
                  className="sticky left-0 top-[142px] z-10 bg-white px-3 py-5 font-medium"
                >
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cin
                </th>
                <th scope="col" className="sticky px-3 py-5 font-medium">
                  Latest Rating
                </th>
                <th scope="col" className="sticky px-3 py-5 font-medium ">
                  Active Debentures
                </th>
              </tr>
            </thead>
            <tbody className="text-secondary divide-y overflow-x-auto bg-white">
              {companies?.map((company: Company) => (
                <TableRow
                  key={company.id}
                  row={company}
                  cells={['name', 'cin']}
                />
                // <tr
                //   key={company.id}
                //   className="text-sm w-full border-b py-3 last-of-type:border-none hover:cursor-pointer hover:bg-slate-50 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                // >
                //   <td className="shadow-r-inner sticky left-0 mx-0 border-spacing-x-1 whitespace-nowrap border border-l-0 border-solid border-gray-200 bg-auto px-3 py-3">
                //     {company.name}
                //   </td>
                //   <td className="whitespace-nowrap border border-solid border-gray-200 px-3 py-3">
                //     {company.cin}
                //   </td>
                //   <td className="whitespace-nowrap border border-solid border-gray-200 px-3 py-3">
                //     {'AAA'}
                //   </td>
                //   <td className="whitespace-nowrap border border-solid border-gray-200 px-3 py-3">
                //     {4}
                //   </td>
                // </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
