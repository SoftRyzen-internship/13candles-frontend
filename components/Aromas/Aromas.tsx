'use client';

import { useEffect, useState } from 'react';

import { AromaDropDown } from '../ui/AromaDropDown';
import { Stars } from '../ui/Stars';

import { IProps } from './types';

export const Aromas: React.FC<IProps> = ({
  aromas,
  prodDescription,
  setAromaName,
  className = '',
}) => {
  const [shownItem, setShownItem] = useState(0);

  useEffect(() => {
    if (!aromas) return;

    const aroma = aromas[shownItem].attributes.Title;

    setAromaName(aroma);
  }, [shownItem, aromas, setAromaName]);

  if (!aromas) return;

  const { aroma, notes, sweetness, astringency, freshness } = prodDescription;
  const { Notes, Sweetness, Astringency, Freshness } =
    aromas[shownItem].attributes;

  const getStars = (str: string) => parseInt(str.replace('Points_', ''));

  return (
    <div className={className}>
      <div className="mb-[12px] flex items-center">
        <p className="text-light text-base font-semibold xl:text-lg">{aroma}</p>

        <AromaDropDown
          aromas={aromas}
          setShownItem={setShownItem}
          shownItem={shownItem}
          className="ml-[25px]"
        />
      </div>

      <p className="text-light mb-[12px] text-base xl:text-lg">
        <span className="font-semibold">{notes}: </span>

        {Notes}
      </p>

      <Stars
        count={3}
        active={getStars(Sweetness)}
        caption={sweetness}
        className="mb-[4px]"
      />

      <Stars
        count={3}
        active={getStars(Astringency)}
        caption={astringency}
        className="mb-[4px]"
      />

      <Stars count={3} active={getStars(Freshness)} caption={freshness} />
    </div>
  );
};
