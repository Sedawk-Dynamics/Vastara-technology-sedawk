import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vastara International Properties | From Ground to Growth',
  description:
    'Vastara International Properties Private Limited — Integrated real estate, land development, industrial readiness, and investment solutions across India.',
  keywords: [
    'real estate India',
    'land development',
    'farmhouse investment',
    'industrial land',
    'property investment Pune',
    'Vastara',
  ],
  openGraph: {
    title: 'Vastara International Properties',
    description: 'From Ground to Growth — Complete Development Solutions',
    url: 'https://vastarainternationalproperties.com',
    siteName: 'Vastara International Properties',
    locale: 'en_IN',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#C9A84C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-white`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
