"use client";

import {
  Brain,
  Database,
  Server,
  Workflow,
  TrendingUp,
  ShieldCheck,
  Stethoscope,
  ShoppingCart,
  CheckCircle,
  Building2,
  HeartPulse,
} from "lucide-react";

const llms = [
  "GPT-4o",
  "Claude 3.5 Sonnet",
  "Gemini 1.5 Pro",
  "Llama 3",
  "Mistral",
  "Command R+",
];

const orchestration = [
  "LangChain",
  "LangGraph",
  "CrewAI",
  "AutoGen",
  "LlamaIndex",
  "Haystack",
];

const vector = [
  "Pinecone",
  "ChromaDB",
  "Weaviate",
  "Qdrant",
  "pgvector",
  "Redis",
];

const infrastructure = [
  "Docker",
  "Kubernetes",
  "AWS SageMaker",
  "GCP Vertex AI",
  "FastAPI",
  "Temporal",
];

const tags = [
  "Weaviate",
  "Qdrant",
  "OpenAI",
  "LangChain",
  "CrewAI",
  "AutoGen",
  "Hugging Face",
  "PyTorch",
  "TensorFlow",
];

const process = [
  {
    id: "01",
    title: "Discovery",
    text: "We begin every engagement with a deep discovery phase designed to uncover not just the obvious pain points, but the underlying systemic opportunities that AI can unlock. Our discovery process combines structured stakeholder interviews across technical, operational, and executive levels with a hands-on technical audit of your data, systems, and existing tooling. We map your current workflows, identify bottlenecks, and model the potential ROI of AI interventions with financial rigor. Discovery typically takes 1–2 weeks and results in a clear opportunity landscape report that guides everything downstream.",
    points: [
      "Stakeholder interviews across all levels",
      "Technical audit of data and infrastructure",
      "ROI modeling and business case development",
    ],
  },
  {
    id: "02",
    title: "Strategy",
    text: "With discovery insights in hand, we design a tailored AI architecture and phased implementation roadmap that aligns with your technical constraints, risk tolerance, and business timeline. Strategy is where we make the difficult prioritization decisions: which use cases to pursue first for maximum ROI, which to defer, and which to avoid entirely. We evaluate build vs. buy decisions for every component, recommend the appropriate LLM stack for your requirements, and design the security and data architecture. The strategy deliverable is an actionable blueprint that your internal team can understand and contribute to — not a black-box plan that creates vendor dependency.",
    points: [
      "Architecture design and technology selection",
      "Use-case prioritization and phased roadmap",
      "Risk assessment and mitigation planning",
    ],
  },

  {
    id: "03",
    title: "Build",
    text: "Our build process is structured around two-week delivery sprints, each ending with working, testable software rather than documentation or slide decks. We pair our AI specialists with your engineering team to ensure knowledge transfer happens continuously throughout delivery — not just at a training session at the end. Every sprint begins with a planning session and ends with a demo and retrospective, creating a fast feedback loop that lets us course-correct early rather than late. We maintain rigorous engineering standards throughout: code review, automated testing, security scanning, and performance benchmarking are non-negotiable, not nice-to-haves.",
    points: [
      "Two-week agile sprints with working demos",
      "Paired development for knowledge transfer",
      "Automated testing and security scanning",
    ],
  },
  {
    id: "04",
    title: "Launch",
    text: "Production deployment is the beginning, not the end. Our launch process uses blue-green deployment strategies to eliminate downtime risk, with automated rollback triggers if performance degrades. We set up comprehensive observability from day one: latency dashboards, error rate alerts, model quality metrics, and business KPI tracking all go live before your users do. The first 30 days post-launch are our hypercare period, with daily standups and a dedicated on-call engineer available around the clock. We do not consider an engagement complete until your team is confident running the system independently — and our documentation and training standards ensure they always are.",
    points: [
      "Blue-green deployment with automated rollback",
      "Full observability and alerting setup",
      "30-day hypercare with daily standups",
    ],
  },
];

const success = [
  {
    icon: TrendingUp,
    category: "Financial Services",
    company: "GlobalBank Corp",
    result1: "75%",
    label1: "Faster processing",
    result2: "$4.2M",
    label2: "Annual savings",
    result3: "99.1%",
    label3: "Compliance rate",
  },
  {
    icon: Stethoscope,
    category: "Healthcare",
    company: "HealthBridge Systems",
    result1: "3.2hrs",
    label1: "Saved per clinician/day",
    result2: "31%",
    label2: "More patients seen",
    result3: "94%",
    label3: "Documentation accuracy",
  },
  {
    icon: ShoppingCart,
    category: "Retail & E-Commerce",
    company: "RetailX Group",
    result1: "40%",
    label1: "Stockout reduction",
    result2: "$3.8M",
    label2: "Inventory savings",
    result3: "22%",
    label3: "Revenue uplift",
  },
];

export default function pages() {
  return (
    <main className="bg-[#020617] text-white">
      {/* TECHNOLOGIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          {/* <p className="text-cyan-400 text-sm mb-2">OUR STACK</p> */}
          <span className="text-xs tracking-widest text-cyan-400 border border-cyan-400/30 px-3  py-1 rounded-full">
            OUR STACK
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Technologies We <span className="text-cyan-400">Work With</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We stay at the frontier, working with the latest and most powerful
            AI frameworks and infrastructure tools across the entire stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <TechCard
            icon={<Brain />}
            title="Large Language Models"
            items={llms}
          />

          <TechCard
            icon={<Workflow />}
            title="Orchestration Frameworks"
            items={orchestration}
          />

          <TechCard
            icon={<Database />}
            title="Vector & Memory"
            items={vector}
          />

          <TechCard
            icon={<Server />}
            title="Infrastructure"
            items={infrastructure}
          />
        </div>

        {/* logo infity */}

        {/* <div className="flex flex-wrap justify-center gap-3 mt-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm bg-slate-900 border border-slate-700 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          {/* <p className="text-cyan-400 text-sm">HOW WE WORK</p> */}
          <span className="text-xs tracking-widest text-cyan-400 border border-cyan-400/30 px-3  py-1 rounded-full">
            HOW WE WORK
          </span>
          <h2 className="text-4xl font-bold mt-2">
            Our <span className="text-cyan-400">Process</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A proven, repeatable methodology that takes you from initial idea to
            intelligent production-ready AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step) => (
            <div
              key={step.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-4">
                {step.id}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.text}</p>

              {/* points */}
              <ul className="space-y-3 mt-2">
                {step.points.map((point, i) => (
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
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      {/* <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm">PROOF POINTS</p>
          <h2 className="text-4xl font-bold mt-2">
            Success <span className="text-cyan-400">Stories</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Real transformations delivered for real organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {success.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-cyan-400" size={22} />
                  <p className="text-sm text-gray-400">{item.category}</p>
                </div>

                <h3 className="text-xl font-semibold mb-6">{item.company}</h3>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-cyan-400 font-bold text-lg">
                      {item.result1}
                    </p>
                    <p className="text-xs text-gray-400">{item.label1}</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-bold text-lg">
                      {item.result2}
                    </p>
                    <p className="text-xs text-gray-400">{item.label2}</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-bold text-lg">
                      {item.result3}
                    </p>
                    <p className="text-xs text-gray-400">{item.label3}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section> */}

      {/* new  */}

      {/* <section className="bg-[#020617] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
         
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
              PROOF POINTS
            </span>

            <h2 className="text-4xl font-bold mt-5">
              Success <span className="text-cyan-400">Stories</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
              Real transformations delivered for real organizations. Every
              metric below is documented and audited by the client.
            </p>
          </div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           
            <div className="bg-[#030b1c] border border-cyan-900/40 rounded-xl p-6 hover:border-cyan-500 transition">
              <div className="flex items-center gap-2 text-cyan-400 text-sm mb-3">
                <Building2 size={16} />
                Financial Services
              </div>

              <h3 className="text-lg font-semibold mb-4">GlobalBank Corp</h3>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                GlobalBank's loan origination process involved 14 manual steps
                across 6 systems, requiring 8–12 business days to complete a
                single application. The manual process created compliance risks,
                inconsistent customer experiences, and significant operational
                cost.
              </p>

              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                We designed and deployed a multi-agent system that orchestrates
                the entire loan origination workflow autonomously.
              </p>

              <div className="border-t border-slate-800 pt-4">
                <p className="text-xs text-gray-400 mb-3">RESULTS DELIVERED</p>

                <div className="grid grid-cols-3 text-center">
                  <div>
                    <p className="text-cyan-400 font-bold">75%</p>
                    <p className="text-xs text-gray-500">Faster Processing</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-bold">$4.2M</p>
                    <p className="text-xs text-gray-500">Annual Savings</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-bold">99.1%</p>
                    <p className="text-xs text-gray-500">Compliance Rate</p>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="bg-[#030b1c] border border-cyan-900/40 rounded-xl p-6 hover:border-cyan-500 transition">
              <div className="flex items-center gap-2 text-cyan-400 text-sm mb-3">
                <HeartPulse size={16} />
                Healthcare
              </div>

              <h3 className="text-lg font-semibold mb-4">
                HealthBridge Systems
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                HealthBridge's clinical teams spent an average of 3.5 hours per
                day on documentation tasks — updating patient records,
                generating referral letters, and coding diagnoses.
              </p>

              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                We built a clinical documentation AI that integrates with their
                Epic EHR to auto-generate SOAP notes and draft referral letters.
              </p>

              <div className="border-t border-slate-800 pt-4">
                <p className="text-xs text-gray-400 mb-3">RESULTS DELIVERED</p>

                <div className="grid grid-cols-3 text-center">
                  <div>
                    <p className="text-cyan-400 font-bold">3.2hrs</p>
                    <p className="text-xs text-gray-500">Saved per Clinician</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-bold">31%</p>
                    <p className="text-xs text-gray-500">More Patients Seen</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-bold">94%</p>
                    <p className="text-xs text-gray-500">
                      Documentation Accuracy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="bg-[#030b1c] border border-cyan-900/40 rounded-xl p-6 hover:border-cyan-500 transition">
              <div className="flex items-center gap-2 text-cyan-400 text-sm mb-3">
                <ShoppingCart size={16} />
                Retail & E-Commerce
              </div>

              <h3 className="text-lg font-semibold mb-4">RetailX Group</h3>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                RetailX operated 340 SKUs across 8 regional markets with manual
                inventory replenishment processes that consistently resulted in
                stockouts of high-demand items.
              </p>

              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                We deployed a demand forecasting and autonomous replenishment
                system that ingests POS data and logistics signals to generate
                accurate forecasts.
              </p>

              <div className="border-t border-slate-800 pt-4">
                <p className="text-xs text-gray-400 mb-3">RESULTS DELIVERED</p>

                <div className="grid grid-cols-3 text-center">
                  <div>
                    <p className="text-cyan-400 font-bold">40%</p>
                    <p className="text-xs text-gray-500">Stockout Reduction</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-bold">$3.8M</p>
                    <p className="text-xs text-gray-500">Inventory Savings</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-bold">22%</p>
                    <p className="text-xs text-gray-500">Revenue Uplift</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

function TechCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4 text-cyan-400">
        {icon}
        <h3 className="font-semibold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm text-gray-300 bg-slate-800 px-3 py-1 rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
