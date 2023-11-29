import { CustomTagProps } from './types';

export const CustomH3: React.FC<CustomTagProps> = ({ children }) => (
  <h3 className="title-lg mb-4 border-b border-gray pb-4 xl:mb-6 xl:pb-6">
    {children}
  </h3>
);

export const CustomH4: React.FC<CustomTagProps> = ({ children }) => (
  <h4 className="title-md mb-4">{children}</h4>
);

export const CustomH5: React.FC<CustomTagProps> = ({ children }) => (
  <h5 className="title-sm mb-3">{children}</h5>
);

export const CustomP: React.FC<CustomTagProps> = ({ children }) => (
  <p className="mb-6">{children}</p>
);

export const CustomLi: React.FC<CustomTagProps> = ({ children }) => (
  <li className="mb-6">
    <span>- </span>
    {children}
  </li>
);
