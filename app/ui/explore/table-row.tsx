'use client';

export default function TableRow({
  key,
  currentPage,
  showSno,
  itemsPerPage = 30,
  sno,
  cells,
  padding = 1
}: {
  key: number;
  currentPage: number;
  showSno: boolean;
  sno: number;
  itemsPerPage: number;
  cells: any[];
  padding: number;
}) {
  function tableData(cell: any, index: number) {
    let value = null;
    if (cell instanceof Date) {
      value = (
        <td
          key={index + 1}
          className={`mx-0 truncate bg-auto  px-${padding} py-${padding} hover:text-clip`}
        >
          {
            cell.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }
        </td >
      );
    } else if (cell instanceof Object) {
      value = (
        <td
          key={index + 1}
          className={`mx-0 truncate bg-auto  px-${padding} py-${padding} hover:text-clip ${cell.classNames}`}
        >
          {cell.value}
        </td>
      );
    } else {
      value = (
        <td
          key={index + 1}
          className={`mx-0 truncate bg-auto  px-${padding} py-${padding} hover:text-clip`}
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
          className={`sticky left-0 z-10 mx-0 whitespace-nowrap bg-white px-${padding} py-${padding}`}
        >
          {(currentPage - 1) * itemsPerPage + sno + 1}
        </td>
      )}
      <td
        key={1}
        className={`sticky ${showSno ? 'left-[42px]' : 'left-0'
          } z-10 mx-0  whitespace-nowrap bg-white px-${padding} py-${padding}`}
      >
        {cells[0]}
      </td>
      {
        cells?.slice(1, cells.length).map((cell, index) => {
          return tableData(cell, index);
        })
      }
    </tr >
  );
}
