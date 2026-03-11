"use client"

import React, { useEffect, useState } from "react"
import { Meteors } from "./ui/meteors"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative pt-8 pb-4 md:pt-16 md:pb-8 min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* ── Meteor layer ── */}
      {/* Must be absolute + overflow-hidden so meteor spans (which are absolute themselves)
          are positioned relative to this box and clipped at the edges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ambient glow that makes white meteors pop */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-background to-background" />
        <Meteors number={25} />
      </div>

      {/* Bottom fade so meteors dissolve into page content below */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* ── Hero content ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        {/* Badge */}
        <div
          className={`hero-reveal mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-sm px-5 py-2.5 text-sm text-muted-foreground transition-all duration-700 ${loaded ? "hero-reveal-visible opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
            <path d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5L8 1z" fill="currentColor" />
          </svg>
          Leading Provider of Journal Publishing Solutions
        </div>

        {/* Heading */}
        <h1
          className={`mt-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05] text-balance italic transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Empowering
          <br />
          Scholarly Impact
        </h1>

        {/* Subheading */}
        <p
          className={`mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed italic transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Comprehensive publishing solutions for academic journals and scholarly societies
          {" \u2014 "}ensuring seamless workflows, high-quality standards, and global visibility.
        </p>

        {/* Stats */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {[
            { value: "500+", label: "Journals Published" },
            { value: "98%",  label: "On-Time Delivery"  },
            { value: "50+",  label: "Countries Reached" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          
           <a href="#services"
            className="rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-all duration-300"
          >
            Explore Journals
          </a>
          
           <a  href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Submit Manuscript
          </a>
        </div>
      </div>
    </section>
  )
}