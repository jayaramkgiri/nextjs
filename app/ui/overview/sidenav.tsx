// import Link from 'next/link';
// import NavLinks from '@/app/ui/overview/nav-links';
// import AcmeLogo from '@/app/ui/acme-logo';
// import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    // <div className="flex h-full flex-col px-3 py-4 md:px-2">
    //   <Link
    //     className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
    //     href="/"
    //   >
    //     <div className="w-32 text-white md:w-40">
    //       <AcmeLogo />
    //     </div>
    //   </Link>
    //   <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
    //     <NavLinks />
    //     <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
    //     <form>
    //       <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
    //         <PowerIcon className="w-6" />
    //         <div className="hidden md:block">Sign Out</div>
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-8 px-0 gap-[16px] text-left text-xl text-silver font-title-lg">
      <div className="self-stretch rounded bg-chocolate h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[8px] text-indianred">
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/spacedashboardfilled@2x.png"
        />
        <div className="self-stretch flex-1 relative leading-[155%] font-semibold flex items-center">
          Overview
        </div>
      </div>
      <div className="self-stretch h-12 flex flex-row items-center justify-start gap-[8px]">
        <div className="w-8 h-8 overflow-hidden shrink-0 flex flex-row items-end justify-start p-1.5 box-border">
          <img
            className="self-stretch w-[17.1px] relative max-h-full object-cover"
            alt=""
            src="/group-70@2x.png"
          />
        </div>
        <div className="self-stretch w-[154.9px] relative leading-[155%] font-semibold flex items-center shrink-0">
          Market
        </div>
      </div>
      <div className="self-stretch h-12 flex flex-row items-start justify-start gap-[8px]">
        <div className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-start">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/searchfilled@2x.png"
          />
        </div>
        <div className="self-stretch w-[73px] relative leading-[155%] font-semibold flex items-center shrink-0">
          Explore
        </div>
      </div>
    </div>
  );
}
