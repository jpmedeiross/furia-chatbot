import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <Image
        src="/Furia_Esports_logo.png"
        alt="Logo da FURIA"
        width={140}
        height={140}
        className="shadow-lg"
      />
      <h1 className="text-4xl font-bold">Bem-vindo ao FURIA Chatbot</h1>
      <Link
        href="/chat"
        className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
      >
        Começar Chat
      </Link>
    </main>
  )
}
