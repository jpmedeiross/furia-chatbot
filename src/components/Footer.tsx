"use client"
import { motion } from "framer-motion"
import { Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-16 flex flex-col items-center gap-4 text-gray-400 text-sm"
    >
      <p className="font-inter text-xs sm:text-sm">Siga a FURIA</p>
      <div className="flex gap-6">
        <a
          href="https://twitter.com/furia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/furiagg/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </motion.footer>
  )
}
