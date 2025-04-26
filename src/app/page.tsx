"use client"

import ChatButton from "@/components/ChatButton"
import Description from "@/components/Description"
import Footer from "@/components/Footer"
import Logo from "@/components/Logo"
import Title from "@/components/Title"
import TwitterFeed from "@/components/TwitterFeed"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-7 items-center justify-center px-4 py-10 bg-black text-white text-center">
      <Logo />
      <Title />
      <Description />
      <ChatButton />
      <TwitterFeed />
      <Footer />
    </main>
  )
}
