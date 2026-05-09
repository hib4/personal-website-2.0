import styles from './PixelBackground.module.css'

const S = 24   // one pixel unit in SVG coords
const W = 1992 // frame width
const H = 800  // frame height
const FRAMES = 3

// theme colors
const C = {
  b1: '#b2e3f0',
  b2: '#33b6d8',
  b3: '#14596b',
  g1: '#fffba4',
  g2: '#d2b863',
  r2: '#ec4237',
} as const

// [col, row, color, frames[]]
// frames: which of the 3 animation frames this pixel appears in
type PxDef = readonly [number, number, string, readonly number[]]

const ALL = [0, 1, 2] as const

const PIXELS: PxDef[] = [
  // ── stable (visible in all 3 frames) ──────────────────────
  [5,  3, C.b2, ALL], [20, 7, C.g1, ALL], [35, 2, C.b1, ALL],
  [50, 9, C.r2, ALL], [65, 5, C.g2, ALL], [75,12, C.b3, ALL],
  [10,15, C.b2, ALL], [30,18, C.g1, ALL], [45,14, C.b1, ALL],
  [60,20, C.r2, ALL], [15,22, C.g2, ALL], [55,25, C.b2, ALL],
  [70,28, C.g1, ALL], [25,28, C.b1, ALL], [40,22, C.r2, ALL],
  [78,18, C.g2, ALL], [ 8,30, C.b2, ALL], [42,10, C.g1, ALL],
  [68, 8, C.b1, ALL], [23,13, C.r2, ALL], [ 3,20, C.g2, ALL],
  [82, 6, C.b2, ALL], [57,16, C.g1, ALL], [33, 6, C.r2, ALL],
  [18, 1, C.b1, ALL], [48,27, C.g2, ALL], [73, 2, C.r2, ALL],
  [38,31, C.b2, ALL], [12, 4, C.g1, ALL], [62,31, C.b3, ALL],

  // ── frame 0 blinkers ──────────────────────────────────────
  [ 2, 8, C.g1, [0]], [17, 5, C.b2, [0]], [32,12, C.g2, [0]],
  [48, 6, C.r2, [0]], [63,15, C.b1, [0]], [73,22, C.g1, [0]],
  [38,28, C.b2, [0]], [52,19, C.r2, [0]], [12,25, C.g2, [0]],
  [80, 4, C.b1, [0]], [27,33, C.g1, [0]], [ 7,17, C.r2, [0]],

  // ── frame 1 blinkers ──────────────────────────────────────
  [ 7, 2, C.g2, [1]], [22,16, C.b1, [1]], [37, 8, C.g1, [1]],
  [53,23, C.b2, [1]], [67,11, C.r2, [1]], [13,26, C.g2, [1]],
  [57, 7, C.b1, [1]], [80,14, C.g1, [1]], [28, 4, C.r2, [1]],
  [44,30, C.b2, [1]], [ 3,12, C.g2, [1]], [76,30, C.r2, [1]],

  // ── frame 2 blinkers ──────────────────────────────────────
  [ 4,19, C.r2, [2]], [27,10, C.b2, [2]], [44,17, C.g1, [2]],
  [59, 4, C.g2, [2]], [71,26, C.b1, [2]], [18,30, C.r2, [2]],
  [36, 5, C.g1, [2]], [62,21, C.b2, [2]], [83, 8, C.g2, [2]],
  [ 9,20, C.b3, [2]], [51,33, C.g1, [2]], [24,21, C.r2, [2]],
]

// Render a 5-pixel cross/star shape centered at (cx, cy)
function Cross({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <>
      <rect x={cx}     y={cy}     width={S} height={S} fill={color} />
      <rect x={cx}     y={cy - S} width={S} height={S} fill={color} />
      <rect x={cx}     y={cy + S} width={S} height={S} fill={color} />
      <rect x={cx - S} y={cy}     width={S} height={S} fill={color} />
      <rect x={cx + S} y={cy}     width={S} height={S} fill={color} />
    </>
  )
}

export default function PixelBackground() {
  const aspect = W / H

  return (
    <div
      className={styles.wrapper}
      style={{ '--aspect': aspect } as React.CSSProperties}
    >
      <svg
        className={styles.svg}
        viewBox={`0 0 ${W * FRAMES} ${H}`}
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {[0, 1, 2].map((f) => (
          <g key={f} transform={`translate(${f * W}, 0)`}>
            {PIXELS.filter((p) => p[3].includes(f)).map(([col, row, color], i) => {
              const cx = (col as number) * S
              const cy = (row as number) * S
              // Every 5th stable pixel is a cross; rest are single dots
              const isStarCell = (col as number + row as number) % 5 === 0
              return isStarCell ? (
                <Cross key={i} cx={cx} cy={cy} color={color as string} />
              ) : (
                <rect key={i} x={cx} y={cy} width={S} height={S} fill={color as string} />
              )
            })}
          </g>
        ))}
      </svg>
    </div>
  )
}
