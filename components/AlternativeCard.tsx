"use client";

import { Card } from "@/components/ui/card";
import { AlternativeName } from "@/types";

interface AlternativeCardProps {
  name: AlternativeName;
}

export default function AlternativeCard({ name }: AlternativeCardProps) {
  return (
    <Card className="p-6 bg-[#1C1B24] border-[#2D2D3A] rounded-xl hover:border-[#A78BFA]/50 transition-colors">
      {/* Chinese Name */}
      <div className="text-3xl font-bold text-white mb-1">
        {name.name}
      </div>

      {/* Pinyin */}
      <div className="text-sm text-[#A78BFA] mb-3 font-medium">
        {name.pinyin}
      </div>

      {/* Reason */}
      <p className="text-sm text-[#94A3B8] leading-relaxed">
        {name.reason}
      </p>
    </Card>
  );
}
