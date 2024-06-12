'use client';

export default function TableRow({
  key,
  currentPage,
  showSno,
  sno,
  cells,
}: {
  key: number;
  currentPage: number;
  showSno: boolean;
  sno: number;
  cells: any[];
}) {
  return (
    <tr
      key={key}
      className="text-sm w-full border-b py-3 last-of-type:border-none hover:cursor-pointer hover:bg-slate-50 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
    >
      {showSno &&
        <td
          key={0}
          className="shadow-r-inner sticky left-0 z-10 mx-0 border-spacing-x-1 whitespace-nowrap border border-l-0 border-solid border-gray-200 bg-white px-3 py-3"
        >
          {(currentPage - 1) * 30 + sno + 1}
        </td>
      }
      <td
        key={1}
        className={`shadow-r-inner sticky ${showSno ? "left-[59px]" : "left-0"} z-10 mx-0 border-spacing-x-1 whitespace-nowrap border border-l-0 border-solid border-gray-200 bg-white px-3 py-3`}
      >
        {cells[0]}
      </td>
      {cells?.slice(1, cells.length).map((cell, index) => {
        return (
          <td
            key={index + 1}
            className="shadow-r-inner mx-0 border-spacing-x-1 whitespace-nowrap border border-l-0 border-solid border-gray-200 bg-auto px-3 py-3"
          >
            {cell instanceof Date
              ? cell.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
              : cell}
          </td>
        );
      })}
    </tr>
  );
}
