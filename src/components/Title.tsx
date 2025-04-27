"use client"
import { motion } from "framer-motion"

export default function Title() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="font-bebas text-4xl sm:text-5xl font-semibold text-white"
    >
      Bem-vindo ao Chatbot Oficial da FURIA
    </motion.h1>
  )
}
