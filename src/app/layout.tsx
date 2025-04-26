import "./globals.css"

export const metadata = {
  title: "FURIA Chatbot",
  description: "Converse com o bot oficial da FURIA Esports"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="font-sans dark:bg-black">{children}</body>
    </html>
  )
}
