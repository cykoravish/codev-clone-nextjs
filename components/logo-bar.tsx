"use client"

import React from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const logos = [
  "Scopus",
  "Web of Science",
  "PubMed Central",
  "DOAJ",
  "CrossRef",
  "Google Scholar",
  "EBSCO",
  "ProQuest",
  "Dimensions",
  "Semantic Scholar",
]

export default function LogoBar() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-10 overflow-hidden bg-secondary/50 rounded-3xl mx-4 md:mx-8 lg:mx-12 my-4">
      <div className="mx-auto max-w-7xl px-6 mb-6" data-reveal="fade-up" style={{ "--delay": "0ms" } as React.CSSProperties}>
        <p className="text-center text-xs font-semibold text-muted-foreground tracking-[0.2em] uppercase">
          Indexed &amp; Recognized by Leading Databases
        </p>
      </div>
      <div className="relative overflow-hidden" data-reveal="fade" style={{ "--delay": "200ms" } as React.CSSProperties}>
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[hsl(24_20%_93%/0.7)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[hsl(24_20%_93%/0.7)] to-transparent z-10 pointer-events-none" />
        {/* Scrolling logos */}
        <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
          {[...logos, ...logos, ...logos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center h-12"
            >
              <span className="text-foreground/25 font-bold text-base md:text-lg tracking-wider whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
