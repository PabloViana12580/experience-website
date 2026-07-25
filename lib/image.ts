const shimmerSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop stop-color="#f4e5c7" offset="0" />
      <stop stop-color="#e4b466" offset="0.48" />
      <stop stop-color="#17213b" offset="1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#g)" />
</svg>`;

export const editorialBlurDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(shimmerSvg)}`;
