"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"

const floatingImages = [
  { src: "/images/team-1.jpg", alt: "Researcher reviewing manuscript", rotate: -8, left: "3%", top: "5%", w: 200, h: 260, speed: 0.04, floatClass: "animate-float", delay: "0ms" },
  { src: "/images/team-3.jpg", alt: "Editor at workstation", rotate: -3, left: "10%", top: "42%", w: 170, h: 220, speed: 0.06, floatClass: "animate-float-delayed", delay: "100ms" },
  { src: "/images/team-6.jpg", alt: "Publishing team collaborating", rotate: -5, left: "0%", top: "72%", w: 140, h: 170, speed: 0.03, floatClass: "animate-float-slow", delay: "200ms" },
  { src: "/images/team-2.jpg", alt: "Academic author", rotate: 6, right: "3%", top: "3%", w: 185, h: 240, speed: 0.05, floatClass: "animate-float-delayed", delay: "300ms" },
  { src: "/images/team-4.jpg", alt: "Peer review discussion", rotate: 4, right: "1%", top: "40%", w: 165, h: 210, speed: 0.07, floatClass: "animate-float", delay: "400ms" },
  { src: "/images/team-5.jpg", alt: "Journal production", rotate: 7, right: "6%", top: "72%", w: 130, h: 160, speed: 0.04, floatClass: "animate-float-slow", delay: "500ms" },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const ticking = useRef(false)

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        ticking.current = false
      })
      ticking.current = true
    }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener("scroll", onScroll)
    }
  }, [onScroll])

  return (
    <section ref={sectionRef} className="relative pt-8 pb-4 md:pt-16 md:pb-8 overflow-hidden min-h-[85vh] flex items-center">
      {/* Floating parallax images */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {floatingImages.map((img) => (
          <div
            key={img.src}
            className={`absolute rounded-2xl overflow-hidden shadow-xl ${img.floatClass} hero-float-img ${loaded ? "hero-float-visible" : ""}`}
            style={{
              width: img.w,
              height: img.h,
              ...(img.left !== undefined ? { left: img.left } : {}),
              ...(img.right !== undefined ? { right: img.right } : {}),
              top: img.top,
              transform: `rotate(${img.rotate}deg) translateY(${scrollY * img.speed}px)`,
              "--float-delay": img.delay,
            } as React.CSSProperties}
          >
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className={`hero-reveal mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-sm px-5 py-2.5 text-sm text-muted-foreground ${loaded ? "hero-reveal-visible" : ""}`} style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
            <path d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5L8 1z" fill="currentColor" />
          </svg>
          Leading Provider of Journal Publishing Solutions
        </div>

        {/* Heading */}
        <h1
          className={`hero-reveal text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05] text-balance ${loaded ? "hero-reveal-visible" : ""}`}
          style={{ fontStyle: "italic", "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          Empowering
          <br />
          Scholarly Impact
        </h1>

        {/* Subheading */}
        <p
          className={`hero-reveal mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed italic ${loaded ? "hero-reveal-visible" : ""}`}
          style={{ "--reveal-delay": "250ms" } as React.CSSProperties}
        >
          Comprehensive publishing solutions for academic journals and scholarly societies
          {" \u2014 "}ensuring seamless workflows, high-quality standards, and global visibility.
        </p>

        {/* Stats */}
        <div
          className={`hero-reveal mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16 ${loaded ? "hero-reveal-visible" : ""}`}
          style={{ "--reveal-delay": "400ms" } as React.CSSProperties}
        >
          {[
            { value: "500+", label: "Journals Published" },
            { value: "98%", label: "On-Time Delivery" },
            { value: "50+", label: "Countries Reached" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`hero-reveal mt-10 flex flex-wrap items-center justify-center gap-4 ${loaded ? "hero-reveal-visible" : ""}`}
          style={{ "--reveal-delay": "550ms" } as React.CSSProperties}
        >
          <a
            href="#services"
            className="rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-all duration-300"
          >
            Explore Journals
          </a>
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
