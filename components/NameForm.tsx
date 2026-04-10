"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import VibeSelector from "./VibeSelector";
import { USE_CASE_OPTIONS, UserFormData } from "@/types";
import { cn } from "@/lib/utils";

export default function NameForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<UserFormData>({
    englishName: "",
    desiredVibe: "",
    aboutYou: "",
    useCase: "",
  });
  const [errors, setErrors] = useState<Partial<UserFormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<UserFormData> = {};
    if (!formData.englishName.trim()) {
      newErrors.englishName = "Please enter your name";
    }
    if (!formData.desiredVibe) {
      newErrors.desiredVibe = "Please select a vibe";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Save form data to sessionStorage for API call
      sessionStorage.setItem("nameFormData", JSON.stringify(formData));
      router.push("/result");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* English Name */}
      <div className="space-y-3">
        <Label htmlFor="englishName" className="text-white font-medium">
          English Name <span className="text-[#A78BFA]">*</span>
        </Label>
        <Input
          id="englishName"
          placeholder="Enter your first name"
          value={formData.englishName}
          onChange={(e) =>
            setFormData({ ...formData, englishName: e.target.value })
          }
          className={cn(
            "h-12 text-base rounded-lg border-[#2D2D3A] bg-[#272732] text-white placeholder:text-[#64748B] focus:border-[#A78BFA] focus:ring-[#A78BFA]/20",
            errors.englishName && "border-[#EF4444]"
          )}
        />
        {errors.englishName && (
          <p className="text-sm text-[#EF4444]">{errors.englishName}</p>
        )}
      </div>

      {/* Desired Vibe */}
      <div className="space-y-3">
        <Label className="text-white font-medium">
          Desired Vibe <span className="text-[#A78BFA]">*</span>
        </Label>
        <VibeSelector
          value={formData.desiredVibe}
          onChange={(value) => setFormData({ ...formData, desiredVibe: value })}
        />
        {errors.desiredVibe && (
          <p className="text-sm text-[#EF4444]">{errors.desiredVibe}</p>
        )}
      </div>

      {/* About You */}
      <div className="space-y-3">
        <Label htmlFor="aboutYou" className="text-white font-medium">
          About You <span className="text-[#64748B]">(Optional)</span>
        </Label>
        <Textarea
          id="aboutYou"
          placeholder="Tell us about your personality, interests, or story."
          value={formData.aboutYou}
          onChange={(e) =>
            setFormData({ ...formData, aboutYou: e.target.value })
          }
          className={cn(
            "min-h-[120px] text-base rounded-lg border-[#2D2D3A] bg-[#272732] text-white placeholder:text-[#64748B] focus:border-[#A78BFA] focus:ring-[#A78BFA]/20 resize-none"
          )}
        />
      </div>

      {/* Use Case */}
      <div className="space-y-3">
        <Label className="text-white font-medium">
          Use Case <span className="text-[#64748B]">(Optional)</span>
        </Label>
        <RadioGroup
          value={formData.useCase}
          onValueChange={(value) => setFormData({ ...formData, useCase: value })}
          className="flex flex-col space-y-3"
        >
          {USE_CASE_OPTIONS.map((option) => (
            <div
              key={option.value}
              className={cn(
                "flex items-center space-x-3 p-4 rounded-lg border transition-all cursor-pointer",
                formData.useCase === option.value
                  ? "border-[#A78BFA] bg-[#7C3AED]/10"
                  : "border-[#2D2D3A] bg-[#272732] hover:border-[#64748B]"
              )}
              onClick={() => setFormData({ ...formData, useCase: option.value })}
            >
              <RadioGroupItem
                value={option.value}
                id={option.value}
                className="border-[#64748B] text-[#A78BFA]"
              />
              <Label
                htmlFor={option.value}
                className="text-white cursor-pointer flex-1"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-12 bg-[#A78BFA] hover:bg-[#818CF8] text-[#0F0F1A] font-semibold rounded-lg transition-colors"
      >
        Generate My Chinese Name
      </Button>
    </form>
  );
}
