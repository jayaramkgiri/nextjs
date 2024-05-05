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
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="h-[1024px] w-0.5 relative bg-whitesmoke-100 mq975:hidden" />
      <div className="h-[1024px] w-0.5 relative bg-whitesmoke-200 mq975:hidden" />
          <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
