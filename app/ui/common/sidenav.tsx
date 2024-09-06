import NavLinks from '@/app/ui/common/nav-links';
import UnoBondsLogo from '@/app/ui/unobonds-logo';
// import LoginSignup from './loginSignup';
import Link from 'next/link';
import { getSession } from '@auth0/nextjs-auth0';

export default async function SideNav() {
  const user = await getSession();
  return (
    <div className="flex w-full flex-col py-4 md:h-screen">
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
      <div className="flex h-auto flex-col md:h-full ">
        <div className="mx-auto flex w-4/5 grow flex-row justify-between space-x-2 md:w-11/12 md:flex-col md:space-x-0 md:space-y-3">
          <NavLinks />
          <div className="hidden h-auto w-full grow md:block"></div>
        </div>
        <div className="mx-auto mb-11  hidden gap-2 md:flex md:w-11/12 md:flex-col  md:space-x-0 md:space-y-3">
          {user ? (
            <Link
              className=" rounded-full border-2 border-solid border-chocolate bg-white px-5 py-2.5 text-lg font-medium text-indianred no-underline hover:bg-indianred hover:text-white focus:bg-indianred focus:text-white"
              href="/api/auth/logout"
            >
              <p className="mx-auto my-0 w-fit p-0">Logout</p>
            </Link>
          ) : (
            <Link
              className=" rounded-full border-2 border-solid border-chocolate bg-white px-5 py-2.5 text-lg font-medium text-indianred no-underline hover:bg-indianred hover:text-white focus:bg-indianred focus:text-white"
              href="/api/auth/login"
            >
              <p className="mx-auto my-0 w-fit p-0">Login</p>
            </Link>
          )}
          {/* <LoginSignup className="" /> */}
        </div>
      </div>
    </div>
  );
}
