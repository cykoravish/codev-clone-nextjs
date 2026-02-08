"use client"

import React from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function CTASection() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.15 })

  return (
    <section ref={ref} id="cta" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative rounded-3xl bg-primary p-10 md:p-16 overflow-hidden"
          data-reveal="zoom-in"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-foreground/5 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary-foreground/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div className="flex-1">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight text-balance"
                data-reveal="fade-up"
                style={{ "--delay": "200ms" } as React.CSSProperties}
              >
                Ready to{" "}
                <span className="italic">elevate your journal?</span>
              </h2>
              <p
                className="mt-4 text-base text-primary-foreground/80 leading-relaxed max-w-xl"
                data-reveal="fade-up"
                style={{ "--delay": "300ms" } as React.CSSProperties}
              >
                Partner with Halicon Publication for comprehensive journal solutions. From manuscript management to global indexing, we handle the publishing so you can focus on advancing research.
              </p>

              {/* Stats row */}
              <div
                className="mt-8 flex flex-wrap gap-8"
                data-reveal="fade-up"
                style={{ "--delay": "400ms" } as React.CSSProperties}
              >
                {[
                  { value: "500+", label: "Journals published" },
                  { value: "98%", label: "On-time delivery" },
                  { value: "50+", label: "Countries reached" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                    <div className="text-xs text-primary-foreground/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div
                className="mt-8 flex flex-wrap items-center gap-4"
                data-reveal="fade-up"
                style={{ "--delay": "500ms" } as React.CSSProperties}
              >
                <a
                  href="#services"
                  className="rounded-full border-2 border-primary-foreground/40 px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
                >
                  Explore Journals
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-lg"
                >
                  Submit Manuscript
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
