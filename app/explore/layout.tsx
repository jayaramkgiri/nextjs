'use client';
import TopNav from '@/app/ui/explore/top-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
}
