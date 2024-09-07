'use client';
import React from 'react';
import { Avatar } from '@nextui-org/react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUser } from '@auth0/nextjs-auth0/client';
import useMediaQuery from '@mui/material/useMediaQuery';

export const UserDropdown = () => {
  const { user, error } = useUser();
  const matches = useMediaQuery('(max-width:768px)');

  if (error) return <div>{error.message}</div>;

  return (
    (user || matches) && (
      <DropdownMenu>
        <DropdownMenuTrigger className="mr-8 mt-3 p-0 focus:outline-none">
          <section className="flex gap-1 bg-white hover:cursor-pointer">
            <Avatar size="sm" src="/user.png" />
            {user && (
              <p className="my-auto  hidden w-20 items-start truncate p-0 text-2xs md:flex">
                {user.name}
              </p>
            )}
          </section>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="rounded-md bg-white p-0 shadow-lg"
          aria-label="User menu actions"
        >
          {user && (
            <DropdownMenuLabel key="profile">
              <p className="mx-auto my-0 w-fit truncate text-xs font-normal md:hidden">
                {user.name}
              </p>
            </DropdownMenuLabel>
          )}
          {user && (
            <DropdownMenuLabel key="profile">
              <p className="mx-auto mt-0 w-fit truncate text-xs font-normal">
                {user.email}
              </p>
            </DropdownMenuLabel>
          )}
          {user && (
            <div className="mx-auto h-[1px] w-[80%] bg-slate-500 md:hidden" />
          )}

          {matches &&
            (user ? (
              <DropdownMenuLabel key="logout" color="danger">
                <Link
                  href="/api/auth/logout"
                  className=" no-underline hover:cursor-pointer"
                >
                  <p className="text-destructive mx-auto w-fit text-xs ">
                    Logout
                  </p>
                </Link>
              </DropdownMenuLabel>
            ) : (
              <DropdownMenuLabel key="login" color="danger">
                <Link
                  href="/api/auth/login"
                  className=" no-underline hover:cursor-pointer"
                >
                  <p className="text-primary mx-auto w-fit text-xs ">Login</p>
                </Link>
              </DropdownMenuLabel>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};
