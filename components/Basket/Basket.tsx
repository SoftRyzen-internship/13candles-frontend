import { BasketProps } from './types';

export const Basket: React.FC<BasketProps> = ({ basket }) => {
  return (
    <div>
      <h3 className="title-lg mb-4 border-b border-gray pb-4 xl:mb-6 xl:pb-6">
        {basket}
      </h3>
    </div>
  );
};
