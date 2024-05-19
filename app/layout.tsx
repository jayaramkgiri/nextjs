import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/overview/sidenav';
import Cards from '@/app/ui/overview/cards';
import { headers } from 'next/headers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = headers();
  const pathname = header.get('next-url');
  console.log(pathname);
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen w-full flex-col md:flex-row md:overflow-hidden ">
          <div className="w-full flex-none md:w-1/6">
            <SideNav />
          </div>
          <div className="relative hidden h-screen w-0.5 bg-whitesmoke-100 md:block" />
          <div className="relative hidden h-screen w-0.5 bg-whitesmoke-200 md:block" />
          <div className="flex h-auto w-full shrink-0 flex-row items-center justify-start overflow-hidden md:hidden">
            <Cards rupee="/rupee-40.svg" totalBid="Total Bids" />
            <Cards
              rupee="/rupee-41.svg"
              totalBid="Total Asks"
              propColor="#eb5757"
            />
          </div>
          <div className="h-[92%] grow md:ml-10 md:overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
