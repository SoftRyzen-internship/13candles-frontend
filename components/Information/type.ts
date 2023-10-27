export interface InformationProps {
  information: {
    title: string;
    buttons: { text: string; data: string[] }[];
    className?: string;
  };
}
