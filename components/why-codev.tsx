"use client";

import React from "react";
import {
  Landmark,
  HeartPulse,
  Truck,
  ShoppingCart,
  Factory,
  Building2,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const items = [
  {
    icon: Landmark,
    title: "Finance & Banking",
    desc: "Deploy AI agents for fraud detection, risk modeling, and automated compliance reporting. Our finance AI systems process millions of transactions in real time with sub-millisecond latency.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Streamline clinical workflows with intelligent documentation agents and diagnostic support tools. We integrate with EHR systems to surface the right patient data at the right time.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    desc: "Optimize routing, demand forecasting, and warehouse operations with autonomous decision agents. Our logistics AI has reduced delivery time by an average of 35% for enterprise clients.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    desc: "Personalize customer journeys, manage dynamic pricing, and automate inventory replenishment with AI. Our retail intelligence platforms increase average order value by 22% within 90 days.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Predict equipment failures before they happen with ML-driven predictive maintenance. Our manufacturing AI agents monitor hundreds of sensor streams simultaneously to reduce unplanned downtime.",
  },
  {
    icon: Building2,
    title: "Government & Public Sector",
    desc: "Accelerate public service delivery through AI-assisted case management and document automation. We build secure, compliant AI systems that meet the most stringent regulatory standards.",
  },
];

export default function WhyCoDev() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.08 });

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span
            className="rounded-full border border-border backdrop-blur-sm  border-cyan-500 text-cyan-400 px-4 py-1 text-sm"
            data-reveal="fade-up"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            INDUSTRIES WE SERVE
          </span>
        </div>

        <br />
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center text-balance"
          data-reveal="fade-up"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          AI Solutions Across{" "}
          <span className="text-cyan-400">Every Sector</span>
        </h2>
        <p
          className="mt-4 text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed"
          data-reveal="fade-up"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          Our agentic AI expertise spans the most demanding industries in the
          world. We understand the nuances of your sector and build solutions
          that fit your regulatory, operational, and business context.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const directions = ["fade-left", "fade-up", "fade-right"] as const;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-primary/20 bg-primary/5  p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-500"
                data-reveal={directions[col]}
                style={
                  {
                    "--delay": `${(row * 3 + col) * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
