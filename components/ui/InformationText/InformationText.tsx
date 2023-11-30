import React from 'react';
import Markdown from 'react-markdown';

import {
  CustomFragment,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomLi,
  CustomP,
} from './customTags';

import { InformationTextProps } from './types';

export const InformationText: React.FC<InformationTextProps> = ({ text }) => {
  return (
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
  );
};
