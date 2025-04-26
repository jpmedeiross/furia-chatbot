"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Logo() {
  return (
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
  )
}
