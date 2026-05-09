/* Pixel-art person icon for the About section.
   10 px grid · 8 cols × 13 rows · 80 × 130 viewBox
   Blue palette: #B2E3F0 (face) #33B6D8 (shirt) #14596B (outline) #0C3640 (eyes/shoes) */
export default function PixelPerson() {
  return (
    <svg
      width="160"
      height="260"
      viewBox="0 0 80 130"
      fill="none"
      aria-hidden="true"
      style={{ shapeRendering: 'crispEdges' }}
    >
      {/* — hair — */}
      <rect x="20" y="0"  width="40" height="10" fill="#14596B" />

      {/* — head row 1 — */}
      <rect x="10" y="10" width="10" height="10" fill="#14596B" />
      <rect x="20" y="10" width="40" height="10" fill="#B2E3F0" />
      <rect x="60" y="10" width="10" height="10" fill="#14596B" />

      {/* — eyes row — */}
      <rect x="10" y="20" width="10" height="10" fill="#14596B" />
      <rect x="20" y="20" width="10" height="10" fill="#0C3640" />
      <rect x="30" y="20" width="20" height="10" fill="#B2E3F0" />
      <rect x="50" y="20" width="10" height="10" fill="#0C3640" />
      <rect x="60" y="20" width="10" height="10" fill="#14596B" />

      {/* — face row — */}
      <rect x="10" y="30" width="10" height="10" fill="#14596B" />
      <rect x="20" y="30" width="40" height="10" fill="#B2E3F0" />
      <rect x="60" y="30" width="10" height="10" fill="#14596B" />

      {/* — mouth row (smile arc) — */}
      <rect x="10" y="40" width="10" height="10" fill="#14596B" />
      <rect x="20" y="40" width="10" height="10" fill="#B2E3F0" />
      <rect x="30" y="40" width="20" height="10" fill="#33B6D8" />
      <rect x="50" y="40" width="10" height="10" fill="#B2E3F0" />
      <rect x="60" y="40" width="10" height="10" fill="#14596B" />

      {/* — chin — */}
      <rect x="10" y="50" width="60" height="10" fill="#14596B" />

      {/* — neck — */}
      <rect x="30" y="60" width="20" height="10" fill="#B2E3F0" />

      {/* — collar — */}
      <rect x="20" y="70" width="10" height="10" fill="#14596B" />
      <rect x="30" y="70" width="20" height="10" fill="#33B6D8" />
      <rect x="50" y="70" width="10" height="10" fill="#14596B" />

      {/* — shoulders / shirt — */}
      <rect x="0"  y="80" width="80" height="10" fill="#33B6D8" />

      {/* — body — */}
      <rect x="0"  y="90" width="80" height="10" fill="#33B6D8" />

      {/* — lower body — */}
      <rect x="0"  y="100" width="10" height="10" fill="#33B6D8" />
      <rect x="10" y="100" width="10" height="10" fill="#14596B" />
      <rect x="20" y="100" width="40" height="10" fill="#33B6D8" />
      <rect x="60" y="100" width="10" height="10" fill="#14596B" />
      <rect x="70" y="100" width="10" height="10" fill="#33B6D8" />

      {/* — legs — */}
      <rect x="10" y="110" width="20" height="10" fill="#33B6D8" />
      <rect x="50" y="110" width="20" height="10" fill="#33B6D8" />

      {/* — shoes — */}
      <rect x="0"  y="120" width="30" height="10" fill="#0C3640" />
      <rect x="50" y="120" width="30" height="10" fill="#0C3640" />
    </svg>
  )
}
