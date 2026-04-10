import { NameResult } from "@/types";

export const mockResult: NameResult = {
  primary: {
    name: "温雅婷",
    pinyin: "Wēn Yǎtíng",
    meaning: "温柔优雅，亭亭玉立",
    reason:
      "你的个性温暖而又有内涵，这个名字既体现了你的亲和力，又展现了你的知性美。'温'代表温和友善，'雅'表示优雅得体，'婷'形容女子姿态优美。",
  },
  alternatives: [
    {
      name: "夏芷晴",
      pinyin: "Xià Zhǐqíng",
      reason: "充满活力又不失文静，适合社交场景",
    },
    {
      name: "林思悦",
      pinyin: "Lín Sīyuè",
      reason: "聪明灵动，乐观开朗的名字",
    },
  ],
};

export const LOADING_MESSAGES = [
  "Understanding your personality...",
  "Analyzing meaning and tone...",
  "Crafting natural Chinese names...",
  "Refining the best match for you...",
];

export const EXAMPLE_NAMES = [
  { name: "陈默", pinyin: "Chén Mò", desc: "Quiet and thoughtful" },
  { name: "苏晴", pinyin: "Sū Qíng", desc: "Bright and optimistic" },
  { name: "安然", pinyin: "Ān Rán", desc: "Calm and peaceful" },
];
