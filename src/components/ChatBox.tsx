"use client"

import { SendHorizonal } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ChatBox() {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMsg = input
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }])
    setInput("")
    setLoading(true)

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMsg })
    })

    const data = await res.json()

    setMessages((prev) => [...prev, { sender: "bot", text: data.reply }])
    setLoading(false)
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="w-full max-w-md">
      <div className="bg-white text-black p-4 rounded-md mb-4 h-80 overflow-y-auto shadow-inner space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-end gap-2 max-w-[80%] ${
                msg.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                {msg.sender === "user" ? "👤" : "🐆"}
              </div>

              <div
                className={`rounded-2xl px-4 py-2 text-sm shadow-md ${
                  msg.sender === "user"
                    ? "bg-fuchsia-100 text-fuchsia-800"
                    : "bg-blue-100 text-blue-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-gray-500 italic">FURIA está digitando...</div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="flex border rounded-lg overflow-hidden">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-3 text-black outline-none"
          placeholder="Pergunte algo sobre a FURIA..."
        />
        <button
          onClick={sendMessage}
          className="bg-fuchsia-600 text-white p-3 hover:bg-fuchsia-700"
        >
          <SendHorizonal className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
