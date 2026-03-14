"use client";

import {
  Bot,
  BrainCircuit,
  Zap,
  CheckCircle,
  Lightbulb,
  CodeXml,
  ChartColumn,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Build custom autonomous agents that perceive, reason, and act on your behalf — from simple task bots to complex multi-agent orchestration systems. Our agents use state-of-the-art LLMs as their cognitive backbone, combined with structured memory, tool-use, and planning modules. We design agents that can handle open-ended goals, break them into sub-tasks, and recover gracefully from failure. Every agent is rigorously tested against adversarial inputs before production deployment.",
    points: [
      "Multi-agent orchestration & coordination",
      "Tool-use, memory & context management",
      "Custom API and system integrations",
      "Production monitoring & self-healing",
    ],
  },
  {
    icon: BrainCircuit,
    title: "LLM Integration",
    description:
      "Seamlessly integrate large language models like GPT-4, Claude, Gemini, and Llama into your products with fine-tuning, RAG pipelines, and enterprise-grade prompt engineering. We handle the entire integration lifecycle: model selection, prompt optimization, context window management, cost control, and fallback routing. Our RAG implementations consistently outperform vanilla LLM responses by 35–55% on factual accuracy benchmarks. We also support hybrid architectures that combine multiple models for different subtasks.",
    points: [
      "RAG pipeline design & optimization",
      "Multi-model routing & fallback logic",
      "Fine-tuning on proprietary data",
      "Prompt versioning & A/B testing",
    ],
  },
  {
    icon: Zap,
    title: "Autonomous Workflows",
    description:
      "Design and deploy end-to-end automated workflows that eliminate manual tasks, reduce human error, and scale your operations without added headcount. We map your existing processes, identify automation opportunities, and build event-driven pipelines that trigger, branch, and complete without human intervention. Our workflow automation clients report an average of 68% reduction in process cycle time within the first 60 days. We integrate with over 200 enterprise SaaS platforms out of the box.",
    points: [
      "Event-driven pipeline architecture",
      "200+ SaaS platform connectors",
      "Human-in-the-loop escalation paths",
      "Workflow analytics & optimization",
    ],
  },
  {
    icon: Lightbulb,
    title: "AI Consulting",
    description:
      "Strategic guidance for your entire AI journey — from opportunity assessment and use-case prioritization to technology selection, roadmap design, and organizational change management. Our consultants have advised Fortune 500 companies and Series A startups alike, bringing pattern-matched insights from 200+ deployments. We deliver brutally honest assessments: if AI is not the right solution for a given problem, we will tell you. Our goal is measurable ROI, not project revenue.",
    points: [
      "AI readiness assessment & gap analysis",
      "Use-case prioritization & ROI modeling",
      "Technology selection & vendor evaluation",
      "Change management & team enablement",
    ],
  },
  {
    icon: CodeXml,
    title: "ML Engineering",
    description:
      "Production-grade machine learning pipelines that take you from raw data to continuously improving deployed models. We handle every stage: data ingestion, feature engineering, model training, evaluation, experiment tracking, deployment, and monitoring. Our MLOps practices ensure your models stay accurate as data distributions shift. We build on proven platforms including SageMaker, Vertex AI, and Azure ML, with full CI/CD pipelines for safe, automated model promotion.",
    points: [
      "End-to-end MLOps pipeline design",
      "Feature stores & data versioning",
      "Model evaluation & bias auditing",
      "Continuous training & drift detection",
    ],
  },
  {
    icon: ChartColumn,
    title: "Data Intelligence",
    description:
      "Transform raw organizational data into a strategic asset with advanced analytics, BI dashboards, predictive models, and real-time intelligence platforms. We design data architectures that unify your siloed sources, build semantic layers that make data accessible to non-technical users, and create AI-powered analytics that surface insights proactively rather than waiting for manual queries. Our clients move from reactive reporting to predictive decision-making within 12 weeks.",
    points: [
      "Unified data lakehouse architecture",
      "Semantic layer & self-serve analytics",
      "Predictive & prescriptive modeling",
      "Real-time streaming intelligence",
    ],
  },
];

export default function AIServices() {
  return (
    <section className="relative py-24 bg-[#020617] text-white overflow-hidden">
      {/* background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0ea5e933_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
            What We Do
          </p> */}
          <span className="text-xs tracking-widest text-cyan-400 border border-cyan-400/30 px-3  py-1 rounded-full">
            WHAT WE DO
          </span>

          <h2 className="text-4xl mt-3 md:text-5xl font-bold">
            Our <span className="text-cyan-400">AI Services</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            End-to-end agentic AI solutions tailored to your business goals —
            from strategy through production deployment and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-[#020617]/60 backdrop-blur border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]"
              >
                {/* icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-500/10 mb-6">
                  <Icon className="text-cyan-400 w-6 h-6" />
                </div>

                {/* title */}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                {/* description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* points */}
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle className="text-cyan-400 w-4 h-4 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full  mt-14 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="text-center my-16">
        {/* <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
            What We Do
          </p> */}
        <span className="text-xs tracking-widest text-cyan-400 border border-cyan-400/30 px-3  py-1 rounded-full">
          IN DEPTH
        </span>

        <h2 className="text-4xl mt-3 md:text-5xl font-bold">
          Our Core <span className="text-cyan-400">Capabilities</span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          A closer look at three of our most transformative service lines — what
          we do, how we do it, and why it works.
        </p>
      </div>
      {/* first box */}
      <div className="max-w-7xl mx-auto  px-4 grid lg:grid-cols-2 gap-16 items-start mt-14">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-xs tracking-widest text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full">
            CORE CAPABILITY
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            AI Agent Development
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Autonomous AI agents represent a fundamental shift in how software
            delivers value. Unlike traditional applications that execute
            deterministic logic, agents perceive their environment, reason about
            goals, form plans, and take sequences of actions to achieve
            outcomes. At AgenticAI Tech Hub, we have been building production
            agents since the earliest viable LLM APIs, accumulating a depth of
            experience that separates genuinely capable agents from impressive
            demos.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Our agent development methodology starts with a rigorous
            specification of the agent's goal space, tool inventory, and failure
            modes. We use structured prompting frameworks combined with
            code-execution capabilities to give agents reliable, verifiable
            outputs rather than free-form text. Memory architectures combining
            working memory, episodic memory, and semantic retrieval enable
            agents to maintain context across long task horizons without losing
            coherence.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We take quality assurance seriously at every layer. Every agent we
            ship undergoes red-team testing, adversarial prompt injection
            analysis, and load testing before production. Post-deployment, our
            observability stack tracks every agent action with full replay
            capability so you can audit exactly what your agent did and why. We
            continue supporting agents in production for as long as you need us.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#030b1c] border border-cyan-900/40 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/20">
              <Bot className="text-cyan-400" size={28} />
            </div>

            <h3 className="text-xl font-semibold">AI Agent Development</h3>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-gray-400">Average delivery time</span>
              <span className="text-cyan-400 font-medium">6 weeks</span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-gray-400">Typical ROI horizon</span>
              <span className="text-cyan-400 font-medium">&lt; 3 months</span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-gray-400">Client satisfaction</span>
              <span className="text-cyan-400 font-medium">98%</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Uptime SLA</span>
              <span className="text-cyan-400 font-medium">99.9%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  mt-14 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
      {/* second box */}
      <div className="max-w-7xl mx-auto  px-4 grid lg:grid-cols-2 gap-16 items-start mt-14">
        {/* LEFT CONTENT */}
        <div className="bg-[#030b1c] border border-cyan-900/40 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/20">
              <BrainCircuit className="text-cyan-400" size={28} />
            </div>

            <h3 className="text-xl font-semibold">AI Agent Development</h3>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-gray-400">Average delivery time</span>
              <span className="text-cyan-400 font-medium">10 weeks</span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-gray-400">Typical ROI horizon</span>
              <span className="text-cyan-400 font-medium">&lt; 4 months</span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-gray-400">Client satisfaction</span>
              <span className="text-cyan-400 font-medium">98%</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Uptime SLA</span>
              <span className="text-cyan-400 font-medium">99.9%</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div>
          <span className="text-xs tracking-widest text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full">
            DEEP INTEGRATION
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            LLM Integration
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Integrating a large language model into an enterprise product is far
            more complex than calling an API. Token economics, latency
            requirements, context window management, hallucination mitigation,
            and graceful degradation all require careful engineering. Our LLM
            integration team has shipped integrations for clients ranging from
            solo-founder startups to Fortune 100 companies, and we bring that
            accumulated knowledge to every new project.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Retrieval-Augmented Generation (RAG) is our most requested
            capability. We design RAG systems that go well beyond naive vector
            search — incorporating hybrid retrieval, re-ranking, contextual
            compression, and confidence scoring to deliver answers that are not
            just relevant but demonstrably accurate. Our RAG implementations
            include automatic citation tracking so users can verify every claim
            the system makes, a critical requirement for regulated industries.
          </p>

          <p className="text-gray-400 leading-relaxed">
            For clients with proprietary domain data, fine-tuning consistently
            outperforms prompt engineering for specialized tasks. We manage the
            entire fine-tuning lifecycle: dataset curation, training
            infrastructure, evaluation, and safe deployment using blue-green
            rollout strategies. We track model performance over time and trigger
            retraining automatically when drift is detected, ensuring your
            models improve continuously rather than degrading silently.
          </p>
        </div>
      </div>

      <div className="w-full  mt-14 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
      {/* third box */}
      <div className="max-w-7xl mx-auto  px-4 grid lg:grid-cols-2 gap-16 items-start mt-14">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-xs tracking-widest text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full">
            PROCESS AUTOMATION
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            Autonomous Workflows
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            True workflow automation requires more than connecting APIs — it
            requires intelligence at every decision point. Our autonomous
            workflow platform combines deterministic process logic with AI
            judgment for the ambiguous cases that traditional RPA cannot handle.
            Whether it's classifying an inbound email, extracting structured
            data from an invoice, or deciding when to escalate to a human, our
            workflows handle complexity gracefully.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            We build workflows using event-driven architectures on proven
            orchestration platforms including Temporal, Prefect, and Apache
            Airflow, choosing the right tool for each client's scale and
            compliance requirements. Every workflow includes comprehensive
            logging, error handling, and dead-letter queues to ensure that no
            task is silently dropped. Retry logic and idempotency guarantees
            mean partial failures never corrupt your data.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Change is inevitable in any business, and we design workflows for
            evolution from the start. Modular step functions,
            configuration-driven behavior, and a visual workflow editor allow
            your team to update process logic without code changes. We provide
            training and documentation to make your team self-sufficient, and
            our support team is available when you need expert guidance on more
            complex modifications.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#030b1c] border border-cyan-900/40 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/20">
              <Zap className="text-cyan-400" size={28} />
            </div>

            <h3 className="text-xl font-semibold">AI Agent Development</h3>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-gray-400">Average delivery time</span>
              <span className="text-cyan-400 font-medium">8 weeks</span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-gray-400">Typical ROI horizon</span>
              <span className="text-cyan-400 font-medium">&lt; 2 months</span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-gray-400">Client satisfaction</span>
              <span className="text-cyan-400 font-medium">98%</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Uptime SLA</span>
              <span className="text-cyan-400 font-medium">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
