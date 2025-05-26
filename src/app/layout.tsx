import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz']
})

// Cambia esto por tu dominio real cuando lo tengas
const baseUrl = 'https://saas-landing-page-ten-nu.vercel.app/'

export const metadata: Metadata = {
  title: 'Modern Design Tool Landing Page',
  description:
    'A modern design tool landing page built with Next.js, Tailwind CSS, and Motion.',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Modern Design Tool',
    description:
      'Beautiful, animated landing page built with modern tools like Next.js, Tailwind, and Framer Motion.',
    url: baseUrl,
    siteName: 'Modern Design Tool',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview of Modern Design Tool landing page'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Design Tool',
    description:
      'Beautiful, animated landing page built with modern tools like Next.js, Tailwind, and Framer Motion.',
    images: ['/og.jpg'],
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <div className='font-sans'>{children}</div>
      </body>
    </html>
  )
}
