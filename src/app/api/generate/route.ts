import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is missing. Please set GEMINI_API_KEY in your environment variables." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { topic, style, format, duration, language, creativity } = body;

    if (!topic || !style || !format || !duration) {
      return NextResponse.json(
        { error: "Missing required fields (topic, style, format, duration)." },
        { status: 400 }
      );
    }

    const prompt = `You are an expert Instagram Reel creator for a comedy page called "Five Stuff".
Generate a complete, structured reel package based on the following preferences:

- Topic: ${topic}
- Style: ${style}
- Format: ${format}
- Duration: ${duration}
- Language: ${language || "English"}
- Creativity Level: ${creativity || "Balanced"}

Output strictly a single JSON object matching this schema. Do not use markdown wrapping or code blocks.
{
  "hook": "string (short, attention-grabbing opening line)",
  "script": "string (short, funny, conversational script)",
  "scenes": ["string", "string"], // array of scene-by-scene visual descriptions
  "screenText": ["string", "string"], // array of short texts appearing on screen
  "voiceover": "string (the spoken voiceover script)",
  "videoPrompt": "string (A descriptive prompt for an AI video generator. Vertical 9:16, stickman style, fast pace, etc.)",
  "caption": "string (Instagram caption with emojis)",
  "hashtags": ["string", "string"] // array of hashtags, e.g., "#fivestuff"
}

Keep content clean, relatable, funny, and strictly tailored for short-form Instagram Reels.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            response_mime_type: "application/json",
            temperature: creativity === "Wild but clean" ? 0.9 : creativity === "Safe" ? 0.4 : 0.7,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to generate content from AI API." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return NextResponse.json(
        { error: "Invalid response from AI API." },
        { status: 500 }
      );
    }

    const parsedJson = JSON.parse(generatedText);

    return NextResponse.json({ result: parsedJson }, { status: 200 });
  } catch (error) {
    console.error("Generate API Route Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again or use template mode." },
      { status: 500 }
    );
  }
}
