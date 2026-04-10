"use client";

import { VIBE_OPTIONS } from "@/types";
import { cn } from "@/lib/utils";

interface VibeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function VibeSelector({ value, onChange }: VibeSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {VIBE_OPTIONS.map((vibe) => (
        <button
          key={vibe.value}
          type="button"
          onClick={() => onChange(vibe.value)}
          className={cn(
            "flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all",
            value === vibe.value
              ? "border-[#A78BFA] bg-[#7C3AED]/20"
              : "border-[#2D2D3A] bg-[#272732] hover:border-[#64748B]"
          )}
        >
          <span className="text-2xl">{vibe.icon}</span>
          <span
            className={cn(
              "text-sm font-medium",
              value === vibe.value ? "text-[#A78BFA]" : "text-[#94A3B8]"
            )}
          >
            {vibe.label}
          </span>
        </button>
      ))}
    </div>
  );
}
