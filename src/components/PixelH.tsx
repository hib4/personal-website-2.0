/* Pixel-art "H" logomark.
   Strict 10 px grid · 7 cols × 7 rows · 70 × 70 viewBox.

   Column roles:
     col 0 (x=0)  — outer-left edge   → #FFFBA4  (gold100,  highlight)
     col 1 (x=10) — inner-left        → #D2B863  (gold200,  primary)
     cols 2–4     — crossbar only     → #D2B863  (gold200)
     col 5 (x=50) — inner-right       → #D2B863  (gold200)
     col 6 (x=60) — outer-right edge  → #AD832D  (gold300,  shadow)
 */
export default function PixelH({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 70 70"
      fill="none"
      aria-hidden="true"
      style={{ shapeRendering: 'crispEdges', display: 'block' }}
    >
      {/* ── left leg (cols 0–1, full height) ── */}
      <rect x="0"  y="0" width="10" height="70" fill="#FFFBA4" />
      <rect x="10" y="0" width="10" height="70" fill="#D2B863" />

      {/* ── right leg (cols 5–6, full height) ── */}
      <rect x="50" y="0" width="10" height="70" fill="#D2B863" />
      <rect x="60" y="0" width="10" height="70" fill="#AD832D" />

      {/* ── crossbar centre (cols 2–4, row 3 only) ── */}
      <rect x="20" y="30" width="30" height="10" fill="#D2B863" />

      {/* ── crossbar top accent (one-pixel hairline in gold100) ── */}
      <rect x="20" y="30" width="30" height="2"  fill="#FFFBA4" />

      {/* ── crossbar bottom accent (one-pixel hairline in gold300) ── */}
      <rect x="20" y="38" width="30" height="2"  fill="#AD832D" />
    </svg>
  )
}
