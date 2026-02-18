import { Card } from '@/components/ui/Card';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/Button';

export function ServiceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Card key={service.id} className="group">
            <div className="mb-4 inline-flex rounded-xl border border-axis-orange/30 bg-axis-orange/10 p-3 text-axis-orange">
              <Icon size={20} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="mb-4 text-white/70">{service.description}</p>
            <Button href={`/portafolio?categoria=${service.title.includes('Refacciones') ? 'Refacciones' : service.title.includes('Prototipos') ? 'Prototipos' : service.title.includes('serie') ? 'Industriales' : 'Personalizados'}`} variant="secondary">
              Ver ejemplos
            </Button>
          </Card>
        );
      })}
    </div>
  );
}
