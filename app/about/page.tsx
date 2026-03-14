"use client";

import {
  CheckCircle,
  ArrowRight,
  Bot,
  Lightbulb,
  Users,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import aboutImage from "@/assets/pngwing.png";

export default function About() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);
  const { openQuote } = useQuoteModal();

  const features = [
    "10+ years of AI & software engineering expertise",
    "End-to-end agentic AI solutions from strategy to production",
    "Dedicated team of certified AI specialists",
    "Proven track record across 12+ industries globally",
    "Rapid prototyping with focused 2-week delivery sprints",
    "ISO-aligned data security and compliance practices",
    "24/7 production monitoring and dedicated support",
    "Multi-cloud deployment expertise (AWS, GCP, Azure)",
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We are in relentless pursuit of better approaches, better architectures, and better outcomes. When we identify a fundamentally superior solution — even mid-project — we have the courage to recommend a pivot.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "We measure our success exclusively by your outcomes, not by hours billed or lines of code written. Every team member working on your project has skin in the game.",
    },
    {
      icon: ShieldCheck,
      title: "Ethical AI",
      description:
        "We believe AI development carries profound responsibility. Every system we build is evaluated for bias, fairness, and potential for misuse before delivery.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "The AI landscape evolves faster than any other technology domain. Every team member has a dedicated learning budget and participates in knowledge sharing sessions.",
    },
  ];

  const steps = [
    {
      year: "2014",
      title: "Founded in San Francisco",

      desc: "AgenticAI Tech Hub was established by a group of ML researchers and engineers from Stanford and MIT, united by the vision that AI would eventually power every knowledge workflow.",
    },
    {
      year: "2017",
      title: "First 50 Enterprise Clients",

      desc: "After three years of product‑market fit work and refining our methodology, we crossed 50 enterprise clients spanning finance, healthcare, and logistics.",
    },
    {
      year: "2020",
      title: "Launched AI Agent Platform",

      desc: "Ahead of the broader market, we launched our proprietary agent development platform enabling faster deployment and more reliable agent behavior.",
    },
    {
      year: "2023",
      title: "200+ Projects Delivered",

      desc: "Crossed the milestone of 200 successful AI project deliveries with a 98% client satisfaction rate and documented ROI generated for our clients.",
    },
  ];

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto mb-6 sm:mb-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <span className="text-cyan-400 border border-cyan-500 px-4 py-1 rounded-full text-xs tracking-wide">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Why Choose <span className="text-cyan-400">AgenticAI</span> <br />
            Tech Hub?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl">
            We combine deep technical expertise with a strategic business
            perspective to deliver AI solutions that create measurable,
            auditable impact.
          </p>

          <p className="text-gray-500 mt-4 max-w-xl text-sm">
            Our team has built and deployed AI systems across finance,
            healthcare, logistics, retail, and more — bringing cross-industry
            patterns that drive engagement and innovation.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-cyan-400 mt-1 flex-shrink-0"
                />
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={openQuote}
            className="mt-10 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-medium"
          >
            Work With Us
            <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          <img
            src={aboutImage.src}
            alt="About AgenticAI"
            className="w-full max-w-[480px] h-auto object-contain rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      {/* our story */}
      <div className="max-w-4xl mt-6 sm:mt-12 mx-auto text-center">
        {/* Badge */}
        <div className="inline-block border border-cyan-500/40 text-cyan-400 text-xs tracking-wider px-4 py-1 rounded-full mb-6">
          OUR STORY
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          A Decade of <span className="text-cyan-400">Building AI</span>
        </h2>

        {/* Content */}
        <div className="mt-10 space-y-6 text-gray-400 text-sm md:text-base leading-relaxed text-left md:text-center">
          <p>
            AgenticAI Tech Hub was founded in 2014 by a team of ML researchers
            and software engineers who believed — before it was obvious — that
            machine intelligence would eventually power every knowledge workflow
            in the global economy. We started by building custom ML models for
            fintech startups in San Francisco, developing a reputation for
            shipping production-reliable AI in tight timelines.
          </p>

          <p>
            The emergence of large language models changed everything. When
            GPT-3 launched in 2020, we immediately recognized that the
            abstraction level of AI had shifted permanently — and we pivoted our
            entire practice toward the agentic paradigm. We built our
            proprietary agent development platform before any commercial
            alternatives existed, and began deploying autonomous agents for
            enterprise clients at a time when most organizations were still
            skeptical that it was possible.
          </p>

          <p>
            Today, we are a team of 80+ AI specialists, ML engineers, and
            strategic advisors who have delivered hundreds of AI transformations
            across major industries. Our mission remains the same — to help
            organizations harness the full power of AI and create measurable
            impact.
          </p>
        </div>
      </div>

      <section
        ref={ref}
        className="py-20 lg:py-28  rounded-3xl mx-4 md:mx-8 lg:mx-12"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 relative" ref={lineRef}>
            {/* Connecting line that draws in */}
            <div
              className="hidden lg:block absolute top-[34px] left-[12%] right-[12%] h-[2px] bg-primary/20 origin-left transition-transform duration-[1.5s] ease-out"
              style={{
                transform: lineVisible ? "scaleX(1)" : "scaleX(0)",
                transitionDelay: "0.3s",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center"
                  data-reveal="fade-up"
                  style={
                    { "--delay": `${300 + i * 200}ms` } as React.CSSProperties
                  }
                >
                  <div className="relative z-10 flex items-center justify-center w-[68px] h-[68px] rounded-full bg-cyan-500 border-2 border-primary/25 mb-5 hover:border-primary hover:shadow-md transition-all duration-400 group shadow-lg shadow-cyan-500/40 ">
                    <span className="">{step.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* our people */}
      {/* <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 border border-cyan-400/30 px-4 py-1 rounded-full text-xs tracking-widest">
              OUR PEOPLE
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Meet Our <span className="text-cyan-400">Experts</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Our leadership team combines world-class research credentials with
              hands-on production engineering experience and strategic business
              acumen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#020c1b] border border-cyan-500/20 rounded-xl p-8 text-center hover:border-cyan-400/40 transition duration-300"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold mb-6">
                  {member.initials}
                </div>

                <h3 className="text-lg font-semibold">{member.name}</h3>

                <p className="text-cyan-400 text-sm mt-1">{member.role}</p>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div> */}

      {/* core value */}
      <div className="max-w-7xl mx-auto mt-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 border border-cyan-400/40 px-4 py-1 rounded-full text-xs tracking-widest">
            WHAT DRIVES US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Our Core <span className="text-cyan-400">Values</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            These four principles govern every decision we make — from which
            clients we work with to how we design technical architectures.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="bg-[#020c1b] border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="bg-[#021a2e] p-3 rounded-lg border border-cyan-500/30">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
