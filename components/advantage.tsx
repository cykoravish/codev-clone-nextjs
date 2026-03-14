"use client";

import React from "react";
import { Network, Cpu, Shield, Eye, Workflow, Server } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const items = [
  {
    icon: Network,
    title: "Agent-First Architecture",
    desc: "Every solution we build is designed from the ground up around autonomous agents, not retrofitted onto legacy automation. Our agent-first approach means systems that can reason, plan, and act — not just execute scripts. We use multi-step chain-of-thought reasoning and tool-use frameworks to give agents genuine problem-solving capability. The result is software that improves with use and adapts to novel situations without manual intervention.",
  },
  {
    icon: Cpu,
    title: "Multi-Model Orchestration",
    desc: "No single model is best for every task. Our orchestration layer routes requests to the optimal model in real time — GPT-4o for complex reasoning, Claude for long-context analysis, specialized fine-tunes for domain-specific classification. This hybrid approach delivers superior accuracy while managing inference costs. Clients typically see 30–40% cost savings compared to single-model deployments.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Security is architected in from day one, not bolted on. We implement end-to-end encryption, role-based access controls, data residency guarantees, and complete audit logs for every AI action. Our systems are designed to meet SOC 2 Type II, HIPAA, and GDPR requirements. Sensitive data never leaves your environment unless you explicitly authorize it.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    desc: "Production AI systems require constant vigilance. Our observability stack tracks model latency, error rates, hallucination frequency, and business KPIs on a unified dashboard. Automated alerts fire when performance degrades, and our on-call team is available 24/7 for critical incidents. You have full visibility into what every agent is doing at every moment.",
  },
  {
    icon: Workflow,
    title: "Custom Training Pipelines",
    desc: "Generic models are a starting point, not the end state. We build fine-tuning and RLHF pipelines tailored to your proprietary data, domain vocabulary, and output standards. Continuous learning loops ensure models improve as they encounter real-world edge cases. Fine-tuned models consistently outperform their base counterparts by 20–45% on domain-specific benchmarks.",
  },
  {
    icon: Server,
    title: "Scalable Infrastructure",
    desc: "From startup to enterprise, our infrastructure scales with your needs. We deploy on AWS, GCP, and Azure, or on-premises for regulated industries, using Kubernetes orchestration for elastic horizontal scaling. Auto-scaling policies respond to load in under 30 seconds, and our distributed architecture ensures zero single points of failure. SLAs start at 99.9% uptime.",
  },
];

export default function Advantage() {
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
            PLATFORM ADVANTAGES
          </span>
        </div>

        <br />
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center text-balance"
          data-reveal="fade-up"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          What Makes Us<span className="text-cyan-400">Different</span>
        </h2>
        <p
          className="mt-4 text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed"
          data-reveal="fade-up"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          Hundreds of agencies claim AI expertise. Here is exactly what sets
          AgenticAI Tech Hub apart — in concrete, verifiable terms.
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
