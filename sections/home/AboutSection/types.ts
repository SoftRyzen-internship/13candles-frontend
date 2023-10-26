export interface AboutProps {
  about: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
    content: string[];
    button: string;
  };
}
