"use client";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  User,
  Clock,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        form.reset();
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#020617] text-white py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          <button className="border border-cyan-500 text-cyan-400 px-4 py-1 rounded-full text-xs sm:text-sm mb-6">
            GET IN TOUCH
          </button>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to Build Your{" "}
            <span className="text-cyan-400">AI Future?</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-lg text-sm sm:text-base">
            Get a free consultation with our AI experts today. We'll help you
            identify the best opportunities, design a solution, and create a
            clear roadmap for your AI transformation — with no commitment
            required.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-3 rounded-lg">
                <Mail className="text-cyan-400" size={18} />
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                info@agenticaitechhub.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-3 rounded-lg">
                <Phone className="text-cyan-400" size={18} />
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                +1 (847) 626-8545
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-3 rounded-lg">
                <MapPin className="text-cyan-400" size={18} />
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                2102 Linden LN, Palatine, IL 60067
              </p>
            </div>
          </div>

          {/* WHAT TO EXPECT */}
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 mt-10">
            <h3 className="font-semibold text-lg mb-5">What to Expect</h3>

            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex gap-3">
                <Calendar className="text-cyan-400 flex-shrink-0" size={18} />
                <p>
                  Free 30-minute consultation call with a senior AI specialist
                </p>
              </div>

              <div className="flex gap-3">
                <FileText className="text-cyan-400 flex-shrink-0" size={18} />
                <p>
                  Detailed project proposal with scope, timeline, and investment
                  within 48 hours
                </p>
              </div>

              <div className="flex gap-3">
                <User className="text-cyan-400 flex-shrink-0" size={18} />
                <p>Dedicated project manager assigned from day one</p>
              </div>

              <div className="flex gap-3">
                <Clock className="text-cyan-400 flex-shrink-0" size={18} />
                <p>
                  Weekly progress updates with live demo access throughout
                  delivery
                </p>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-6 pt-4 text-sm text-gray-400">
              <p>Office Hours: Mon–Fri, 9am–6pm PST</p>
              <p>Average response time: Under 4 hours</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
          {success && (
            <div className="mb-4 rounded-lg bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 text-sm">
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {error && (
            <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 text-sm">
              ❌ Failed to send message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-400">Full Name *</label>
              <input
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full mt-1 bg-[#020617] border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Company Name</label>
              <input
                name="company"
                type="text"
                placeholder="Acme Corp"
                className="w-full mt-1 bg-[#020617] border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email Address *</label>
              <input
                name="email"
                type="email"
                required
                placeholder="john@company.com"
                className="w-full mt-1 bg-[#020617] border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* SELECTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400">
                  Service Interest
                </label>
                <select
                  name="service"
                  className="w-full mt-1 bg-[#020617] border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none"
                >
                  <option>Select a service...</option>
                  <option>AI Development</option>
                  <option>Automation</option>
                  <option>AI Consulting</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400">Budget Range</label>
                <select
                  name="budget"
                  className="w-full mt-1 bg-[#020617] border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none"
                >
                  <option>Select budget range...</option>
                  <option>$5k - $10k</option>
                  <option>$10k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">Message *</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project..."
                className="w-full mt-1 bg-[#020617] border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 rounded-lg py-3 text-sm sm:text-base font-medium transition
  ${loading ? "bg-cyan-700 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-600"}`}
            >
              {loading && (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}

              {loading ? "Sending..." : "Send Message →"}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form you agree to our privacy policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
