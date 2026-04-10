"use client";

import NameForm from "@/components/NameForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A]">
      {/* Header */}
      <header className="border-b border-[#2D2D3A]">
        <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center">
              <span className="text-white text-sm font-bold">中</span>
            </div>
            <span className="text-white font-semibold">ChineseName.ai</span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-3">
            Tell us about yourself
          </h1>
          <p className="text-[#94A3B8]">
            Help us understand you to find the perfect Chinese name
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#1C1B24] rounded-2xl p-8 border border-[#2D2D3A]">
          <NameForm />
        </div>
      </main>
    </div>
  );
}
