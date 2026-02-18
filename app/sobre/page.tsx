import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SITE_CONFIG } from '@/lib/site';
import Image from 'next/image';

export default function SobrePage() {
  return (
    <Container className="py-14">
      <SectionTitle title="Sobre Axis3D" description="Axis3D nace para resolver lo que otros no pueden fabricar. Ingeniería aplicada, creatividad funcional y producción local." />
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="space-y-4 text-white/80">
          <p>Diseñamos y fabricamos soluciones impresas en 3D para industria, negocio y proyectos personalizados.</p>
          <div className="flex flex-wrap gap-2">
            <Badge>Ingeniería aplicada</Badge>
            <Badge>Creatividad funcional</Badge>
            <Badge>Producción local</Badge>
            <Badge>Respuesta rápida</Badge>
          </div>
          <Button href="/comienza" className="mt-2">Comienza tu proyecto</Button>
        </div>
        <Image src={SITE_CONFIG.WORKSHOP_IMAGE_PATH} alt="Taller Axis3D" width={900} height={640} className="glass rounded-3xl object-cover" />
      </div>
    </Container>
  );
}
