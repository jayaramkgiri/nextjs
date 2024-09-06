'use client';
import React from 'react';
import { Avatar } from '@nextui-org/react';
// import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUser } from '@auth0/nextjs-auth0/client';

export const UserDropdown = () => {
  const { user, error } = useUser();
  if (error) return <div>{error.message}</div>;
  return (
    user && (
      <DropdownMenu>
        <DropdownMenuTrigger className="mr-8 mt-3 p-0 focus:outline-none">
          <section className="flex gap-1 bg-white hover:cursor-pointer">
            <Avatar size="sm" src="/user.png" />
            <p className="my-auto flex w-20 items-start truncate p-0 text-2xs">
              {user.name}
            </p>
          </section>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="rounded-md bg-white p-0 shadow-lg"
          aria-label="User menu actions"
        >
          <DropdownMenuLabel key="profile">
            <p className="mx-auto w-fit truncate text-xs font-normal">
              {user.email}
            </p>
          </DropdownMenuLabel>
          {/* <div className="mx-auto h-[1px] w-[80%] bg-slate-500" />
          <DropdownMenuLabel key="logout" color="danger">
            <Link
              href="/api/auth/logout"
              className=" no-underline hover:cursor-pointer"
            >
              <p className="text-destructive mx-auto w-fit text-xs ">Log Out</p>
            </Link>
          </DropdownMenuLabel> */}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};
