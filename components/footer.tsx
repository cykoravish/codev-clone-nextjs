"use client";

import React from "react";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const footerLinks = {
  Publishing: [
    { label: "Journal Publishing", href: "#" },
    { label: "Editorial Services", href: "#" },
    { label: "Indexing & Discoverability", href: "#" },
  ],
  "For Authors": [
    { label: "Submit Manuscript", href: "#" },
    { label: "Author Guidelines", href: "#" },
    { label: "Publication Ethics", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Publishing Guide", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
};

export default function Footer() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.08 });

  return (
    <footer ref={ref} className="border-t border-border bg-logo">
      <div className="mx-auto max-w-7xl px-6 py-14 bg-logo">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div
            className="lg:col-span-2"
            data-reveal="fade-right"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            <a href="#" className="flex items-center gap-1">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-7 md:h-8 lg:h-14 w-auto"
              />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mt-2">
              Building the future with Autonomous AI agents and Intelligent
              systems that transform businesses at scale.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-foreground/5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
                    aria-label="Social link"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <div
              key={category}
              data-reveal="fade-up"
              style={
                {
                  "--delay": `${150 + colIndex * 100}ms`,
                } as React.CSSProperties
              }
            >
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact + Copyright */}
        <div
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          data-reveal="fade"
          style={{ "--delay": "600ms" } as React.CSSProperties}
        >
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span>Kuala Lumpur, Malaysia</span>
            <a
              href="mailto:info@haliconpub.com"
              className="hover:text-primary transition-colors duration-300"
            >
              info@haliconpub.com
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            {"Halicon Publication \u00A9 2025. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
