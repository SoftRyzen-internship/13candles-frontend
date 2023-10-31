import { UsefulWhomProps } from './types';

export const UsefulWhomSection: React.FC<UsefulWhomProps> = ({
  title,
  options,
  info,
}) => {
  return (
    <section className="py-[16px] text-center text-base md:py-[18px] xl:py-[50px]">
      <div className="container">
        <h2 className="section-title-secondary">{title}</h2>

        <ul className="mt-[16px] flex flex-wrap justify-center gap-[16px] font-semibold md:text-lg xl:mt-[40px] xl:gap-[24px] xl:text-xl">
          {options &&
            options.map(option => (
              <li
                key={option.id}
                className="biz-item relative pl-[12px] xl:pl-[20px]"
              >
                {option.text}
              </li>
            ))}
        </ul>

        <p className="mt-[16px] xl:mt-[24px] xl:text-lg">{info}</p>
      </div>
    </section>
  );
};
