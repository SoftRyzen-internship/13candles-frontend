export interface HeroProps {
  image: { alt: string; src: string };
  overtitle: string;
  title: string;
  services: { id: string; text: string }[];
  button: string;
}
