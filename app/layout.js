import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Project Webpage',
  description: 'Wrote by Nandan Varma',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <title>Project Webpage</title>
      </head>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
