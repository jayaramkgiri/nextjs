'use client';

import { IoCaretBackSharp } from 'react-icons/io5';

import { useRouter } from 'next/navigation';

export default function BackPage({ className }: { className: string }) {
  const router = useRouter();
  return (
    <div
      className={`${className} flex text-lg text-indianred hover:cursor-pointer`}
      onClick={() => router.back()}
    >
      <IoCaretBackSharp className="pt-[2px]" />
      Back
    </div>
  );
}
