export type SocialItem = {
  href: string;
  icon: string;
  text: string;
  altText: string;
};

export type SocialsProps = {
  socials: SocialItem[];
  title: string;
};
