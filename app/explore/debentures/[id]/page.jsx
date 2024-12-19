import Cashflows from '@/app/ui/explore/issuances/cashflows';
import MarketDepth from '@/app/ui/explore/issuances/marketDepth';
import IssueDetails from '@/app/ui/explore/issuances/issueDetails';
import IssueDownloads from '@/app/ui/explore/issuances/issueDownloads';
import IssueDetailsMobile from '@/app/ui/explore/issuances/issueDetailsMobile';
import IssueDownloadsMobile from '@/app/ui/explore/issuances/issueDownloadsMobile';
import MarketDepthMobile from '@/app/ui/explore/issuances/marketDepthMobile';
import CashflowsMobile from '@/app/ui/explore/issuances/cashflowsMobile';
import BackPage from '@/app/ui/explore/issuances/backPage';
import { notFound } from 'next/navigation';
import {fetchIssuanceById, AGENCY_MAP} from '@/app/models/issuance.mjs';
import {fetchMarketdepth} from '@/app/models/market.mjs';

export default async function Page({ params }) {
  const id = params.id;
  const issuance = await fetchIssuanceById(id);
  const depth = await fetchMarketdepth(issuance.isin);

  if (!issuance) {
    notFound();
  }
  return (
    <>
      <BackPage className="mb-2 ml-4 mt-4 md:mb-0 md:ml-0" />
      <section className="flex h-full w-full flex-col gap-3 md:hidden">
        <div className="mx-5 text-xs ">
          <div className="m-0 flex w-full">
            <div className="m-0 flex w-1/2 self-stretch px-0 py-1">
              <h1 className="text-sm m-0 font-semibold text-neutral-600">
                {issuance.isin}
              </h1>
            </div>
            <div className="m-0 flex w-1/2 self-stretch px-0 py-1">
              <p className="m-0 text-2xs font-semibold text-blue-600">
                {issuance.company_name}
              </p>
            </div>
          </div>
          <div className="m-0 flex w-full">
            <div className="flex w-1/2 flex-col">
              <p className="m-0 py-1 text-2xs font-normal text-neutral-500">
                BSE Scrip: {issuance.bse_scrip}
              </p>
              <p className="m-0 text-2xs font-normal text-neutral-500">
                NSE Scrip: {issuance.nse_scrip}
              </p>
            </div>
            <div className="m-0 flex w-1/2 self-stretch px-0">
            {issuance.latest_rating && (
              <p className="text-md font-semibold text-neutral-600">
                {`${AGENCY_MAP[issuance.latest_rating_agency]} ${issuance.latest_rating}`}
              </p>)
            }
            </div>
          </div>
        </div>
        <IssueDetailsMobile issuance={issuance}/>
        <IssueDownloadsMobile />
        <MarketDepthMobile isin={issuance.isin} />
        {/* <CashflowsMobile /> */}
      </section>
      <div className="m-0 hidden h-[88%] w-[95%] flex-col gap-x-3 gap-y-6 overflow-auto px-2 pb-2 md:flex">
        <div className="mt-3 w-full">
          <div className="m-0 mb-3 flex w-full">
            <div className="m-0 flex w-1/4 self-stretch px-0 py-2">
              <h1 className="m-0 text-xl font-semibold text-neutral-600">
                {issuance.isin}
              </h1>
            </div>
            <div className="m-0 flex w-1/2 self-stretch px-0 py-2">
              <p className="text-md m-0 font-semibold text-blue-600">
                {issuance.company_name}
              </p>
            </div>
          </div>
          <div className="m-0 flex w-full">
            <div className="flex w-1/4 flex-col">
              <p className="m-0 py-1 text-xs font-normal text-neutral-500">
                BSE Scrip: {issuance.bse_scrip}
              </p>
              <p className="m-0 text-xs font-normal text-neutral-500">
                NSE Scrip: {issuance.nse_scrip}
              </p>
            </div>
            <div className="m-0 flex w-1/4 self-stretch px-0">
            {issuance.latest_rating && (
              <p className="text-md font-semibold text-neutral-600">
                {`${AGENCY_MAP[issuance.latest_rating_agency]} ${issuance.latest_rating}`}
              </p>)
            }
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row gap-6">
          <IssueDetails issuance={issuance} />
          <IssueDownloads />
        </div>
        <div className="flex flex-row gap-6">
          {/* <div className="h-[100vh-104px] w-2/5">
            <Cashflows />
          </div> */}
          {depth && (
            <div className="h-[100vh-104px] w-3/5">
              <MarketDepth depth={depth}/>
            </div>)
          }
        </div>
      </div>
    </>
  );
}
