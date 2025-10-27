import React from 'react';
export const Leaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C7 2 3 6 3 11c0 5 4 11 9 11s9-6 9-11C21 6 17 2 12 2zm0 2c3.86 0 7 3.14 7 7 0 3.28-2.31 7.72-5.63 8.77.44-1.1.63-2.26.63-3.27 0-4.42-3.58-8-8-8-1.01 0-2.17.19-3.27.63C4.28 6.31 8.72 4 12 4z" />
  </svg>
);
export const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z" />
  </svg>
);
