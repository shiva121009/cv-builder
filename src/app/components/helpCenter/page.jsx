"use client";

import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function HelpSearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1b2a] to-[#1b263b] text-white font-sans">
     
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 border-b border-white/10">
        <div className="text-2xl font-bold">
          <span className="text-white">RESUME</span>{" "}
          <span className="text-gray-300">WORDED</span>
        </div>
        <div className="flex space-x-6 text-sm font-medium">
          <Link href="#" className="hover:underline text-white">
            Help Center
          </Link>
          <Link href="#" className="hover:underline text-gray-300">
            Contact
          </Link>
        </div>
      </nav>

  
      <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          How can we help?
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl">
          <input
            type="text"
            placeholder="Search the knowledge base"
            className="w-full sm:w-96 px-5 py-3 text-white bg-transparent border-2 border-blue-400 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition-all">
            <FaSearch />
            <span className="font-medium">Search</span>
          </button>
        </div>
      </div>

      <div className="bg-[#1e293b] px-6 md:px-16 py-12 text-left">
        <h2 className="text-xl font-semibold text-white mb-4">
          Popular Articles
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="https://www.google.com/search?q=how+to+improve+your+resume+score"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              How to improve your resume score
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/search?q=how+magic+write+AI+resume+tool+works"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              How Magic Write works
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/search?q=understanding+ATS+and+resume+optimization"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              Understanding ATS & resume optimization
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/search?q=troubleshooting+resume+upload+issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              Troubleshooting upload issues
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
