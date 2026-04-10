"use client";

import { useState, useEffect } from "react";
import { LOADING_MESSAGES } from "@/data/mockData";

export default function LoadingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
        setIsVisible(true);
      }, 300);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F1A] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-32 h-32 rounded-full bg-[#7C3AED] opacity-20 blur-[80px]" />
        <div className="absolute bottom-1/4 -right-16 w-40 h-40 rounded-full bg-[#A78BFA] opacity-20 blur-[80px]" />
      </div>

      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-[#7C3AED]/30">
          <span className="text-white text-lg font-bold">中</span>
        </div>
        <span className="text-white font-semibold text-lg">ChineseName.ai</span>
      </div>

      {/* Loading Animation */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-full border border-[#2D2D3A] flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] animate-pulse" />
        </div>
        {/* 光晕效果 */}
        <div className="absolute inset-0 rounded-full bg-[#A78BFA] opacity-20 animate-ping" />
      </div>

      {/* Loading Text */}
      <div className="h-8 flex items-center justify-center">
        <p
          className={`text-lg text-white transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {LOADING_MESSAGES[currentIndex]}
        </p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2 mt-6">
        {LOADING_MESSAGES.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#A78BFA] w-4"
                : "bg-[#2D2D3A]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
