'use client';

import { NAV_ORDER } from '@/lib/site';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useMemo, useRef } from 'react';

function getRank(pathname: string) {
  if (pathname === '/') return -1;
  const direct = NAV_ORDER.findIndex((route) => pathname.startsWith(route));
  return direct;
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const prevRank = useRef(getRank(pathname));

  const direction = useMemo(() => {
    const currentRank = getRank(pathname);
    const nextDirection = currentRank >= prevRank.current ? 1 : -1;
    prevRank.current = currentRank;
    return nextDirection;
  }, [pathname]);

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ x: direction * 40, opacity: 0, filter: 'blur(6px)' }}
        animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
        exit={{ x: direction * -40, opacity: 0, filter: 'blur(4px)' }}
        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
