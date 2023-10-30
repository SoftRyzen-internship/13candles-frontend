import { SoftRyzenProps } from '@/components/SoftRyzen/types';
import { ExternalLink } from '@/components/ui/ExternalLink';

export const SoftRyzen: React.FC<SoftRyzenProps> = ({
  softRyzen: { made, name, href },
}) => (
  <p
    className="mt-6 flex flex-row items-baseline justify-center gap-1 
    text-center text-[12px] font-medium leading-4 
    md:mt-[35px] md:justify-start md:text-end md:text-sm"
  >
    <span>{made}</span>
    <ExternalLink text={name} href={href} />
  </p>
);
