'use client';

export default function TableRow({
  key,
  row,
  cells,
}: {
  key: number;
  row: Record<string, any>;
  cells: string[];
}) {
  return (
    <tr
      key={key}
      className="text-sm w-full border-b py-3 last-of-type:border-none hover:cursor-pointer hover:bg-slate-50 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
      onClick={() => window.open(`/explore?cin=${row.cin}`, '_blank')}
    >
      {cells?.map((cell, index) => {
        return (
          <td
            key={index}
            className="shadow-r-inner sticky left-0 mx-0 border-spacing-x-1 whitespace-nowrap border border-l-0 border-solid border-gray-200 bg-auto px-3 py-3"
          >
            {row[cell]}
          </td>
        );
      })}
      <td className="whitespace-nowrap border border-solid border-gray-200 px-3 py-3">
        {'AAA'}
      </td>
      <td className="whitespace-nowrap border border-solid border-gray-200 px-3 py-3">
        {4}
      </td>
    </tr>
  );
}
