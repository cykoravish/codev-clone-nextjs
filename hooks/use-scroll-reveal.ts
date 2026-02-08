"use client"

import { useEffect, useRef, type RefObject } from "react"

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null)
  const { threshold = 0.1, rootMargin = "0px 0px -80px 0px", once = true } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const elements = el.querySelectorAll<HTMLElement>("[data-reveal]")

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            // Small rAF delay to ensure browser paints the initial state first
            requestAnimationFrame(() => {
              target.classList.add("revealed")
            })
            if (once) observer.unobserve(target)
          }
        }
      },
      { threshold, rootMargin }
    )

    for (const child of elements) {
      observer.observe(child)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
