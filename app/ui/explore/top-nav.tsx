'use client';

import Cards from '@/app/ui/overview/cards';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'COMPANIES', href: '/explore/companies' },
  { name: 'DEBENTURES', href: '/explore/debentures' },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <div className="m-2 flex flex-row items-start self-stretch overflow-hidden py-0 pl-0 pr-5">
      <div className="mb-0 ml-2  flex w-2/5 gap-0 pt-5 ">
        {links.map((link) => {
          return (
            <div
              key={link.name}
              className={`text-md group my-1  w-full border  border-solid border-gray-300 p-1 ${
                pathname === link.href
                  ? 'bg-gray-100 shadow-inner shadow-gray-300'
                  : 'hover:duration-250  shadow-sm shadow-gray-300 transition duration-0 hover:bg-gray-100'
              }`}
            >
              <Link
                key={link.name}
                href={link.href}
                className={`mx-auto block py-1 text-center font-medium no-underline  ${
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
