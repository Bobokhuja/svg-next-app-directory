import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'SVG Icon from remote server',
  description: 'SVG Icon from remote server',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  )
}
