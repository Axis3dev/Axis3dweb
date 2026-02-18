import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/lib/site';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <Container className="grid gap-6 text-sm text-white/70 md:grid-cols-3">
        <div>
          <p className="font-medium text-white">{SITE_CONFIG.BUSINESS_NAME}</p>
          <p>{SITE_CONFIG.TAGLINE}</p>
          <p>{SITE_CONFIG.ADDRESS}</p>
        </div>
        <div>
          <p className="mb-2 font-medium text-white">Navegación</p>
          <div className="flex flex-col gap-1">
            <Link href="/portafolio">Portafolio</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/sobre">Sobre Axis3D</Link>
            <Link href="/comienza">Comienza tu proyecto</Link>
          </div>
        </div>
        <div>
          <p className="mb-2 font-medium text-white">Contacto</p>
          <a href={`mailto:${SITE_CONFIG.EMAIL}`} className="block">{SITE_CONFIG.EMAIL}</a>
          <a href={`tel:${SITE_CONFIG.PHONE}`} className="block">{SITE_CONFIG.PHONE}</a>
          <a href={SITE_CONFIG.INSTAGRAM_URL} className="block">Instagram</a>
          <a href={SITE_CONFIG.TIKTOK_URL} className="block">TikTok</a>
          <a href={SITE_CONFIG.YOUTUBE_URL} className="block">YouTube</a>
        </div>
      </Container>
    </footer>
  );
}
