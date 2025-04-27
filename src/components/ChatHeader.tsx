"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ChatHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full flex flex-col items-center"
    >
      <Link
        href="/"
        className="absolute left-6 flex items-center gap-2 hover:underline text-gray-400 hover:text-white transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Voltar para Home
      </Link>

      <div className="mt-16 w-full max-w-3xl flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          Chat Oficial da FURIA
        </h1>

        <p className="mb-8 text-gray-400">
          Manda sua pergunta e troque ideia sobre a comunidade de CS da Furia.
        </p>
      </div>
    </motion.div>
  )
}
