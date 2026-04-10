import { UserFormData } from "@/types";

export function generatePrompt(data: UserFormData): string {
  const { englishName, desiredVibe, aboutYou, useCase } = data;

  return `You are a professional Chinese naming consultant helping foreigners find authentic Chinese names.

Based on the user's information below, generate 1 primary Chinese name and 2 alternative names that are:
- Natural and commonly used in China
- Meaningful and culturally appropriate
- Easy to pronounce for non-Chinese speakers
- Suitable for the intended use case

User Information:
- English Name: ${englishName}
- Desired Vibe: ${desiredVibe}${aboutYou ? `\n- About them: ${aboutYou}` : ""}${useCase ? `\n- Use Case: ${useCase}` : ""}

IMPORTANT RULES:
- NEVER use random character combinations
- NEVER use rare or obscure characters
- NEVER use names that sound like offensive words in Chinese
- ALWAYS ensure names sound natural and are appropriate
- Each name MUST have a meaningful explanation

Response Format (MUST follow this exact JSON format):
{
  "primary": {
    "name": "中文名",
    "pinyin": "Pinyin with tones",
    "meaning": "Brief meaning of the name",
    "reason": "Why this name fits the user based on their personality/vibe"
  },
  "alternatives": [
    {
      "name": "中文名",
      "pinyin": "Pinyin with tones",
      "reason": "Why this is a good alternative"
    },
    {
      "name": "中文名",
      "pinyin": "Pinyin with tones",
      "reason": "Why this is a good alternative"
    }
  ]
}

Generate the names now:`;
}
