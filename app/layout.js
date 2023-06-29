'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'

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
      <ChakraProvider>
        <body className={inter.className}>{children}</body>
      </ChakraProvider>
    </html>
  )
}
