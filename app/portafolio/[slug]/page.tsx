import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { portfolioProjects } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProyectoDetallePage({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find((item) => item.slug === params.slug);

  if (!project) return notFound();

  return (
    <Container className="py-14">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <Image src={project.image} alt={project.title} width={1100} height={720} className="glass rounded-3xl object-cover" />
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-axis-orange">{project.category}</p>
          <h1 className="text-3xl font-semibold">{project.title}</h1>
          <p className="text-white/75">{project.summary}</p>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
            <p>Material: <span className="text-white">{project.material}</span></p>
            <p>Tiempo estimado: <span className="text-white">{project.time}</span></p>
            <p>Categoría: <span className="text-white">{project.category}</span></p>
          </div>
          <Button href="/comienza">Comienza tu proyecto</Button>
        </div>
      </div>
    </Container>
  );
}
