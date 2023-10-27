'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BusinessPage() {
  const path = usePathname();

  return (
    <>
      <h1>This is a business page</h1>
      <Link href={`${path}/5`}>ToCard</Link>
    </>
  );
}
