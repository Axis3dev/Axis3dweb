import type { Metadata } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/lib/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.BUSINESS_NAME} | ${SITE_CONFIG.TAGLINE}`,
  description: 'Prototipos, refacciones y piezas funcionales en impresión 3D en Culiacán.',
  openGraph: {
    title: `${SITE_CONFIG.BUSINESS_NAME} | Impresión 3D`,
    description: 'Servicios de impresión 3D especializados para desafíos técnicos.',
    url: SITE_CONFIG.BASE_URL,
    siteName: SITE_CONFIG.BUSINESS_NAME,
    images: [{ url: SITE_CONFIG.HERO_IMAGE_PATH, width: 1200, height: 630 }],
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
