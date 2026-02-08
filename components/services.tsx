"use client"

import React from "react"
import { BookOpen, FileText, Globe, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    icon: BookOpen,
    label: "Journal Publishing",
    headline: "Publish with precision and impact.",
    subline: "Complete journal publishing solutions from peer review management to final production.",
    stats: [
      { bold: "500+", text: "journals successfully published across disciplines" },
      { bold: "98%", text: "on-time publication delivery rate" },
      { bold: "100%", text: "COPE-compliant editorial processes" },
      { bold: "XML-first", text: "workflow for seamless digital distribution" },
    ],
  },
  {
    icon: FileText,
    label: "Editorial Services",
    headline: "Elevate manuscript quality at every stage.",
    subline: "Professional copyediting, typesetting, and production services for scholarly content.",
    stats: [
      { bold: "Expert", text: "copyeditors with subject-matter expertise" },
      { bold: "LaTeX & JATS", text: "XML typesetting for all formats" },
      { bold: "Rigorous", text: "quality assurance and proofreading" },
    ],
  },
  {
    icon: Globe,
    label: "Indexing & Discoverability",
    headline: "Get found by the right researchers.",
    subline: "Strategic indexing and metadata optimization for maximum scholarly visibility.",
    stats: [
      { bold: "Scopus", text: "& Web of Science indexing support" },
      { bold: "DOI", text: "registration and CrossRef integration" },
      { bold: "SEO", text: "optimized metadata and discoverability" },
      { bold: "ORCID", text: "integration for author identification" },
    ],
  },
]

export default function Services() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.08 })

  return (
    <section ref={ref} id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center text-balance"
          data-reveal="fade-up"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          Comprehensive Publishing Solutions
        </h2>
        <p
          className="mt-4 text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed"
          data-reveal="fade-up"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          From manuscript submission to global distribution, we provide everything scholarly publishers need to succeed.
        </p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <a
              key={service.label}
              href="#"
              className="group relative rounded-2xl border border-border bg-secondary/40 p-8 flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-primary/30"
              data-reveal="scale-up"
              style={{ "--delay": `${200 + i * 150}ms` } as React.CSSProperties}
            >
              {/* Animated top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <span className="text-xs font-semibold tracking-wide uppercase text-primary mb-4">
                {service.label}
              </span>

              <h3 className="text-xl font-bold text-foreground mb-1">{service.headline}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.subline}</p>

              <div className="flex-1 space-y-3 mb-6">
                {service.stats.map((stat) => (
                  <div key={stat.bold} className="flex items-start gap-2">
                    <span className="text-sm font-bold text-foreground whitespace-nowrap">{stat.bold}</span>
                    <span className="text-sm text-muted-foreground">{stat.text}</span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-auto">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
