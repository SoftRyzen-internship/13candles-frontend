'use client';

import { InformationBtn } from '../ui/InformationBtn';
import { InformationProps } from './type';

export const Information: React.FC<InformationProps> = ({
  information: { title, buttons, className = '' },
}) => (
  <div className={className}>
    <h2 className="mb-3 text-center font-bold md:text-start">{title}</h2>
    <ul className="flex flex-col gap-2 text-center md:gap-3 md:text-start">
      {buttons.map(({ text, data }) => (
        <li key={text}>
          <InformationBtn className="link" data={data}>
            {text}
          </InformationBtn>
        </li>
      ))}
    </ul>
  </div>
);
