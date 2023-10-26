import { InformationTextProps } from './types';

// mainTitle ,
// title ,
// subtitle ,
// text: ["", ""]]

export const InformationText: React.FC<InformationTextProps> = ({
  textType,
  content,
}) => {
  return <div>{textType === 'mainTitle' ? <h3>{content}</h3> : null}</div>;
};
