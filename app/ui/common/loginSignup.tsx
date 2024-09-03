'useClient';

import React from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function LoginSignup({ className }: { className: string }) {
  return (
    <Link
      className={className}
      href={`https://kite.zerodha.com/connect/login?v=3&api_key=${process.env.KITE_API_KEY}`}
      passHref={true}
    >
      <Button className="text-uppercase w-full bg-[#0059c1] font-semibold text-white">
        LOGIN WITH KITE
      </Button>
    </Link>
  );
}
