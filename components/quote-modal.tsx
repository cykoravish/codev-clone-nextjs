"use client";

import { X, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // auto close after success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [success, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: "",
          service: "Quote Request",
          budget: "",
          message: `Phone: ${form.phone}\n\n${form.message}`,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#0f172a] border border-slate-800 rounded-xl p-6 shadow-xl animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h3 className="text-xl font-semibold mb-2 text-white">
          Request a Quote
        </h3>

        <p className="text-gray-400 text-sm mb-6">
          Tell us about your project and our team will contact you shortly.
        </p>

        {/* Success Message */}
        {success && (
          <div className="mb-4 rounded-lg bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 text-sm">
            ✅ Quote request sent successfully!
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 text-sm">
            ❌ Failed to send request. Please try again.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <User size={18} className="absolute left-3 top-3.5 text-gray-400" />
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              required
              className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
              required
              className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-medium transition
            ${
              loading
                ? "bg-cyan-700 cursor-not-allowed"
                : "bg-cyan-500 hover:bg-cyan-600"
            }`}
          >
            {loading && (
              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}

            {loading ? "Sending..." : "Send Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
