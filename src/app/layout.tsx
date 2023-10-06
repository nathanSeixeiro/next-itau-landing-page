import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Header } from '../components/Header';

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700']
 })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
