import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  message: z.string().min(1, "Mensagem não pode ser vazia")
})

export async function POST(req: Request) {
  try {
    const { message } = schema.parse(await req.json())

    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY não definida")
      return NextResponse.json(
        { error: "Configuração de API inválida" },
        { status: 500 }
      )
    }

    const contents = [
      {
        role: "model",
        parts: [
          {
            text: "Você é o bot oficial da FURIA Esports. Responda como se fosse um fã do time, com entusiasmo e usando apenas informações úteis sobre o time de CS. Evite usar markdown."
          }
        ]
      },
      {
        role: "user",
        parts: [{ text: message }]
      }
    ]

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.9,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 512,
            stopSequences: []
          },
          safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: 3 },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: 3 },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: 3 },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: 3 }
          ]
        })
      }
    )

    if (!response.ok) {
      console.error("Erro na API do Gemini:", await response.text())
      return NextResponse.json(
        { error: "Erro ao chamar a API do Gemini" },
        { status: response.status }
      )
    }

    interface GeminiResponse {
      candidates?: { content: { parts: { text: string }[] } }[]
    }
    const data = (await response.json()) as GeminiResponse

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Desculpe, não consegui responder. Vamos tentar de novo!"

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Erro no processamento:", error)
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    )
  }
}
