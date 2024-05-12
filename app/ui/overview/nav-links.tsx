'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { MdDashboard } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import React, { useState, useEffect } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Overview', href: '/overview', icon: MdDashboard },
  { name: 'Market', href: '/market', icon: BsGraphUpArrow },
  { name: 'Explore', href: '/explore', icon: MdOutlineExplore }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <div key={link.name} className='w-full'>
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-6 grow no-underline items-center justify-center gap-2 rounded-md text-lg font-medium hover:bg-chocolate hover:text-indianred md:flex-none md:justify-start p-2 ${pathname === link.href ? "text-indianred bg-chocolate" : "text-silver-100"}`}
          >
            <LinkIcon className="md:w-6 md:h-5 h-6 w-7" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
          </div>
        );
      })}
    </>
  );
}
