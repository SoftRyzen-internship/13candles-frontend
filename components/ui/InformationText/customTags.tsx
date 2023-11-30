import { CustomTagProps } from './types';

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
