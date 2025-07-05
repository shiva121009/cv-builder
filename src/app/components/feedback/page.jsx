"use client";

import React, { useState } from "react";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim().length > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1b2a] to-[#1b263b] text-white px-6 py-16 flex flex-col items-center font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">We value your feedback</h1>
      <p className="text-gray-300 text-center max-w-xl mb-10">
        Help us improve Resume Worded by sharing your thoughts, suggestions, or any
        issues you've encountered. We’re listening!
      </p>

      {submitted ? (
        <div className="bg-green-100 text-green-900 px-6 py-4 rounded-lg text-center">
          ✅ Thank you! Your feedback has been submitted.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[#1e293b] w-full max-w-2xl p-8 rounded-xl shadow-lg"
        >
          <label htmlFor="feedback" className="block text-lg font-medium mb-2">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={5}
            className="w-full bg-transparent border border-blue-400 text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us what you love, what could be better, or any bugs you've faced."
            required
          ></textarea>

          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-4 text-yellow-400 text-xl">
              <FaFrown title="Needs improvement" />
              <FaMeh title="It's okay" />
              <FaSmile title="Loved it!" />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-all"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      )}
    </div>
  );
}