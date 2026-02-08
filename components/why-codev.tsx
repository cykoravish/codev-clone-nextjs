"use client"

import React from "react"
import { BookOpen, ShieldCheck, Globe, BarChart3, Clock, Award } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const items = [
  {
    icon: BookOpen,
    title: "Full-Service Journal Management",
    desc: "End-to-end journal management from manuscript handling to final publication, with dedicated editorial support at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Publishing Standards",
    desc: "Strict adherence to COPE guidelines and international publishing ethics, ensuring integrity and transparency in every publication.",
  },
  {
    icon: Globe,
    title: "Global Indexing & Visibility",
    desc: "Comprehensive indexing strategy across Scopus, Web of Science, PubMed, DOAJ, and other major databases for maximum reach.",
  },
  {
    icon: BarChart3,
    title: "Impact-Driven Analytics",
    desc: "Detailed citation tracking, altmetrics dashboards, and readership analytics to measure and grow your journal's scholarly impact.",
  },
  {
    icon: Clock,
    title: "Rapid Turnaround Times",
    desc: "Efficient peer review coordination and production workflows that reduce time-to-publication without compromising quality.",
  },
  {
    icon: Award,
    title: "Society Partnership Programs",
    desc: "Tailored publishing partnerships for academic societies and institutions with dedicated account management and flexible models.",
  },
]

export default function WhyCoDev() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.08 })

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center text-balance"
          data-reveal="fade-up"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          Why Halicon Publication?
        </h2>
        <p
          className="mt-4 text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed"
          data-reveal="fade-up"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          We go beyond publishing. Halicon provides comprehensive journal solutions with dedicated editorial support, rigorous quality standards, and strategic indexing to maximize your academic impact.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const row = Math.floor(i / 3)
            const col = i % 3
            const directions = ["fade-left", "fade-up", "fade-right"] as const
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-secondary/40 p-7 hover:border-primary/30 hover:shadow-md transition-all duration-500 hover:-translate-y-1.5"
                data-reveal={directions[col]}
                style={{ "--delay": `${(row * 3 + col) * 100}ms` } as React.CSSProperties}
              >
                <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
