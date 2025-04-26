"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ChatButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mt-8"
    >
      <Link
        href="/chat"
        className="font-inter bg-blue-950 hover:bg-blue-800 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-pulse hover:animate-none"
      >
        Começar Chat
      </Link>
    </motion.div>
  )
}
