import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQROnet - Book 1:1 Calls with Elite CEOs',
  description: 'Transform your business with expert guidance. Book direct calls with successful CEOs who have built and scaled companies. Pay per call, no commitments.',
  keywords: ['CEO advisory', 'business consulting', 'executive mentorship', 'startup advice', 'business growth'],
  authors: [{ name: 'AQROnet' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aqronet.com',
    siteName: 'AQROnet',
    title: 'AQROnet - Expert CEO Advisory Calls',
    description: 'Transform your business with expert guidance from successful CEOs',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2070&q=80',
        width: 1200,
        height: 630,
        alt: 'AQROnet CEO Advisory Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQROnet - Expert CEO Advisory Calls',
    description: 'Transform your business with expert guidance from successful CEOs',
    images: ['https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2070&q=80'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}