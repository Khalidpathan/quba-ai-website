import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Kern Regular font
const kernStandard = localFont({
  src: [
    {
      path: './fonts/Kern Standard.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-kern-standard',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'QubaAI | Transforming Business with Artificial Intelligence',
  description: 'Leading AI agency specializing in machine learning, automation, and intelligent solutions for modern businesses.',
  keywords: 'AI, artificial intelligence, machine learning, automation, business solutions',
  icons: {
    icon: '/Quba Logo.png',
    shortcut: '/Quba Logo.png',
    apple: '/Quba Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${kernStandard.variable} scroll-smooth`}>
      <body className="font-sans bg-dark-400 text-white antialiased">
        <div className="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-200">
          {children}
        </div>
      </body>
    </html>
  )
}
