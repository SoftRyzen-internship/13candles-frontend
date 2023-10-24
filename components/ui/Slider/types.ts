export interface SliderProps {
  data: {}[];
  element: React.FC<any>;
  isLoop?: boolean;
  isAutoplay?: boolean;
  isPagination?: boolean;
  isInteractive?: boolean;
  isNavigation?: boolean;
  navigationBreakpoints?: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
}
