import ChatBox from "@/components/ChatBox"
import ChatHeader from "@/components/ChatHeader"

export default function ChatPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-8 bg-gray text-white">
      <ChatHeader />
      <ChatBox />
    </main>
  )
}
