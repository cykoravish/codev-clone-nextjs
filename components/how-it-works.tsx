"use client";

import React from "react";
import { FileText, Users, Settings, BookOpen, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const models = [
  {
    icon: FileText,
    title: "Open Access Publishing",
    desc: "Make your research freely available to the global academic community. We handle APC management, licensing, and compliance with funder mandates for full open access journals.",
    tag: "Gold & Diamond OA supported",
  },
  {
    icon: Users,
    title: "Subscription Journals",
    desc: "Traditional subscription-based publishing with institutional access management, print and digital distribution, and flexible hybrid OA options for individual articles.",
    tag: "Print & digital distribution",
  },
  {
    icon: Settings,
    title: "Society Journal Partnerships",
    desc: "Dedicated partnership programs for scholarly societies and academic institutions. We align publishing strategy with your society's mission while managing day-to-day operations.",
    tag: "Tailored society solutions",
  },
  {
    icon: BookOpen,
    title: "New Journal Launch",
    desc: "From concept to first issue, we guide new journals through editorial board formation, ISSN registration, indexing applications, and building a sustainable submission pipeline.",
    tag: "End-to-end launch support",
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.06 });

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="text-center mb-4"
          data-reveal="fade-up"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <span className="text-xs font-semibold text-muted-foreground tracking-[0.2em] uppercase">
            Publishing Models
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center text-balance"
          data-reveal="fade-up"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          Choose the model that fits your journal.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model, i) => {
            const directions = [
              "fade-right",
              "fade-left",
              "fade-right",
              "fade-left",
            ] as const;
            return (
              <div
                key={model.title}
                className="group rounded-2xl border border-primary/20 bg-primary/5  p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-500 "
                data-reveal={directions[i]}
                style={
                  { "--delay": `${200 + i * 120}ms` } as React.CSSProperties
                }
              >
                <div className="mb-4 flex items-center justify-center  w-10 h-10 rounded-xl bg-primary/5 group-hover:bg-primary/5 transition-colors duration-300">
                  <model.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {model.desc}
                </p>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-primary/10 text-primary">
                  {model.tag}
                </span>
              </div>
            );
          })}
        </div>

        {/* Full Ecosystem */}
        <div
          className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10"
          data-reveal="scale-up"
          style={{ "--delay": "700ms" } as React.CSSProperties}
        >
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                The Complete Ecosystem - Included with Every Publishing Model
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Beyond publishing, you gain access to Halicon&apos;s full
                support infrastructure: dedicated editorial managers, peer
                review coordination, DOI and metadata registration, XML
                production, digital archiving, usage analytics, and ongoing
                indexing support. Everything your journal needs to thrive.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          data-reveal="fade-up"
          style={{ "--delay": "800ms" } as React.CSSProperties}
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
  );
}
