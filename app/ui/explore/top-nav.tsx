'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Companies', href: '/explore' },
  { name: 'Debentures', href: '/explore1' },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <>
      <div className="divide-x-1 divide-x-100 flex w-2/3 gap-2">
        {links.map((link) => {
          return (
            <div
              key={link.name}
              className={`order-gray-500 -0 w-full py-3  hover:border-2 hover:border-t-0 hover:border-solid  ${
                pathname === link.href &&
                'border-b-2 border-solid border-gray-500'
              }`}
            >
              <Link
                key={link.name}
                href={link.href}
                className={`mx-auto block text-xl font-medium no-underline hover:text-gray-800 ${
                  pathname === link.href ? 'text-gray-800' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
