"use client";

import React from "react";
import { FaTools } from "react-icons/fa";
import Link from "next/link";

export default function NotAvailable() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] px-6 py-20 text-center border-4 border-blue-500 rounded-3xl m-4 shadow-2xl animate-fade-in text-white animate-fade-in">
     
      <div className="text-7xl text-blue-300 mb-8 animate-bounce drop-shadow-xl">
        <FaTools />
      </div>

     
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight animate-fade-in-down">
        Coming Soon!
      </h1>

      <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 animate-fade-in-slow">
        This feature is under construction. Our development team is working hard to bring this to life very soon! Stay tuned and thank you for your patience.
      </p>

      
      <div className="bg-blue-100/10 border border-blue-400 text-blue-200 px-6 py-4 rounded-xl text-base font-medium mb-10 shadow-md backdrop-blur-md animate-fade-in-delay">
        🚀 Estimated Release: <strong>August 2025</strong>
      </div>

    
      <Link
        href="/loggedIn"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-3 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-105 animate-fade-in"
      >
        ← Return to Dashboard
      </Link>
    </div>
  );
}
