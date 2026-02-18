import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { portfolioProjects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export function PortfolioGrid({ category, limit }: { category?: string; limit?: number }) {
  const projects = portfolioProjects
    .filter((project) => !category || category === 'Todos' || project.category === category)
    .slice(0, limit ?? portfolioProjects.length);

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {projects.map((project) => (
        <Card key={project.slug} className="overflow-hidden p-0">
          <Image src={project.image} alt={project.title} width={640} height={400} className="h-48 w-full object-cover" />
          <div className="space-y-3 p-4">
            <Badge>{project.category}</Badge>
            <h3 className="font-semibold">{project.title}</h3>
            <Link href={`/portafolio/${project.slug}`} className="text-sm text-axis-orange">
              Ver proyecto →
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
