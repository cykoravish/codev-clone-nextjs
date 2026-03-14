"use client";

// import React, { useEffect, useState } from "react"
// import { Quote } from "lucide-react"
// import { useScrollReveal } from "@/hooks/use-scroll-reveal"

import React from "react";
import { Zap, TrendingUp, Clock } from "lucide-react";

export default function WhyAi() {
  return (
    <section className="bg-[#020817] text-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-xs tracking-widest border border-cyan-500 text-cyan-400 px-4 py-2 rounded-full">
            WHY AI, WHY NOW?
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            The AI Revolution <br />
            <span className="text-cyan-400">Cannot Wait</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            We are living through the most significant technological shift since
            the internet. Foundation models have crossed capability thresholds
            that make autonomous AI agents viable for virtually every knowledge
            work domain — and the pace of improvement is accelerating, not
            slowing.
            <br />
            <br />
            Businesses that start their AI transformation today will have a
            structural advantage: better data, more refined models, and
            organizational muscle memory for AI-augmented work. Those that wait
            risk finding themselves in the position of companies that delayed
            cloud adoption — perpetually catching up.
            <br />
            <br />
            AgenticAI Tech Hub exists to make this transition accessible,
            reliable, and fast. We have done this for over 200 organizations
            across every major vertical, and we bring that accumulated knowledge
            to every engagement we take on.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-6">
          <FeatureCard
            icon={Zap}
            title="Autonomous Scale"
            text="AI agents work 24/7 without fatigue, handling thousands of concurrent tasks simultaneously. What once required entire departments now runs autonomously at a fraction of the cost, enabling organizations to scale operations without proportionally increasing headcount"
          />

          <FeatureCard
            icon={TrendingUp}
            title="Competitive Edge"
            text="Companies adopting agentic AI are outpacing competitors at an accelerating rate. Early movers are capturing market share, improving margins, and building data flywheels that compound over time — the window to act is narrower than most executives realize."
          />

          <FeatureCard
            icon={Clock}
            title="Faster Decisions"
            text="AI-powered analytics and autonomous agents compress decision cycles from weeks to seconds. Real-time intelligence, automated reporting, and intelligent orchestration mean your teams spend less time gathering data and more time acting on it."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-[#050e1f] border border-[#0b2a45] rounded-xl p-6 hover:border-cyan-400 transition">
      {/* MOBILE: vertical | DESKTOP: horizontal */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* ICON */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#071a2d] shrink-0">
          <Icon className="text-cyan-400 w-5 h-5" />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-400 mt-2 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
