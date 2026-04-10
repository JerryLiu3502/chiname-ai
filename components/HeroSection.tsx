"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0F0F1A] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary purple gradient */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#7C3AED] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#A78BFA] opacity-10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#6366F1] opacity-10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-[#2D2D3A]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center">
              <span className="text-white text-sm font-bold">中</span>
            </div>
            <span className="text-white font-semibold">ChineseName.ai</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-[#94A3B8] hover:text-white hover:bg-[#272732]"
              onClick={() => router.push("/create")}
            >
              Get Started
            </Button>
            <Button className="bg-[#A78BFA] hover:bg-[#818CF8] text-[#0F0F1A] font-medium">
              Try Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 border-[#2D2D3A] bg-[#1C1B24] text-[#A78BFA] text-sm font-medium"
          >
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            AI-Powered Name Generation
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find a Chinese Name
            <br />
            <span className="bg-gradient-to-r from-[#A78BFA] to-[#6366F1] bg-clip-text text-transparent">
              That Truly Fits You
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto leading-relaxed">
            Not random. Thoughtfully crafted by AI based on your personality,
            vibe, and how you want to present yourself to the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => router.push("/create")}
              size="lg"
              className="bg-[#A78BFA] hover:bg-[#818CF8] text-[#0F0F1A] font-semibold px-8 py-6 text-lg rounded-xl h-auto"
            >
              Create My Chinese Name
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#2D2D3A] bg-[#1C1B24] text-white hover:bg-[#272732] hover:text-white px-8 py-6 text-lg rounded-xl h-auto"
            >
              View Examples
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">50K+</div>
            <div className="text-sm text-[#64748B]">Names Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">4.9</div>
            <div className="text-sm text-[#64748B]">User Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-[#64748B]">Culturally Accurate</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <Card className="p-6 bg-[#1C1B24] border-[#2D2D3A] rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-[#A78BFA]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              AI-Powered Analysis
            </h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Our AI understands your personality and crafts names that match
              your unique character and desired impression.
            </p>
          </Card>

          <Card className="p-6 bg-[#1C1B24] border-[#2D2D3A] rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#22C55E]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Culturally Authentic
            </h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Every name is carefully selected to be culturally appropriate,
              meaningful, and something a native Chinese speaker would recognize.
            </p>
          </Card>

          <Card className="p-6 bg-[#1C1B24] border-[#2D2D3A] rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Instant Results
            </h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Get your personalized Chinese name in seconds with detailed
              explanations of meaning, pronunciation, and cultural significance.
            </p>
          </Card>
        </div>

        {/* Example Names Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Popular Names This Week
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-[#1C1B24] border-[#2D2D3A] rounded-xl hover:border-[#A78BFA]/50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">陈默</div>
                  <div className="text-[#A78BFA] text-sm">Chén Mò</div>
                </div>
                <Badge className="bg-[#22C55E]/20 text-[#22C55E] text-xs">
                  Popular
                </Badge>
              </div>
              <p className="text-[#94A3B8] text-sm">
                Quiet and thoughtful. Perfect for those who prefer substance over
                small talk.
              </p>
            </Card>

            <Card className="p-6 bg-[#1C1B24] border-[#2D2D3A] rounded-xl hover:border-[#A78BFA]/50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">苏晴</div>
                  <div className="text-[#A78BFA] text-sm">Sū Qíng</div>
                </div>
                <Badge className="bg-[#22C55E]/20 text-[#22C55E] text-xs">
                  Trending
                </Badge>
              </div>
              <p className="text-[#94A3B8] text-sm">
                Bright and optimistic. Ideal for friendly, approachable
                individuals.
              </p>
            </Card>

            <Card className="p-6 bg-[#1C1B24] border-[#2D2D3A] rounded-xl hover:border-[#A78BFA]/50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">安然</div>
                  <div className="text-[#A78BFA] text-sm">Ān Rán</div>
                </div>
                <Badge className="bg-[#22C55E]/20 text-[#22C55E] text-xs">
                  Popular
                </Badge>
              </div>
              <p className="text-[#94A3B8] text-sm">
                Calm and peaceful. A sophisticated choice for professionals.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-10 bg-gradient-to-br from-[#7C3AED]/20 to-[#6366F1]/20 border-[#A78BFA]/30 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Find Your Perfect Chinese Name?
            </h2>
            <p className="text-[#94A3B8] mb-8 max-w-lg mx-auto">
              Join thousands of people who have discovered their meaningful
              Chinese name with our AI-powered generator.
            </p>
            <Button
              onClick={() => router.push("/create")}
              size="lg"
              className="bg-[#A78BFA] hover:bg-[#818CF8] text-[#0F0F1A] font-semibold px-10 py-6 text-lg rounded-xl h-auto"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#2D2D3A] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center">
              <span className="text-white text-xs font-bold">中</span>
            </div>
            <span className="text-[#64748B] text-sm">
              ChineseName.ai — AI-Powered Chinese Name Generator
            </span>
          </div>
          <div className="text-[#64748B] text-sm">
            © 2024 ChineseName.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
