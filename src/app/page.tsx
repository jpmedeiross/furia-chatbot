"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-7 items-center justify-center px-4 py-10 bg-black text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <Image
          src="/Furia_Esports_logo.png"
          alt="Logo da FURIA"
          width={250}
          height={300}
          className="shadow-xl"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-bebas text-4xl sm:text-5xl font-semibold "
      >
        Bem-vindo ao FURIA Chatbot
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-inter text-lg text-gray-400 max-w-xl mt-4"
      >
        Converse com o bot oficial da FURIA, receba notícias, saiba
        curiosidades, informações do time de CS e muito mais.
      </motion.p>

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

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8"
      >
        <footer className="mt-16 flex flex-col items-center gap-4 text-gray-400 text-sm">
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
        </footer>
      </motion.div>
    </main>
  )
}
