'use client';

export default function TableRow({
  key,
  row,
  sno,
  cells,
}: {
  key: number;
  row: Record<string, any>;
  sno: number;
  cells: string[];
}) {
  return (
    <tr
      key={key}
      className="text-sm w-full border-b py-3 last-of-type:border-none hover:cursor-pointer hover:bg-slate-50 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
    >
      <td
        key={key}
        className="shadow-r-inner sticky left-0 mx-0 border-spacing-x-1 whitespace-nowrap border border-l-0 border-solid border-gray-200 bg-auto px-3 py-3"
      >
        {sno + 1}
      </td>
      {cells?.map((cell, index) => {
        return (
          <td
            key={index}
            className="shadow-r-inner sticky left-0 mx-0 border-spacing-x-1 whitespace-nowrap border border-l-0 border-solid border-gray-200 bg-auto px-3 py-3"
          >
            {row[cell] instanceof Date
              ? row[cell].toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
              : row[cell]}
          </td>
        );
      })}
    </tr>
  );
}
