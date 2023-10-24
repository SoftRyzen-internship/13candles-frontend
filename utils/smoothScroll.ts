export const smoothScroll = (
  e: React.MouseEvent<HTMLElement>,
  href?: string,
) => {
  e.preventDefault();

  if (href) {
    const targetElement = document.getElementById(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
