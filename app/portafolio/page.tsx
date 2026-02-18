import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

const filters = ['Todos', 'Prototipos', 'Refacciones', 'Industriales', 'Personalizados'];

export default function PortafolioPage({ searchParams }: { searchParams: { categoria?: string } }) {
  const category = searchParams.categoria ?? 'Todos';

  return (
    <Container className="py-14">
      <SectionTitle title="Portafolio" description="Nuestros últimos proyectos en impresión 3D." />
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <Button key={item} href={`/portafolio?categoria=${item}`} variant={category === item ? 'primary' : 'secondary'}>
            {item}
          </Button>
        ))}
      </div>
      <PortfolioGrid category={category} />
    </Container>
  );
}
