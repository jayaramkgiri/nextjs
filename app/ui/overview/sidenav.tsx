import Link from 'next/link';
import NavLinks from '@/app/ui/overview/nav-links';
import UnoBondsLogo from '@/app/ui/unobonds-logo';

export default function SideNav() {
  return (
    <div className="flex h-full w-full  flex-col py-4">
      {/* <div className="w-full h-[982px] relative rounded-2xl bg-neutral-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq825:h-auto"> */}

      {/* <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      > */}
      {/* <div className="h-[982px] w-[276px] bg-neutral-white overflow-y-auto shrink-0 flex flex-col items-start justify-start py-8 px-6 box-border gap-[16px] mq450:pt-5 mq450:pb-5 mq450:box-border mq825:pt-[21px] mq825:pb-[21px] mq825:box-border"> */}
      <div className="mx-auto text-white md:w-[90%]">
        <UnoBondsLogo
          logoImageLogo="/logo@2x.png"
          logoIconHeight="80px"
          logoIconPosition="relative"
        />
      </div>
      {/* </Link> */}
      <div className="mx-auto flex w-4/5 grow flex-row justify-between space-x-2 md:w-11/12 md:flex-col md:space-x-0 md:space-y-3">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block"></div>
      </div>
    </div>
  );
}
