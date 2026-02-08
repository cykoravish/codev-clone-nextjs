"use client"

import React, { useEffect, useRef, useState } from "react"
import { Upload, Search, FileCheck, BookOpen } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const steps = [
  {
    icon: Upload,
    time: "Step 1",
    title: "Manuscript Submission",
    desc: "Authors submit manuscripts through our online portal with automated format checks and plagiarism screening.",
  },
  {
    icon: Search,
    time: "Step 2",
    title: "Peer Review",
    desc: "Rigorous double-blind peer review managed by our editorial team with transparent timelines and constructive feedback.",
  },
  {
    icon: FileCheck,
    time: "Step 3",
    title: "Production & Typesetting",
    desc: "Professional copyediting, JATS XML conversion, typesetting, and quality assurance for publication-ready output.",
  },
  {
    icon: BookOpen,
    time: "Step 4",
    title: "Publication & Indexing",
    desc: "Digital-first publication with DOI assignment, metadata distribution, and indexing across major academic databases.",
  },
]

export default function Process() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1 })
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineVisible, setLineVisible] = useState(false)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-secondary/50 rounded-3xl mx-4 md:mx-8 lg:mx-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center text-balance"
          data-reveal="fade-up"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          Our Publishing Process
        </h2>

        <div className="mt-14 relative" ref={lineRef}>
          {/* Connecting line that draws in */}
          <div
            className="hidden lg:block absolute top-[34px] left-[12%] right-[12%] h-[2px] bg-primary/20 origin-left transition-transform duration-[1.5s] ease-out"
            style={{
              transform: lineVisible ? "scaleX(1)" : "scaleX(0)",
              transitionDelay: "0.3s",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
                data-reveal="fade-up"
                style={{ "--delay": `${300 + i * 200}ms` } as React.CSSProperties}
              >
                <div className="relative z-10 flex items-center justify-center w-[68px] h-[68px] rounded-full bg-background border-2 border-primary/25 mb-5 shadow-sm hover:border-primary hover:shadow-md transition-all duration-400 group">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-primary font-semibold mb-2 tracking-wide">{step.time}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 text-center"
          data-reveal="scale-up"
          style={{ "--delay": "900ms" } as React.CSSProperties}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Publish Your Research?
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            {"Submit your manuscript today \u2022 First decision within 4 weeks"}
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Submit Manuscript
          </a>
        </div>
      </div>
    </section>
  )
}
