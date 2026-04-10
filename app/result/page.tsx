"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, RefreshCw, Check } from "lucide-react";
import PrimaryNameCard from "@/components/PrimaryNameCard";
import AlternativeCard from "@/components/AlternativeCard";
import LoadingScreen from "@/components/LoadingScreen";
import { mockResult } from "@/data/mockData";

export default function ResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(mockResult.primary.name);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  const handleRegenerate = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

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
            <span className="text-sm font-medium">Start Over</span>
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
            Your Chinese Name
          </h1>
          <p className="text-[#94A3B8]">
            Here are the names we&apos;ve crafted for you
          </p>
        </div>

        {/* Primary Name Card */}
        <div className="mb-8">
          <PrimaryNameCard name={mockResult.primary} />
        </div>

        {/* Alternative Names */}
        <div className="mb-10">
          <p className="text-sm text-[#64748B] mb-4 uppercase tracking-wide">
            Other meaningful options
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockResult.alternatives.map((alt, index) => (
              <AlternativeCard key={index} name={alt} />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleRegenerate}
            variant="outline"
            className="flex-1 h-12 border-[#2D2D3A] bg-[#1C1B24] hover:bg-[#272732] hover:border-[#64748B] text-white rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Regenerate
          </Button>
          <Button
            onClick={handleCopy}
            className="flex-1 h-12 bg-[#A78BFA] hover:bg-[#818CF8] text-[#0F0F1A] font-semibold rounded-lg transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Name
              </>
            )}
          </Button>
        </div>

        {/* Tips */}
        <div className="mt-12 p-6 bg-[#1C1B24] rounded-xl border border-[#2D2D3A]">
          <p className="text-sm font-medium text-white mb-3">
            💡 Tips for using your Chinese name
          </p>
          <ul className="text-sm text-[#94A3B8] space-y-2">
            <li>• In China, family name comes first (e.g., 温雅婷 = Wēn is the family name)</li>
            <li>• You can introduce yourself as &quot;叫我 Wēn 就好&quot;</li>
            <li>• Your Chinese name can be used on social media, work emails, and more</li>
          </ul>
        </div>

        {/* Try Again */}
        <div className="mt-8 text-center">
          <Link
            href="/create"
            className="text-[#A78BFA] hover:text-[#818CF8] text-sm font-medium transition-colors"
          >
            ← Generate another name
          </Link>
        </div>
      </main>
    </div>
  );
}
