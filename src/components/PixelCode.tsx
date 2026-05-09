/* Pixel-art terminal icon for the Projects section.
   Strict 10 px grid · 14 cols × 13 rows · 140 × 130 viewBox
   Red palette. */
export default function PixelCode() {
  return (
    <svg
      width="210"
      height="195"
      viewBox="0 0 140 130"
      fill="none"
      aria-hidden="true"
      style={{ shapeRendering: 'crispEdges' }}
    >
      {/* ── title bar ── */}
      <rect x="0"   y="0"  width="140" height="10" fill="#460A07" />

      {/* ── window dots (on grid, 10×10 each, inside the bar) ── */}
      <rect x="10"  y="0"  width="10"  height="10" fill="#EC4237" />
      <rect x="30"  y="0"  width="10"  height="10" fill="#D2B863" />
      <rect x="50"  y="0"  width="10"  height="10" fill="#33B6D8" />

      {/* ── screen background ── */}
      <rect x="0"   y="10" width="140" height="110" fill="#0F0913" />

      {/* ── code line 1: opening bracket + keyword ── */}
      <rect x="10"  y="20" width="10"  height="10" fill="#EC4237" />
      <rect x="20"  y="20" width="40"  height="10" fill="#F8BDB9" />

      {/* ── code line 2 (indented) ── */}
      <rect x="20"  y="40" width="10"  height="10" fill="#EC4237" />
      <rect x="30"  y="40" width="50"  height="10" fill="#A3180F" />

      {/* ── code line 3 (double-indented) ── */}
      <rect x="30"  y="60" width="10"  height="10" fill="#F8BDB9" />
      <rect x="40"  y="60" width="40"  height="10" fill="#EC4237" />

      {/* ── code line 4 (closing, dedented) ── */}
      <rect x="20"  y="80" width="10"  height="10" fill="#EC4237" />
      <rect x="30"  y="80" width="20"  height="10" fill="#F8BDB9" />

      {/* ── code line 5 + cursor block ── */}
      <rect x="10"  y="90" width="10"  height="10" fill="#EC4237" />
      <rect x="20"  y="90" width="10"  height="10" fill="#F8BDB9" />
      <rect x="30"  y="90" width="10"  height="10" fill="#EFEDEF" />

      {/* ── bottom bar ── */}
      <rect x="0"   y="120" width="140" height="10" fill="#460A07" />
    </svg>
  )
}
