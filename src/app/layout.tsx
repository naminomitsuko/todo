import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TODOアプリ',
  description: 'Next.js で作った TODO アプリ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
