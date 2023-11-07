export interface AromasDataType {
  aromas: {
    data: AromasData;
  };
}

export type AromasData = AromasDataInfo[] | undefined;

export type AROMA_POINTS = 'Points_1' | 'Points_2' | 'Points_3';

export type AromaInfo = {
  Title: string;
  Notes: string;
  Sweetness: AROMA_POINTS;
  Astringency: AROMA_POINTS;
  Freshness: AROMA_POINTS;
};

export type AromasDataInfo = {
  id: number;
  attributes: AromaInfo;
};
