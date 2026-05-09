/* Pixel-art envelope icon for the Contact section.
   10 px grid · 12 cols × 9 rows · 120 × 90 viewBox
   Blue + gold palette */
export default function PixelEnvelope() {
  return (
    <svg
      width="192"
      height="144"
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
      style={{ shapeRendering: 'crispEdges' }}
    >
      {/* — envelope body outline — */}
      <rect x="0"   y="10" width="120" height="70" fill="#0C3640" />

      {/* — envelope face (lighter inner) — */}
      <rect x="10"  y="20" width="100" height="50" fill="#14596B" />

      {/* — flap left diagonal — */}
      <rect x="0"   y="10" width="10"  height="10" fill="#0C3640" />
      <rect x="10"  y="20" width="10"  height="10" fill="#0C3640" />
      <rect x="20"  y="30" width="10"  height="10" fill="#0C3640" />
      <rect x="30"  y="40" width="10"  height="10" fill="#0C3640" />
      <rect x="40"  y="50" width="10"  height="10" fill="#0C3640" />

      {/* — flap right diagonal — */}
      <rect x="110" y="10" width="10"  height="10" fill="#0C3640" />
      <rect x="100" y="20" width="10"  height="10" fill="#0C3640" />
      <rect x="90"  y="30" width="10"  height="10" fill="#0C3640" />
      <rect x="80"  y="40" width="10"  height="10" fill="#0C3640" />
      <rect x="70"  y="50" width="10"  height="10" fill="#0C3640" />

      {/* — flap center meeting point — */}
      <rect x="50"  y="60" width="20"  height="10" fill="#0C3640" />

      {/* — seal / stamp accent — */}
      <rect x="50"  y="55" width="20"  height="10" fill="#D2B863" />
      <rect x="55"  y="50" width="10"  height="10" fill="#D2B863" />
      <rect x="50"  y="45" width="20"  height="10" fill="#D2B863" />

      {/* — seal inner — */}
      <rect x="55"  y="50" width="10"  height="10" fill="#FFFBA4" />

      {/* — top edge — */}
      <rect x="0"   y="10" width="120" height="5"  fill="#33B6D8" />

      {/* — bottom edge — */}
      <rect x="0"   y="75" width="120" height="5"  fill="#33B6D8" />

      {/* — left edge — */}
      <rect x="0"   y="10" width="5"   height="70" fill="#33B6D8" />

      {/* — right edge — */}
      <rect x="115" y="10" width="5"   height="70" fill="#33B6D8" />

      {/* — corner dots for pixel-art feel — */}
      <rect x="0"   y="0"  width="10"  height="10" fill="#33B6D8" />
      <rect x="110" y="0"  width="10"  height="10" fill="#33B6D8" />
      <rect x="0"   y="80" width="10"  height="10" fill="#33B6D8" />
      <rect x="110" y="80" width="10"  height="10" fill="#33B6D8" />
    </svg>
  )
}
