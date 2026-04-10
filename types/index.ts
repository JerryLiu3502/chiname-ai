export interface PrimaryName {
  name: string;
  pinyin: string;
  meaning: string;
  reason: string;
}

export interface AlternativeName {
  name: string;
  pinyin: string;
  reason: string;
}

export interface NameResult {
  primary: PrimaryName;
  alternatives: AlternativeName[];
}

export interface UserFormData {
  englishName: string;
  desiredVibe: string;
  aboutYou: string;
  useCase: string;
}

export const VIBE_OPTIONS = [
  { value: "warm", label: "Warm", icon: "❤️" },
  { value: "intelligent", label: "Intelligent", icon: "🧠" },
  { value: "elegant", label: "Elegant", icon: "✨" },
  { value: "strong", label: "Strong", icon: "💪" },
  { value: "creative", label: "Creative", icon: "🎨" },
  { value: "calm", label: "Calm", icon: "🧘" },
  { value: "friendly", label: "Friendly", icon: "🤗" },
  { value: "modern", label: "Modern", icon: "🚀" },
] as const;

export const USE_CASE_OPTIONS = [
  { value: "daily", label: "Daily use" },
  { value: "work", label: "Work / Business" },
  { value: "social", label: "Social / Online" },
] as const;
