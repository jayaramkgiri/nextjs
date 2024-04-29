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
    <div className="self-stretch h-[864px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 px-0 box-border gap-[16px] text-left text-xl text-silver font-h3">
      <button className="cursor-pointer [border:none] p-0 bg-chocolate self-stretch rounded overflow-hidden flex flex-row items-center justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-start py-3 px-2">
          <img className="h-6 w-6 relative" alt="" src="/vector.svg" />
        </div>
        <div className="h-12 flex-1 relative text-xl leading-[155%] font-semibold font-h3 text-indianred text-left flex items-center mq450:text-base mq450:leading-[25px]">
          Overview
        </div>
      </button>
      <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-start py-3 px-2">
          <img className="h-6 w-6 relative" alt="" src="/vector1.svg" />
        </div>
        <div className="h-12 flex-1 relative leading-[155%] font-semibold flex items-center mq450:text-base mq450:leading-[25px]">
          Market
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[107px] pl-0 gap-[8px]">
        <div className="overflow-hidden flex flex-row items-center justify-start py-3 px-2">
          <img className="h-6 w-6 relative" alt="" src="/vector2.svg" />
        </div>
        <div className="h-12 relative leading-[155%] font-semibold flex items-center min-w-[73px]">
          Explore
        </div>
      </div>
    </div>
  );
}
