import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export function Button({ children, href, variant = 'primary', className, type = 'button', onClick }: Props) {
  const styles = {
    primary: 'bg-axis-orange text-white hover:brightness-110 shadow-glow',
    secondary: 'border border-white/20 bg-white/10 text-white hover:bg-white/20',
    ghost: 'text-white/80 hover:text-white'
  };

  const shared = cn(
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-200',
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={shared}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={shared} onClick={onClick}>
      {children}
    </button>
  );
}
