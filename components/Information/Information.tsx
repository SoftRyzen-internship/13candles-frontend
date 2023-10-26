'use client';

import { InformationProps } from './type';
import { InformationBtn } from '../ui/InformationBtn';

export const Information: React.FC<InformationProps> = ({
  info_text,
  info,
}) => {
  return (
    <>
      <h2 className="mb-3 text-center font-bold md:text-start">{info_text}</h2>
      <ul className="flex flex-col gap-2 text-center md:gap-3 md:text-start">
        {info.map(({ text, data }) => (
          <li key={text}>
            <InformationBtn data={data}>{text}</InformationBtn>
          </li>
        ))}
      </ul>
    </>
  );
};
