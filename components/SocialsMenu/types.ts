export type SocialItem = {
  href: string;
  icon: string;
  text: string;
};

export type SocialsProps = {
  socials: SocialItem[];
  title: string;
  variant?: 'contacts' | undefined;
  className?: string;
};
