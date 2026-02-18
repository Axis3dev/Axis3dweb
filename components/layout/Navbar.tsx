'use client';

import { SITE_CONFIG } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/portafolio', label: 'Portafolio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre', label: 'Sobre Axis3D' }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-axis-bg/75 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center">
          <Image src={SITE_CONFIG.LOGO_DARK_BG} alt="Axis3D" width={138} height={28} className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn('text-sm text-white/75 transition hover:text-white', pathname.startsWith(link.href) && 'text-white')}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/comienza">{SITE_CONFIG.CTA_TEXTS.startProject}</Button>
        </div>

        <button className="rounded-lg p-2 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open ? (
        <div className="glass mx-3 mb-3 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/85" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button href="/comienza" className="mt-2" onClick={() => setOpen(false)}>
              {SITE_CONFIG.CTA_TEXTS.startProject}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
