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
    <div className="flex flex-row items-start justify-between self-stretch overflow-hidden py-0 pl-0 pr-5">
      <div className="mb-0 ml-2  flex w-2/5 gap-8 pt-5 ">
        {links.map((link) => {
          return (
            <div
              key={link.name}
              className={`text-13xl group w-full  ${
                pathname !== link.href &&
                'hover:duration-250  transition duration-0 hover:border-b-2 hover:border-solid hover:border-indianred'
              }`}
            >
              <Link
                key={link.name}
                href={link.href}
                className={`mx-auto block pb-3 font-medium no-underline  ${
                  pathname === link.href
                    ? 'border-b-2 border-solid border-indianred text-gray-800'
                    : ' text-gray-300 group-hover:text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="my-0 flex h-auto shrink-0 flex-row items-end justify-start gap-4 overflow-hidden py-0">
        <Cards cardType="bid" />
        <Cards cardType="ask" />
      </div>
    </div>
  );
}
