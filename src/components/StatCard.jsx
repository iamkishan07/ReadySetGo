import ProgressBar from "./ProgressBar.jsx";

export default function StatCard({
  title,
  value,
  suffix,
  note,
  percent,
  dot,
  bar,
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500/30 dark:hover:shadow-black/20">
      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/[0.04] blur-2xl transition-all duration-300 group-hover:bg-blue-500/[0.09]" />

      {/* Title and indicator */}
      <div className="relative mb-5 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {title}
        </p>

        <span
          className={`h-2.5 w-2.5 shrink-0 rounded-full ${dot} ring-4 ring-slate-100 dark:ring-slate-800`}
        />
      </div>

      {/* Main Value */}
      <div className="relative mb-5 flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          {value}
        </span>

        {suffix && (
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {suffix}
          </span>
        )}
      </div>

      {/* Progress */}
      <ProgressBar percent={percent} color={bar} />

      {/* Note */}
      <p className="relative mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {note}
      </p>
    </div>
  );
}
