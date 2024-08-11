import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/overview/sidenav';
import Cards from '@/app/ui/overview/cards';
import { headers } from 'next/headers';
import { fetchMarketSummary } from '@/app/models/issuance';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = headers();
  const pathname = header.get('next-url');
  console.log(pathname);
  const marketSummary = await fetchMarketSummary();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="absolute flex h-auto w-full flex-row">
          <div className="sticky left-0 top-0 h-screen w-full flex-none overflow-hidden md:w-1/6">
            <SideNav />
          </div>
          <div className=" sticky left-0 top-0 hidden h-screen w-0.5 overflow-hidden bg-whitesmoke-100 md:block" />
          <div className=" sticky left-0 top-0 hidden h-screen w-0.5 overflow-hidden bg-whitesmoke-200 md:block" />
          <div className="flex h-auto w-full shrink-0 flex-row items-center justify-start overflow-hidden md:hidden">
            <Cards cardType="bid" marketSummary={marketSummary} />
            <Cards cardType="ask" marketSummary={marketSummary} />
          </div>
          <div className="flex h-auto w-[90%] flex-col gap-2 overflow-auto ">
            <div className="grow md:ml-10">{children}</div>
            <footer className="mt-4">
              <div className="m-0 w-full max-w-screen-xl flex-row p-4 text-xs text-gray-700 sm:text-center md:flex md:items-center md:justify-center dark:text-gray-400">
                © 2024{' FirstDigit LLP'}. All Rights Reserved.
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
