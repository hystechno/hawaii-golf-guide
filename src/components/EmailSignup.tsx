"use client";

import React, { useState } from "react";
import { Mail, Download, X } from "lucide-react";

interface EmailSignupProps {
  variant?: "footer" | "inline" | "course-page" | "blog";
  title?: string;
  description?: string;
  buttonText?: string;
  showLeadMagnet?: boolean;
}

export default function EmailSignup({
  variant = "inline",
  title,
  description,
  buttonText = "Subscribe",
  showLeadMagnet = true,
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
      // TODO: Integrate with Mailchimp API when account is created
      // Mailchimp signup endpoint will go here
      console.log("Email captured:", email);
    }
  };

  const variants = {
    footer: "bg-gray-700 rounded-lg p-6",
    inline: "bg-emerald-50 border border-emerald-100 rounded-xl p-6 my-8",
    "course-page": "bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-6 my-8",
    blog: "bg-amber-50 border border-amber-100 rounded-xl p-6 my-8",
  };

  const titles = {
    footer: "Stay Updated",
    inline: "Get Our FREE Hawaii Golf Trip Planner",
    "course-page": "Plan Your Hawaii Golf Vacation",
    blog: "Never Miss a Post",
  };

  const descriptions = {
    footer: "Get the latest golf course updates and travel tips.",
    inline: "7-day itineraries for every island + packing checklist. Delivered to your inbox.",
    "course-page": "Download our free guide with 7-day itineraries for every island.",
    blog: "Subscribe for the latest Hawaii golf guides and course reviews.",
  };

  return (
    <>
      <div className={variants[variant]}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-600" />
              {title || titles[variant]}
            </h3>
            <p className="text-sm text-gray-600">
              {description || descriptions[variant]}
            </p>
          </div>

          {submitted ? (
            <div className="text-emerald-700 font-medium text-sm bg-emerald-100 px-4 py-2 rounded-lg">
              ✅ Thanks! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap"
              >
                {buttonText}
              </button>
            </form>
          )}
        </div>

        {showLeadMagnet && variant !== "footer" && (
          <div className="mt-4 pt-4 border-t border-emerald-100/50">
            <a
              href="/downloads/hawaii-golf-trip-planner.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Download "Hawaii Golf Trip Planner" PDF
            </a>
          </div>
        )}
      </div>

      {/* Lead Magnet Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Hawaii Golf Trip Planner
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Your complete guide to planning the perfect Hawaii golf vacation.
            </p>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">1.</span>
                <div>
                  <strong>Island Selection Guide</strong>
                  <p className="text-gray-500 text-xs">Compare all 6 islands - best courses, weather, and travel tips</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">2.</span>
                <div>
                  <strong>3 Sample Itineraries</strong>
                  <p className="text-gray-500 text-xs">Budget ($150/day), Luxury ($500+/day), and Mixed options</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">3.</span>
                <div>
                  <strong>Packing Checklist</strong>
                  <p className="text-gray-500 text-xs">Essential gear, clothing, and documents for golf in paradise</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <p className="text-sm text-amber-800 font-medium mb-3">
                📧 Enter your email above to receive the free PDF instantly.
              </p>
              <a
                href="/downloads/hawaii-golf-trip-planner.pdf"
                download
                className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 font-medium"
              >
                <Download className="w-4 h-4" />
                Or download now without email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
