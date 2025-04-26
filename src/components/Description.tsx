"use client"
import { motion } from "framer-motion"

export default function Description() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="font-inter text-lg text-gray-400 max-w-xl mt-4"
    >
      Converse com o bot oficial da FURIA, receba notícias, saiba curiosidades,
      informações do time de CS e muito mais.
    </motion.p>
  )
}
