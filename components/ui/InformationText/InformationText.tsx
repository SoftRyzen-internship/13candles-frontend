import React from 'react';
import Markdown from 'react-markdown';

import { CustomTagProps, InformationTextProps, TextType } from './types';

export const CustomH3 = ({ children }: CustomTagProps) => (
  <h3 className="title-lg mb-4 border-b border-gray pb-4 xl:mb-6 xl:pb-6">
    {children}
  </h3>
);

export const CustomH4 = ({ children }: CustomTagProps) => (
  <h4 className="title-md mb-4 uppercase">{children}</h4>
);

export const CustomH5 = ({ children }: CustomTagProps) => (
  <h5 className="title-sm mb-3">{children}</h5>
);

export const CustomP = ({ children }: CustomTagProps) => (
  <p className="mb-6">{children}</p>
);

export const CustomLi = ({ children }: CustomTagProps) => (
  <li className="mb-6">
    <span>- </span>
    {children}
  </li>
);

export const CustomFragment = ({ children }: CustomTagProps) => <>{children}</>;

export const InformationText: React.FC<InformationTextProps> = ({
  text,
  dynamic = false,
}) => {
  // examples of the text from dictionaries, that this fuctions gets as a prop:

  // "mainTitle*_type_*Доставка і оплата"
  // "title*_type_*Способи доставки"
  // "subtitle*_type_*Доставка на відділення Нової Пошти"
  // "text*_type_*1.1. Коли документи залишаються незмінними."

  // each string consists of three parts:
  // 1) textType ('mainTitle' | 'title' | 'subtitle' | 'text')
  // 2) devider (*_type_*)
  // 3) content

  // the fuction below devides such strings using "*_type_*" divider

  const [textType, content] = text.split('*_type_*') as [TextType, string];

  return dynamic ? (
    <Markdown
      components={{
        h2: CustomH3,
        h3: CustomH4,
        h4: CustomH5,
        strong: CustomFragment,
        p: CustomP,
        li: CustomLi,
      }}
    >
      {text}
    </Markdown>
  ) : (
    <>
      {textType === 'mainTitle' && (
        <h3 className="title-lg mb-4 border-b border-gray pb-4 xl:mb-6 xl:pb-6">
          {content}
        </h3>
      )}
      {textType === 'title' && (
        <h4 className="title-md mb-4 uppercase">{content}</h4>
      )}
      {textType === 'subtitle' && <h5 className="title-sm mb-3">{content}</h5>}
      {textType === 'text' && <p className="mb-6">{content}</p>}
    </>
  );
};
