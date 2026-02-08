"use client"

import React, { useEffect, useState } from "react"
import { Quote } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const testimonials = [
  {
    quote: "Halicon transformed our journal's publishing process. Their team's dedication to quality and timeliness has been exceptional.",
    role: "Editor-in-Chief",
    company: "Journal of Applied Sciences",
  },
  {
    quote: "The indexing support we received helped us get listed on Scopus within the first year. Truly remarkable results.",
    role: "Managing Editor",
    company: "International Review of Engineering",
  },
  {
    quote: "Their editorial services significantly improved our manuscript quality and reduced our revision cycles by half.",
    role: "Society President",
    company: "Asian Academy of Management",
  },
  {
    quote: "Halicon's end-to-end approach means we can focus on research while they handle the entire publication lifecycle.",
    role: "Department Head",
    company: "University Research Center",
  },
]

export default function Testimonials() {
  const ref = useScrollReveal<HTMLElement>()
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = (index: number) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setIsTransitioning(false)
    }, 400)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} id="testimonials" className="py-20 lg:py-28 bg-secondary/50 rounded-3xl mx-4 md:mx-8 lg:mx-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12" data-reveal="fade-up" style={{ "--delay": "0ms" } as React.CSSProperties}>
          <span className="text-xs font-semibold text-muted-foreground tracking-[0.2em] uppercase">
            What Our Partners Say
          </span>
        </div>

        <div className="max-w-4xl mx-auto" data-reveal="fade-up" style={{ "--delay": "150ms" } as React.CSSProperties}>
          {/* Person avatars as tabs */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {testimonials.map((t, i) => (
              <button
                key={t.company}
                onClick={() => goTo(i)}
                className="group flex flex-col items-center gap-2 transition-all duration-500"
                aria-label={`View testimonial from ${t.role}`}
              >
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-500"
                  style={{
                    backgroundColor: i === active ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.1)",
                    color: i === active ? "hsl(var(--primary-foreground))" : "hsl(var(--primary))",
                    transform: i === active ? "scale(1.15)" : "scale(1)",
                    boxShadow: i === active ? "0 4px 20px hsl(var(--primary) / 0.3)" : "none",
                  }}
                >
                  {t.role[0]}
                </div>
                <div className="text-center hidden md:block">
                  <div
                    className="text-xs font-medium transition-colors duration-300"
                    style={{ color: i === active ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
                  >
                    {t.role}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Quote area with crossfade */}
          <div className="relative min-h-[180px] flex items-center justify-center">
            <div
              className="flex flex-col items-center text-center transition-all duration-500"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? "translateY(12px) scale(0.98)" : "translateY(0) scale(1)",
              }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed max-w-2xl italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="text-sm font-semibold text-foreground">{testimonials[active].role}</div>
                <div className="text-sm text-muted-foreground">{testimonials[active].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((t, i) => (
              <button
                key={`dot-${t.company}`}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px",
                  backgroundColor: i === active ? "hsl(var(--primary))" : "hsl(var(--foreground) / 0.12)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
