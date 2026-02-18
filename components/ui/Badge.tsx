import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80', className)}>{children}</span>;
}
