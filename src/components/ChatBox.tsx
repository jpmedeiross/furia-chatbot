"use client"

import { motion } from "framer-motion"
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
    <div className="w-full max-w-2xl h-[75vh] flex flex-col bg-black/30 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start gap-2 max-w-[75%] ${
                msg.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                {msg.sender === "user" ? (
                  <img
                    src="/user.png"
                    alt="User"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <img
                    src="/Furia_Esports_logo.png"
                    alt="FURIA"
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              <div
                className={`rounded-2xl px-4 py-2 text-sm shadow ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </motion.div>
        ))}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.8
            }}
            className="text-gray-400 italic"
          >
            FURIA está digitando...
          </motion.div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="flex border-t border-gray-700 p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-3 bg-transparent text-white placeholder-gray-400 outline-none"
          placeholder="Pergunte algo sobre a FURIA..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition"
        >
          <SendHorizonal className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
