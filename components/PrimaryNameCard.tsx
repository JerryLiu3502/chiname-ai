"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryName } from "@/types";

interface PrimaryNameCardProps {
  name: PrimaryName;
}

export default function PrimaryNameCard({ name }: PrimaryNameCardProps) {
  return (
    <Card className="p-8 bg-[#1C1B24] border-[#2D2D3A] rounded-2xl">
      {/* Header */}
      <p className="text-sm text-[#64748B] mb-4">
        Your best Chinese name match
      </p>

      {/* Chinese Name */}
      <div className="text-6xl font-bold text-white mb-2 tracking-wider">
        {name.name}
      </div>

      {/* Pinyin */}
      <div className="text-xl text-[#A78BFA] mb-6 font-medium">
        {name.pinyin}
      </div>

      {/* Meaning */}
      <div className="mb-6">
        <Badge className="bg-[#7C3AED]/20 text-[#A78BFA] px-4 py-1.5 rounded-full text-sm font-medium border-0">
          Meaning: {name.meaning}
        </Badge>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#2D2D3A] my-6" />

      {/* Why it fits you */}
      <div className="text-left">
        <p className="text-sm font-medium text-[#64748B] mb-2 uppercase tracking-wide">
          Why it fits you
        </p>
        <p className="text-[#94A3B8] leading-relaxed">{name.reason}</p>
      </div>
    </Card>
  );
}
