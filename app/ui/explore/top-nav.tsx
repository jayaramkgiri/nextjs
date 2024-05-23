'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Companies', href: '/explore/companies' },
  { name: 'Debentures', href: '/explore/debentures' },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <div className="sticky left-0 top-0 z-20 bg-white">
      <div className="mb-0 ml-2  flex w-2/3 gap-8 pt-5 ">
        {links.map((link) => {
          return (
            <div
              key={link.name}
              className={`text-13xl group w-full  ${
                pathname !== link.href &&
                'hover:duration-250 transition duration-0 hover:border-b-2'
              }`}
            >
              <Link
                key={link.name}
                href={link.href}
                className={`mx-auto block  pb-3 font-medium no-underline  ${
                  pathname === link.href
                    ? 'text-gray-800'
                    : 'text-gray-300 group-hover:text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
