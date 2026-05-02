import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RSI Tracker — Protect Your Coding Health',
  description: 'Monitor typing patterns, posture, and break frequency to prevent RSI injuries. Built for software developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="025e808b-8b0f-461b-9de0-a2046aab4e64"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
