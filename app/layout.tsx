import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})


export const metadata: Metadata = {
  title: 'apt. Ufairah Norazizah, S.Farm. | Portofolio Apoteker',
  description: 'Apoteker | Industri Farmasi, Farmasi Klinik & Distribusi Obat | Lulusan Terbaik 1 Profesi Apoteker — Universitas Borneo Lestari',
  keywords: ['Ufairah Norazizah', 'Apoteker', 'Farmasi Klinik', 'Industri Farmasi', 'CPOB', 'CDOB', 'Universitas Borneo Lestari', 'RSUD Ulin', 'Patient Safety'],
  openGraph: {
    title: 'apt. Ufairah Norazizah, S.Farm. | Portofolio Apoteker',
    description: 'Apoteker | Industri Farmasi, Farmasi Klinik & Distribusi Obat',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
                try {
                  if (sessionStorage.getItem('intro-seen')) {
                    document.documentElement.classList.add('intro-done', 'hero-go');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
