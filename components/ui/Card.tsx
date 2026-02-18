import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <article className={cn('glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-axis-orange/40', className)}>{children}</article>;
}
