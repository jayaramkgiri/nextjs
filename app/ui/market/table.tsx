import { fetchIssuances } from '@/app/models/issuance';
import TableRow from '@/app/ui/explore/table-row';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridColDef,
  GridColumnGroupingModel,
} from '@mui/x-data-grid';

const columns: GridColDef<any>[] = [
  {
    field: 'issuerName',
    headerName: 'Issuer name',
  },
  {
    field: 'isin',
    headerName: 'ISIN',
    flex: 1,
    minWidth: 136,
  },
  {
    field: 'faceValue',
    headerName: 'Face Value',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'allotmentDate',
    headerName: 'Allotment Date',
    type: 'date',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'redemptionDate',
    headerName: 'Redemption Date',
    type: 'date',
    flex: 1,
    minWidth: 160,
  },
  {
    field: 'couponBasis',
    headerName: 'Coupon Basis',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'couponRate',
    headerName: 'Coupon Rate',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'paymentFrequency',
    headerName: 'Payment Frequency',
    flex: 1,
    minWidth: 160,
  },
];

const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: 'BSE',
    description: '',
    children: [{ field: 'issuerName' }, { field: 'isin' }],
  },
  {
    groupId: 'NSE',
    children: [{ field: 'couponBasis' }, { field: 'couponRate' }],
  },
];

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
            <DataGrid
              rows={issuances}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 30,
                  },
                },
              }}
              pageSizeOptions={[5]}
              autosizeOptions={{
                includeOutliers: true,
                includeHeaders: false,
                columns: ['issuerName'],
              }}
              autosizeOnMount
              columnGroupingModel={columnGroupingModel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
