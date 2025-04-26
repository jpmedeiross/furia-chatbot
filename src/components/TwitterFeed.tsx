"use client"
import { motion } from "framer-motion"
import { Tweet } from "react-tweet"
//TODO: centralizar tweet
export default function TwitterFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="w-full max-w-2xl mt-12 flex flex-col items-center"
    >
      <h2 className="font-bebas text-2xl text-white mb-4 self-center">
        Último Post da FURIA
      </h2>
      <div className="w-full max-w-2xl space-y-4 justify-center">
        <Tweet id="1914726018440458417" />
      </div>
    </motion.div>
  )
}
