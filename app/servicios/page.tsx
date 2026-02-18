import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

export default function ServiciosPage() {
  return (
    <Container className="py-14">
      <SectionTitle
        title="Lo que hacemos"
        description="Servicios de impresión 3D especializados para resolver tus desafíos técnicos."
      />
      <ServiceGrid />
      <div className="mt-10 text-center">
        <Button href="/comienza">Comienza tu proyecto</Button>
      </div>
    </Container>
  );
}
