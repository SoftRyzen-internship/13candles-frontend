import React from 'react';

import { SoftRyzenProps } from '@/components/SoftRyzen/types';
import { ExternalLink } from '@/components/ui/ExternalLink';

export const SoftRyzen: React.FC<SoftRyzenProps> = ({ made, name, href }) => (
  <p className="mt-6 flex flex-row items-baseline justify-center gap-1 text-center md:mt-[35px] md:justify-start md:text-end">
    <span className="text-[12px] text-sm font-medium leading-4">{made}</span>
    <ExternalLink
      text={name}
      href={href}
      className="text-[12px] text-sm font-medium leading-4"
    />
  </p>
);
