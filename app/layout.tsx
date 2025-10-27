import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LYTER - Coming Soon | Revolutionary Prediction Markets',
  description: 'Join the future of prediction markets with automated liquidity provision. Earn rewards as a liquidity provider while supporting decentralized trading.',
  keywords: 'prediction markets, liquidity provider, decentralized trading, automated market making, blockchain',
  authors: [{ name: 'LYTER Team' }],
  icons: {
    icon: '/LOGO_BGREM.ico',
    shortcut: '/LOGO_BGREM.ico',
    apple: '/LOGO_BGREM.png',
  },
  openGraph: {
    title: 'LYTER - Coming Soon | Revolutionary Prediction Markets',
    description: 'Join the future of prediction markets with automated liquidity provision. Earn rewards as a liquidity provider.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LYTER - Coming Soon | Revolutionary Prediction Markets',
    description: 'Join the future of prediction markets with automated liquidity provision.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
