'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CompaniesList({ company }: { company: any }) {
  return (
    <div>
      <Card className="w-full rounded-lg p-2 text-xs shadow-md">
        <CardHeader className="mb-2 flex flex-col gap-0">
          <div className="w-full font-semibold">{company.name}</div>
          <div className="m-0 flex w-full justify-start gap-2 p-0 ">
            <p className="m-0 py-1 text-xxs font-normal text-neutral-500">
              CIN:
            </p>
            <p className="m-0 py-1 text-xxs font-normal text-primary ">
              {company.cin}
            </p>
          </div>
        </CardHeader>
        <CardBody className="mt-2 flex w-full flex-col gap-2">
          <div className="flex w-full justify-between">
            <div className="flex w-2/5 gap-2">
              <div className="w-full text-xs text-gray-500">
                Active Debentures
              </div>
              <Link
                href={`/explore/debentures?cin=${company.cin}`}
                className="text-[#35353A]  underline"
              >
                {company.active_issuances}
              </Link>
            </div>
            <div className="flex w-1/3 gap-0">
              <div className="w-full text-xs text-gray-500">Rating</div>
              <div className="w-full text-xs text-primary">BBB-</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
