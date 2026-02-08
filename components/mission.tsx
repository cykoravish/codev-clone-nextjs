"use client"

import React from "react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const cards = [
  {
    title: "Rigorous Peer Review That",
    titleAccent: "Upholds Academic Integrity",
    desc: "Our structured peer review process ensures every published article meets the highest standards of scholarly excellence, with transparent evaluation and constructive feedback.",
    image: "/images/team-collab-1.jpg",
  },
  {
    title: "Global Indexing That",
    titleAccent: "Maximizes Your Reach",
    desc: "We ensure your journal is indexed across all major databases including Scopus, Web of Science, PubMed, and DOAJ for maximum discoverability and citation impact.",
    image: "/images/team-collab-2.jpg",
  },
  {
    title: "End-to-End Production That",
    titleAccent: "Delivers on Schedule",
    desc: "From manuscript submission to final publication, our streamlined workflows guarantee 98% on-time delivery with professional typesetting and quality assurance.",
    image: "/images/team-1.jpg",
  },
]

export default function Mission() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="mission" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef}>
          <div className="text-center mb-4" data-reveal="fade-up" style={{ "--delay": "0ms" } as React.CSSProperties}>
            <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
              Our Mission &amp; Core Values
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center max-w-4xl mx-auto leading-tight text-balance"
            data-reveal="fade-up"
            style={{ "--delay": "100ms" } as React.CSSProperties}
          >
            Empowering researchers to{" "}
            <span className="text-primary italic">publish, discover, and advance</span>{" "}
            knowledge through trusted journal solutions.
          </h2>
        </div>

        {/* Sticky stacking cards */}
        <div className="mt-16">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="sticky mb-6 last:mb-0"
              style={{
                top: `${100 + i * 24}px`,
                zIndex: i + 1,
              }}
            >
              <div
                className="rounded-3xl bg-[hsl(24_20%_93%)] border border-border p-8 md:p-12 shadow-sm transition-shadow duration-300 hover:shadow-md"
                style={{
                  transform: `scale(${1 - i * 0.015})`,
                }}
              >
                <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {card.title}
                      <br />
                      <span className="text-primary italic">{card.titleAccent}</span>
                    </h3>
                    <div className="w-12 h-1 bg-primary rounded-full mt-4 mb-4" />
                    <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                      {card.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-full md:w-[420px] aspect-[4/3] relative rounded-2xl overflow-hidden">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
