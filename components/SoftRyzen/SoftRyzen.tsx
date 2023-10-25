import React from 'react';
import Link from 'next/link';
import { SoftRyzenProps } from './types';

export const SoftRyzen: React.FC<SoftRyzenProps> = ({ name, href }) => (
  <div className="my-4 text-end">
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link text-[12px] text-sm font-medium leading-4"
    >
      {name}
    </Link>
  </div>
);
