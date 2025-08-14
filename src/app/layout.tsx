import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'QubaAI | Transforming Business with Artificial Intelligence',
  description: 'Leading AI agency specializing in machine learning, automation, and intelligent solutions for modern businesses.',
  keywords: 'AI, artificial intelligence, machine learning, automation, business solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter bg-dark-400 text-white antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-200">
          {children}
        </div>
      </body>
    </html>
  )
}
