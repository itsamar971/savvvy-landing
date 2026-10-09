export const breakpoints = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1024px)",
  desktop: "(min-width: 1025px)",
  tabletUp: "(min-width: 768px)",
  mobileOnly: "(max-width: 767px)",
} as const;

export function isMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export function isTablet(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 768 && window.innerWidth <= 1024;
}

export function isDesktop(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 1025;
}
