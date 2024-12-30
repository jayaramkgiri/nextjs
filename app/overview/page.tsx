import YieldCard from '@/app/ui/market/yieldCard';
import {fetchYields} from '@/app/models/yield.mjs';

export default async function Page() {
  const yields:Array<any> = await fetchYields();
  return (
    <div className="h:auto md:pr-6">
      <h2 className="text-md m-2 text-text-primary md:hidden">
        Yield Overview
      </h2>
      <section className="m-2  flex w-[90%] flex-col gap-2">
        <YieldCard rating={'AAA'} yields={yields}/>
        <YieldCard rating={'AA'} yields={yields}/>
        <YieldCard rating={'A'} yields={yields}/>
        <YieldCard rating={'BBB'} yields={yields}/>
      </section>
    </div>
  );
}
