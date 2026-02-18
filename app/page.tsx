import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SITE_CONFIG } from '@/lib/site';
import Image from 'next/image';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden border-b border-white/10">
        <Image src={SITE_CONFIG.HERO_IMAGE_PATH} alt="Hero AXIS3D" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-axis-bg via-axis-bg/80 to-axis-blue/30" />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Fabricamos <span className="text-axis-orange">soluciones</span> en <span className="text-axis-orange">3D</span>.
            </h1>
            <p className="text-lg text-white/75">Prototipos, refacciones y piezas funcionales en Culiacán.</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/comienza">{SITE_CONFIG.CTA_TEXTS.startProject}</Button>
              <Button href="/portafolio" variant="secondary">{SITE_CONFIG.CTA_TEXTS.viewProjects}</Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge>Ingeniería aplicada</Badge>
              <Badge>Piezas funcionales</Badge>
              <Badge>Producción local</Badge>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Servicios" title="Lo que hacemos" description="Impresión 3D y desarrollo técnico orientado a resultados reales." />
          <ServiceGrid />
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Proceso" title="Así trabajamos contigo" />
          <ProcessTimeline />
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Portafolio" title="Proyectos recientes" actions={<Button href="/portafolio" variant="secondary">Ver portafolio</Button>} />
          <PortfolioGrid limit={8} />
        </Container>
      </section>

      <section>
        <Container>
          <div className="glass rounded-3xl px-6 py-10 text-center md:py-16">
            <h2 className="text-3xl font-semibold md:text-4xl">¿Tienes una idea que necesita hacerse real?</h2>
            <Button href="/comienza" className="mt-6 text-base">Comienza tu proyecto</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
