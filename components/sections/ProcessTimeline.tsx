import { processSteps } from '@/lib/data';

export function ProcessTimeline() {
  return (
    <div className="grid gap-4 md:grid-cols-5 md:gap-2">
      {processSteps.map((step, i) => (
        <div key={step} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
          {i < processSteps.length - 1 ? <span className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-axis-orange md:block" /> : null}
          <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-axis-orange/40 bg-axis-orange/20 text-sm font-bold text-axis-orange">
            {i + 1}
          </div>
          <p className="text-sm text-white/85">{step}</p>
        </div>
      ))}
    </div>
  );
}
