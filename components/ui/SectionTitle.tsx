import { ReactNode } from 'react';

export function SectionTitle({ eyebrow, title, description, actions }: { eyebrow?: string; title: ReactNode; description?: string; actions?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-axis-orange">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
        {description ? <p className="max-w-2xl text-white/70">{description}</p> : null}
      </div>
      {actions}
    </div>
  );
}
