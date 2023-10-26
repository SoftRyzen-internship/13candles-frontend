export const defineCurrentPage = (pathname: string) => {
  if (pathname.includes('/business')) {
    return 'Business';
  }
  if (pathname.includes('/categories')) {
    return 'Categories';
  }
  return 'Home';
};
