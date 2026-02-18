import { ProjectForm } from '@/components/sections/ProjectForm';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export default function ComienzaPage() {
  return (
    <Container className="py-14">
      <SectionTitle title="Comienza tu proyecto" description="Cuéntanos qué necesitas y te respondemos rápido." />
      <ProjectForm />
    </Container>
  );
}
