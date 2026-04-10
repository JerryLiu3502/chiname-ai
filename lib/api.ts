import { NameResult, UserFormData } from "@/types";
import { generatePrompt } from "./prompt";

const API_KEY = process.env.SILICONFLOW_API_KEY || "";
const API_URL = "https://api.siliconflow.cn/v1/chat/completions";
const MODEL = "Pro/zai-org/GLM-4.7";

export async function generateChineseName(
  data: UserFormData
): Promise<NameResult> {
  const prompt = generatePrompt(data);

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a professional Chinese naming consultant. Always respond with valid JSON in the exact format requested.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const result = await response.json();
  const content = result.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("No content in API response");
  }

  // Try to extract JSON from the response
  let jsonStr = content;
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    jsonStr = jsonMatch[0];
  }

  try {
    const parsed = JSON.parse(jsonStr);
    return {
      primary: {
        name: parsed.primary?.name || "未知",
        pinyin: parsed.primary?.pinyin || "未知",
        meaning: parsed.primary?.meaning || "无",
        reason: parsed.primary?.reason || "无",
      },
      alternatives: (parsed.alternatives || []).slice(0, 2).map((alt: { name?: string; pinyin?: string; reason?: string }) => ({
        name: alt.name || "未知",
        pinyin: alt.pinyin || "未知",
        reason: alt.reason || "无",
      })),
    };
  } catch {
    throw new Error("Failed to parse API response as JSON");
  }
}
