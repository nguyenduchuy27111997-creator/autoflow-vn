export default function StepList({
  steps,
}: {
  steps: { title: string; desc: string }[];
}) {
  return (
    <div className="my-8 space-y-4 not-prose">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="w-8 h-8 min-w-[32px] rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-sm text-primary">
            {i + 1}
          </div>
          <div>
            <div className="font-display font-bold text-sm text-slate-900">{step.title}</div>
            <p className="text-sm text-slate-500 leading-relaxed mt-0.5">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
