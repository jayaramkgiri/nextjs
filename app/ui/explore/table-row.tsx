'use client';
import { BidAskCell } from '../market/bidAsk';
import { Card, CardBody, Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TableRow({
  key,
  currentPage,
  showSno,
  itemsPerPage = 30,
  sno,
  cells,
  padding = 1,
  isinHover = false,
  clickable = true,
}: {
  key: number;
  currentPage: number;
  showSno: boolean;
  sno: number;
  itemsPerPage: number;
  cells: any[];
  padding: number;
  isinHover: boolean;
  clickable: boolean;
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
      value =
        cell.url === undefined ? (
          <td
            key={index + 1}
            className={`mx-0 min-w-28 truncate bg-auto px-2 py-${padding} font-medium hover:text-clip`}
          >
            <BidAskCell
              units={cell.units}
              price={cell.price}
              closePrice={cell.closePrice}
              classNames=""
              showRupee={true}
            />
          </td>
        ) : (
          <td
            key={index + 1}
            className={`mx-0 truncate bg-auto  pl-5 py-${padding}  font-medium`}
          >
            <Link
              href={cell.url}
              className="text-[#35353A] no-underline hover:underline focus:cursor-pointer"
            >
              {cell.value}
            </Link>{' '}
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
  const router = useRouter();
  return (
    <tr
      key={key}
      className={`text-sm group h-auto border-b border-solid border-gray-200 ${
        clickable && 'cursor-pointer'
      } ${clickable && 'hover:bg-gray-100'} py-${padding}`}
      onClick={() => clickable && router.push('/explore/debentures/1')}
    >
      {showSno && (
        <td
          key={0}
          className={`sticky left-0 z-10 mx-0 whitespace-nowrap  bg-white px-2 font-medium py-${padding} ${
            clickable && 'group-hover:bg-gray-100'
          }`}
        >
          {(currentPage - 1) * itemsPerPage + sno + 1}
        </td>
      )}
      <td
        key={1}
        className={`sticky ${showSno ? 'left-[42px]' : 'left-0'} ${
          clickable && 'group-hover:bg-gray-100'
        } z-10 mx-0  whitespace-nowrap bg-white px-2 font-medium py-${padding}`}
      >
        {isinHover ? (
          <Tooltip
            delay={500}
            closeDelay={500}
            content={
              <Card className="rounded-lg border border-solid border-gray-200 bg-white p-2">
                <CardBody className="flex flex-col gap-1 text-xxs font-semibold text-gray-500">
                  <p className="m-0 p-0 text-2xs">
                    BSE Scrip&ensp;:&ensp;938742
                  </p>
                  <p className="m-0 p-0 text-2xs">
                    NSE Scrip&ensp;:&ensp;871REC28-N9
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
