'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BusinessPage() {
  const path = usePathname();

  return (
    <div className="container smOnly:pt-[108px]">
      <h1>This is a business page</h1>
      <Link href={`${path}/5`}>ToCard</Link>
    </div>
  );
}
