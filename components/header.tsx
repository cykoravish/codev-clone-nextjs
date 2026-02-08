"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ticking = useRef(false)

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 30)
        ticking.current = false
      })
      ticking.current = true
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: scrolled
          ? "hsl(var(--background) / 0.97)"
          : "hsl(var(--background))",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottomWidth: "1px",
        borderBottomColor: scrolled
          ? "hsl(var(--border) / 0.6)"
          : "transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.04)" : "none",
        transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1">
          <svg width="160" height="36" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="28" fill="hsl(348 75% 40%)" fontSize="24" fontWeight="300" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
              halicon
            </text>
            <text x="82" y="28" fill="hsl(348 75% 40%)" fontSize="24" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
              pub
            </text>
          </svg>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <button className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors duration-300">
            Publishing Solutions <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
          </button>
          <a href="#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300">
            Journals
          </a>
          <a href="#mission" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300">
            About Us
          </a>
          <button className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors duration-300">
            Resources <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
          </button>
          <a href="#cta" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300">
            Contact
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="rounded-full border-2 border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary/5 transition-all duration-300"
          >
            Author Portal
          </a>
          <a
            href="#cta"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-md"
          >
            Submit Manuscript
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className="absolute inset-0 transition-all duration-300"
              style={{
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "rotate(90deg) scale(0.8)" : "rotate(0) scale(1)",
              }}
            />
            <X
              size={24}
              className="absolute inset-0 transition-all duration-300"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "rotate(0) scale(1)" : "rotate(-90deg) scale(0.8)",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "420px" : "0px",
          opacity: mobileOpen ? 1 : 0,
          transition: "max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
        }}
      >
        <div className="bg-background border-t border-border px-6 py-5 flex flex-col gap-1">
          {["Publishing Solutions", "Journals", "About Us", "Resources", "Contact"].map((item, i) => (
            <a
              key={item}
              href="#"
              className="text-sm text-foreground/70 hover:text-foreground py-3 transition-all duration-300 border-b border-border/50 last:border-0"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                transition: `opacity 0.3s ease ${i * 60}ms, transform 0.3s ease ${i * 60}ms, color 0.3s ease`,
              }}
            >
              {item}
            </a>
          ))}
          <div
            className="flex gap-3 pt-4"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease 350ms, transform 0.3s ease 350ms",
            }}
          >
            <a href="#" className="rounded-full border-2 border-primary px-5 py-2 text-sm font-semibold text-primary">Author Portal</a>
            <a href="#cta" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Submit Manuscript</a>
          </div>
        </div>
      </div>
    </header>
  )
}
