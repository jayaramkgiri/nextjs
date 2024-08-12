'use client';
import { BidAskCell } from '../market/bidAsk';
import { Card, CardBody, CardHeader, Tooltip } from '@nextui-org/react';

export default function TableRow({
  key,
  currentPage,
  showSno,
  itemsPerPage = 30,
  sno,
  cells,
  padding = 1,
  isinHover = false,
}: {
  key: number;
  currentPage: number;
  showSno: boolean;
  sno: number;
  itemsPerPage: number;
  cells: any[];
  padding: number;
  isinHover: boolean;
}) {
  function tableData(cell: any, index: number) {
    let value = null;
    if (cell instanceof Date) {
      value = (
        <td
          key={index + 1}
          className={`mx-0 truncate bg-auto px-2  font-medium py-${padding} hover:text-clip`}
        >
          {cell.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </td>
      );
    } else if (cell instanceof Object) {
      value = (
        <td
          key={index + 1}
          className={`mx-0 truncate bg-auto  px-2 py-${padding} font-medium hover:text-clip`}
        >
          <BidAskCell
            units={cell.units}
            price={cell.price}
            closePrice={cell.closePrice}
          />
        </td>
      );
    } else {
      value = (
        <td
          key={index + 1}
          className={`mx-0 w-3 truncate bg-auto px-2 font-medium py-${padding} hover:text-clip`}
        >
          {cell}
        </td>
      );
    }
    return value;
  }
  return (
    <tr
      key={key}
      className={`text-sm h-auto border-b border-solid border-gray-200 py-${padding}`}
    >
      {showSno && (
        <td
          key={0}
          className={`sticky left-0 z-10 mx-0 whitespace-nowrap  bg-white px-2 font-medium py-${padding}`}
        >
          {(currentPage - 1) * itemsPerPage + sno + 1}
        </td>
      )}
      <td
        key={1}
        className={`sticky ${
          showSno ? 'left-[42px]' : 'left-0'
        } z-10 mx-0  whitespace-nowrap bg-white px-2 font-medium py-${padding}`}
      >
        {isinHover ? (
          <Tooltip
            delay={500}
            closeDelay={500}
            content={
              <Card className="rounded-lg border border-solid border-gray-200 bg-white p-2">
                <CardBody className="text-xxs flex flex-col gap-1 font-semibold text-gray-500">
                  <p className="text-2xs m-0 p-0">
                    BSE Scrip&ensp;:&ensp;akjsjka
                  </p>
                  <p className="text-2xs m-0 p-0">
                    NSE Scrip&ensp;:&ensp;jshdjs
                  </p>
                </CardBody>
              </Card>
            }
          >
            {cells[0]}
          </Tooltip>
        ) : (
          cells[0]
        )}
      </td>
      {cells?.slice(1, cells.length).map((cell, index) => {
        return tableData(cell, index);
      })}
    </tr>
  );
}
