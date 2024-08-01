'use client';

import Cards from '@/app/ui/overview/cards';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Companies', href: '/explore/companies' },
  { name: 'Debentures', href: '/explore/debentures' },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <div className="m-2 flex flex-row items-start justify-start self-stretch overflow-hidden py-0 pl-0 pr-5">
      <div className="mb-0 ml-2  flex w-2/5 gap-0 pt-5 ">
        {links.map((link) => {
          return (
            <div
              key={link.name}
              className={`group my-1 w-full  p-3 text-xl ${
                pathname === link.href
                  ? ' border-1 border-solid border-gray-700 shadow-inner shadow-gray-300'
                  : 'hover:duration-250  shadow-lg shadow-gray-300 transition duration-0 hover:border-2 hover:border-solid hover:border-gray-300'
              }`}
            >
              <Link
                key={link.name}
                href={link.href}
                className={`mx-auto block pb-3 font-medium no-underline  ${
                  pathname === link.href
                    ? 'text-gray-800 '
                    : ' text-gray-800 group-hover:text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
      {/* <div className="my-0 flex h-auto shrink-0 flex-row items-end justify-start gap-4 overflow-hidden py-0">
        <Cards cardType="bid" marketSummary={marketSummary} />
        <Cards cardType="ask" marketSummary={marketSummary} />
      </div> */}
    </div>
  );
}
