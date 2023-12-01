'use client';

import { InformationBtn } from '../ui/InformationBtn';
import { InformationProps } from './type';

export const Information: React.FC<InformationProps> = ({
  information: { title, buttons, className = '' },
  dynamicInfo,
}) => {
  return (
    <div className={className}>
      <h2 className="mb-3 text-center font-bold md:text-start">{title}</h2>
      <ul className="flex flex-col gap-2 text-center font-medium md:gap-3 md:text-start">
        {buttons.map(({ text, data, id }) => {
          const dynamicData = dynamicInfo[id as keyof typeof dynamicInfo];

          return (
            <li key={text}>
              <InformationBtn
                className="link"
                data={data}
                dynamicData={dynamicData}
              >
                {text}
              </InformationBtn>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
