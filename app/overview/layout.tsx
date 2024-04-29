import SideNav from '@/app/ui/overview/sidenav';
import Cards from '@/app/ui/overview/cards';
import UnoBondsLogo from "@/app/ui/unbonds-logo";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative rounded-2xl bg-white h-[1024px] overflow-hidden flex flex-row items-start justify-start">
      <div className="self-stretch w-[276px] bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 px-4 box-border gap-[16px]">
      <UnoBondsLogo
          logoImageLogo="/logo@2x.png"
          logoIconHeight="80px"
          logoIconPosition="relative"
        />
        <SideNav />
      </div>
      <div className="self-stretch w-0.5 relative bg-whitesmoke-100" />
      <div className="self-stretch w-0.5 relative bg-whitesmoke-200" />
      <main>{children}</main>
      {/* <div className="flex-1 bg-white overflow-hidden flex flex-col items-center justify-start pt-16 pb-[380px] pr-8 pl-4 box-border gap-[32px] min-w-[182px] min-h-[1024px] mq450:gap-[16px] mq450:pt-[27px] mq450:pb-[161px] mq450:box-border mq1125:pt-[42px] mq1125:pb-[247px] mq1125:box-border">
        <Cards rupee="/rupee-40.svg" totalBid="Total Bid" />
        <Cards rupee="/rupee-41.svg" totalBid="Total Ask" propColor="#eb5757" />
      </div> */}
    </div>
  );
}