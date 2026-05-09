/* Pixel-art pencil icon for the Blog section.
   Strict 10 px grid · 11 cols × 11 rows · 110 × 110 viewBox
   Pencil runs diagonal top-right → bottom-left.
   Each row shifts 10 px left; body is 3-4 pixels wide at each row.
   Gold palette: #FFFBA4 (highlight) #D2B863 (body) #AD832D (shadow) #3D2E10 (outline/tip) */
export default function PixelPencil() {
  return (
    <svg
      width="176"
      height="176"
      viewBox="0 0 110 110"
      fill="none"
      aria-hidden="true"
      style={{ shapeRendering: 'crispEdges' }}
    >
      {/* ── row 0: eraser cap (top-right) ── */}
      <rect x="70" y="0"  width="10" height="10" fill="#A3180F" />
      <rect x="80" y="0"  width="20" height="10" fill="#EC4237" />

      {/* ── row 1: metal ferrule ── */}
      <rect x="60" y="10" width="10" height="10" fill="#3D2E10" />
      <rect x="70" y="10" width="30" height="10" fill="#AD832D" />

      {/* ── rows 2–6: pencil body (diagonal) ── */}
      {/* Each row: shadow (left edge), highlight (center), body (right edge) */}
      <rect x="50" y="20" width="10" height="10" fill="#AD832D" />
      <rect x="60" y="20" width="20" height="10" fill="#FFFBA4" />
      <rect x="80" y="20" width="10" height="10" fill="#D2B863" />

      <rect x="40" y="30" width="10" height="10" fill="#AD832D" />
      <rect x="50" y="30" width="20" height="10" fill="#FFFBA4" />
      <rect x="70" y="30" width="10" height="10" fill="#D2B863" />

      <rect x="30" y="40" width="10" height="10" fill="#AD832D" />
      <rect x="40" y="40" width="20" height="10" fill="#FFFBA4" />
      <rect x="60" y="40" width="10" height="10" fill="#D2B863" />

      <rect x="20" y="50" width="10" height="10" fill="#AD832D" />
      <rect x="30" y="50" width="20" height="10" fill="#FFFBA4" />
      <rect x="50" y="50" width="10" height="10" fill="#D2B863" />

      <rect x="10" y="60" width="10" height="10" fill="#AD832D" />
      <rect x="20" y="60" width="20" height="10" fill="#FFFBA4" />
      <rect x="40" y="60" width="10" height="10" fill="#D2B863" />

      {/* ── row 7: sharpening begins (narrows to 3) ── */}
      <rect x="10" y="70" width="10" height="10" fill="#FFFBA4" />
      <rect x="20" y="70" width="10" height="10" fill="#D2B863" />
      <rect x="30" y="70" width="10" height="10" fill="#AD832D" />

      {/* ── row 8: sharpening cone (narrows to 2) ── */}
      <rect x="0"  y="80" width="10" height="10" fill="#D2B863" />
      <rect x="10" y="80" width="10" height="10" fill="#3D2E10" />

      {/* ── row 9: graphite tip (1 pixel) ── */}
      <rect x="0"  y="90" width="10" height="10" fill="#3D2E10" />
    </svg>
  )
}
