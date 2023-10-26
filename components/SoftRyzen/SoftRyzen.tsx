import React from 'react';

import { SoftRyzenProps } from './types';
import { ExternalLink } from '../ui/ExternalLink';

export const SoftRyzen: React.FC<SoftRyzenProps> = ({ made, name, href }) => (
  <div className="my-4 flex flex-row items-baseline justify-around text-center md:text-end">
    <span>{made}</span>
    <ExternalLink
      text={name}
      href={href}
      className="text-[12px] text-sm font-medium leading-4"
    />
  </div>
);
