'use client';

import { ButtonOpenModal } from '@/components/ui/ButtonOpenModal';
import { InfoProps } from './type';

const Element = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

const data = {
  text: 'hello',
};

export const Information: React.FC<InfoProps> = ({ info_text, info }) => {
  return (
    <>
      <h2 className="mb-3 text-center font-bold md:text-start">{info_text}</h2>
      <ul className="flex flex-col gap-2 text-center md:gap-3 md:text-start">
        {info.map((text, ind) => (
          <li key={ind}>
            <ButtonOpenModal data={data} element={Element}>
              {text}
            </ButtonOpenModal>
          </li>
        ))}
      </ul>
    </>
  );
};
