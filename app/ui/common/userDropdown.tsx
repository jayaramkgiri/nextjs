'use client';
import React from 'react';
import { Avatar } from '@nextui-org/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mr-8 mt-3 p-0">
        <section className="flex gap-1 border-none bg-white hover:cursor-pointer">
          <Avatar size="sm" src="/user.png" />
          <p className="my-auto w-20 truncate p-0 text-2xs">
            Jayaramjkbjkbjjksbdjkshjsdbkjasbd
          </p>
        </section>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="rounded-md border-none bg-white p-0 shadow-lg"
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownMenuLabel key="profile">
          <p className="mx-auto w-fit text-xs">ZB3249</p>
        </DropdownMenuLabel>
        <div className="mx-auto h-[1px] w-[80%] bg-slate-500" />
        <DropdownMenuLabel key="logout" color="danger">
          <p className="text-destructive mx-auto w-fit text-xs">Log Out</p>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
