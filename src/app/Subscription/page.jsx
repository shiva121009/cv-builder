"use client";

import React from "react";
import { FaBolt, FaCheckCircle, FaBullseye, FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function Subscription() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] flex flex-col md:flex-row font-sans border-8 border-blue-300 rounded-3xl m-4 shadow-xl">
      {/* Left Side */}
      <div className="w-full md:w-1/2 px-10 py-14 md:py-20 md:px-16 animate-fade-in-left">
        <h2 className="text-blue-300 font-semibold text-sm mb-2 uppercase tracking-wide">
          Always land the interview
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Upgrade to Resume Worded Pro
        </h1>

        <p className="text-blue-100 text-lg mb-8 max-w-xl leading-relaxed">
          Pro gives you everything you need to write your most successful resume and stand out to hiring managers.
        </p>

        <h3 className="text-xl font-semibold text-white mb-6">What you’ll unlock with Pro:</h3>
        <ul className="space-y-5 text-blue-100 text-base">
          <li className="flex items-start gap-4">
            <FaBolt className="text-yellow-400 text-2xl mt-1 animate-pulse" />
            <span>
              <strong className="text-white">Full resume review:</strong> Spot and fix key issues <em>before</em> recruiters notice.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <FaStar className="text-blue-400 text-2xl mt-1 animate-pulse" />
            <span>
              <strong className="text-white">500+ proven bullet points:</strong> Copy the resume lines that landed top jobs.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <FaBullseye className="text-cyan-400 text-2xl mt-1 animate-pulse" />
            <span>
              <strong className="text-white">ATS optimization:</strong> Match your resume with job descriptions and get tailored templates.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <FaStar className="text-indigo-400 text-2xl mt-1 animate-pulse" />
            <span>
              <strong className="text-white">AI-powered Magic Write:</strong> Let AI suggest bullet points based on your experience.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <MdVerified className="text-sky-400 text-2xl mt-1 animate-pulse" />
            <span>
              <strong className="text-white">Upload confidently:</strong> Get over 90+ scores with unlimited uploads.
            </span>
          </li>
        </ul>

        <div className="mt-8 bg-blue-100 border border-blue-300 text-blue-900 px-5 py-4 rounded-xl text-sm font-medium shadow-inner animate-fade-in">
          ✨ <strong>You unlocked our best available discount.</strong> It will be applied at the next step.
        </div>

        <div className="mt-8">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:brightness-110 transition-all duration-300 text-white text-base px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-[#1e2d3d] flex flex-col items-center justify-center p-10 animate-fade-in-right rounded-r-3xl">
        <div className="flex items-center gap-2 text-sm text-blue-300 font-medium">
          <FaCheckCircle />
          Excellent
          <span className="text-blue-100 text-xs">4.9 out of 5 based on 500+ reviews on</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Trustpilot_logo.png" alt="Trustpilot" className="h-4" />
        </div>

        <div className="flex items-center justify-center mt-12 gap-12">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full border-4 border-red-400 w-28 h-28 flex items-center justify-center text-red-500 font-extrabold text-3xl shadow-xl animate-bounce">
              33
            </div>
            <p className="mt-3 text-sm text-blue-100">Your current resume</p>
          </div>
          <div className="text-3xl text-blue-200">⇌</div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full border-4 border-green-400 w-28 h-28 flex items-center justify-center text-green-500 font-extrabold text-3xl shadow-xl animate-bounce">
              98
            </div>
            <p className="mt-3 text-sm text-blue-100 text-center">
              After Pro: <strong>Score 90+/100</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
