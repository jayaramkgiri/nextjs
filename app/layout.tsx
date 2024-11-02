import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts.cjs';
import SideNav from '@/app/ui/common/sidenav';
import { UserDropdown } from './ui/common/userDropdown';
import { headers } from 'next/headers';
import { fetchMarketSummary } from '@/app/models/issuance';
import { UserProvider } from '@auth0/nextjs-auth0/client';

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
      <UserProvider>
        <body className={`${inter.className} antialiased`}>
          <div className="flex h-auto w-full flex-col md:absolute md:flex-row">
            <div className="h-auto w-full flex-none overflow-hidden md:sticky md:left-0 md:top-0 md:h-screen md:w-1/6">
              <SideNav />
            </div>
            <div className=" sticky left-0 top-0 hidden h-screen w-0.5 overflow-hidden bg-whitesmoke-100 md:block" />
            <div className=" sticky left-0 top-0 hidden h-screen w-0.5 overflow-hidden bg-whitesmoke-200 md:block" />
            <div className="flex h-auto w-full flex-col gap-2 md:w-[90%] md:overflow-auto ">
              <div className="absolute right-2 top-7 md:right-0 md:top-0">
                <UserDropdown />
              </div>
              <div className="md:ml-10">{children}</div>
              <footer className="mt-4">
                <div className="m-0 flex w-full max-w-screen-xl flex-row items-center justify-center pb-2 text-xs  text-gray-700">
                  © 2024{' FirstDigit LLP'}. All Rights Reserved.
                </div>
              </footer>
            </div>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
