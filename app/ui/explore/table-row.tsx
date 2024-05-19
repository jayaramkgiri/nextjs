'use client';

import { useRouter } from 'next/navigation';

// const useOpenInNewTab = () => {
//   const router = useRouter();

//   const openInNewTab = (href: any) => {
//     router.push(href, { target: '_blank' });
//   };

//   return openInNewTab;
// };

export default function TableRow({
  row,
  cells,
}: {
  row: object;
  cells: string[];
}) {
  const router = useRouter();
  return (
    <tr
      key={row.id}
      className="text-sm w-full border-b py-3 last-of-type:border-none hover:cursor-pointer hover:bg-slate-50 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
      onClick={() => router.push('/overview')}
    >
      {cells?.map((cell) => {
        return (
          <td className="shadow-r-inner sticky left-0 mx-0 border-spacing-x-1 whitespace-nowrap border border-l-0 border-solid border-gray-200 bg-auto px-3 py-3">
            {row[cell]}
          </td>
        );
      })}
    </tr>
  );
}
