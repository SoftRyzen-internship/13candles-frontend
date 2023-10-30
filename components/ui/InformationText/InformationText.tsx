import { InformationTextProps, TextType } from './types';

export const InformationText: React.FC<InformationTextProps> = ({ text }) => {
  const [textType, content] = text.split('*_type_*') as [TextType, string];

  return (
    <>
      {textType === 'mainTitle' && (
        <h3 className="title-lg mb-4 border-b border-gray pb-4 xl:mb-6 xl:pb-6">
          {content}
        </h3>
      )}
      {textType === 'title' && <h4 className="title-md mb-4">{content}</h4>}
      {textType === 'subtitle' && <h5 className="title-sm mb-3">{content}</h5>}
      {textType === 'text' && <p className="mb-6">{content}</p>}
    </>
  );
};
