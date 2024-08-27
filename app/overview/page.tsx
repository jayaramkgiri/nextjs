import YieldCard from '@/app/ui/market/yieldCard';

export default async function Page() {
  return (
    <div className="h:auto md:pr-6">
      <section className="m-2  flex w-[90%] flex-col gap-2">
        <YieldCard rating={'AAA'} />
        <YieldCard rating={'AA'} />
        <YieldCard rating={'A'} />
        <YieldCard rating={'BBB'} />
      </section>
    </div>
  );
}
