import { useEffect, useRef, useState } from 'react'
import styles from './WriteIn.module.css'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

type Props = {
  children: React.ReactNode
  as?: HeadingTag
  className?: string
}

type LineData = { html: string; delay: number }

const LINE_DURATION = 900

function detectLines(el: HTMLElement): LineData[] {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  const chars: Array<{ node: Text; offset: number; y: number }> = []

  let node: Node | null
  while ((node = walker.nextNode())) {
    const textNode = node as Text
    for (let i = 0; i < textNode.length; i++) {
      const range = new Range()
      range.setStart(textNode, i)
      range.setEnd(textNode, i + 1)
      const rect = range.getBoundingClientRect()
      if (rect.width > 0 || rect.height > 0) {
        chars.push({ node: textNode, offset: i, y: Math.round(rect.top) })
      }
    }
  }

  if (chars.length === 0) return []

  const uniqueYs = [...new Set(chars.map(c => c.y))].sort((a, b) => a - b)

  return uniqueYs.map((y, lineIdx) => {
    const lineChars = chars.filter(c => c.y === y)
    const first = lineChars[0]
    const last = lineChars[lineChars.length - 1]

    const range = new Range()
    range.setStart(first.node, first.offset)
    range.setEnd(last.node, last.offset + 1)

    const div = document.createElement('div')
    div.appendChild(range.cloneContents())

    return { html: div.innerHTML, delay: lineIdx * LINE_DURATION }
  })
}

export default function WriteIn({ children, as: Tag = 'h3', className }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [phase, setPhase] = useState<'hidden' | 'animating' | 'done'>('hidden')
  const [lines, setLines] = useState<LineData[]>([])

  useEffect(() => {
    if (phase !== 'hidden') return
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.unobserve(el)
          const detected = detectLines(el)
          if (detected.length === 0) {
            setPhase('done')
            return
          }
          setLines(detected)
          setPhase('animating')
        }
      },
      { threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [phase])

  const CURSOR_EXTRA = 1500

  function handleLastLineAnimationEnd() {
    setTimeout(() => setPhase('done'), CURSOR_EXTRA)
  }

  const isHidden = phase === 'hidden'
  const isAnimating = phase === 'animating'

  const cls = [
    isHidden ? styles.hidden : null,
    className,
  ].filter(Boolean).join(' ')

  return (
    // @ts-expect-error — HTMLElement ref is compatible with all h1–h4 elements at runtime
    <Tag ref={ref} className={cls}>
      {isAnimating
        ? lines.map((line, i) => {
            const isLast = i === lines.length - 1
            return (
              <span
                key={i}
                className={[styles.line, isLast ? styles.lastLine : null].filter(Boolean).join(' ')}
                style={{ '--line-delay': `${line.delay}ms` } as React.CSSProperties}
                dangerouslySetInnerHTML={{ __html: line.html }}
                onAnimationEnd={isLast ? handleLastLineAnimationEnd : undefined}
              />
            )
          })
        : children}
    </Tag>
  )
}
