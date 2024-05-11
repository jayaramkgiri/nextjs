import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import UnoBondsLogo from '@/app/ui/unobonds-logo';
import SideNav from '@/app/ui/overview/sidenav';
import Cards from "@/app/ui/overview/cards";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen w-full flex-col md:flex-row md:overflow-hidden ">
          <div className="w-full flex-none md:w-1/6">
            <SideNav />
          </div>
          <div className="hidden md:block h-screen w-0.5 relative bg-whitesmoke-100" />
          <div className="hidden md:block h-screen w-0.5 relative bg-whitesmoke-200" />
          <div className="md:hidden h-auto w-full overflow-hidden shrink-0 flex flex-row items-center justify-start">
            <Cards rupee="/rupee-40.svg" totalBid="Total Bids" />
            <Cards rupee="/rupee-41.svg" totalBid="Total Asks" propColor="#eb5757" />
          </div>
          <div className="grow md:overflow-auto md:ml-10 h-[92%]">{children}</div>
          <div className="h-screen w-0.5 relative bg-whitesmoke-100" />
          <div className="h-screen w-0.5 relative bg-whitesmoke-200" />
          <div className="hidden md:block h-screen md:w-1/5 overflow-hidden shrink-0 flex flex-col items-start justify-start mx-auto box-border space-y-4">
            <Cards totalBid="Total Bids" />
            <Cards totalBid="Total Asks" propColor="#eb5757" />
          </div>
        </div>
      </body>
    </html>
  );
}