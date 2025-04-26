"use client"

import ChatBox from "@/components/ChatBox"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-fuchsia-500 hover:underline mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Home
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Chat Oficial da FURIA
        </h1>

        <p className="text-gray-950 mb-8">
          Manda sua pergunta e troque ideia com a comunidade FURIA.
        </p>

        <ChatBox />
      </motion.div>
    </main>
  )
}
