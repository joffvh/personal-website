import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { JsonLd } from '@/components/JsonLd'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jenoffvanhulle.com'),
  title: {
    template: '%s - Jenoff Van Hulle',
    default: 'Jenoff Van Hulle - Technical Marketer & AI Engineer',
  },
  description:
    'I’m Jenoff, a technical marketer and engineer. I help organizations organize their digital marketing smarter by combining strategic thinking with hands-on execution in AI and automation.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: 'Jenoff Van Hulle - Technical Marketer & AI Engineer',
    description:
      'I bridge the gap between Digital Marketing and AI Engineering. Strategic consulting, AI agents, and marketing automation.',
    url: 'https://www.jenoffvanhulle.com',
    siteName: 'Jenoff Van Hulle',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jenoff Van Hulle - Technical Marketer & AI Engineer',
    description:
      'I bridge the gap between Digital Marketing and AI Engineering. Strategic consulting, AI agents, and marketing automation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <JsonLd />
      </body>
    </html>
  )
}

