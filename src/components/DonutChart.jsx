import { useId } from "react";

export default function DonutChart({ percent, done, total }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const safePercent = Math.min(100, Math.max(0, Number(percent) || 0));
  const hidden = circumference * (1 - safePercent / 100);

  const gradientId = `progressGradient-${useId().replace(/:/g, "")}`;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-48 min-w-0">
      <svg
        viewBox="0 0 176 176"
        className="h-full w-full -rotate-90 overflow-visible"
        role="img"
        aria-label={`${Math.round(safePercent)}% completed: ${done} of ${total} questions`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>

        {/* Background Ring */}
        <circle
          cx="88"
          cy="88"
          r={radius}
          fill="none"
          strokeWidth="13"
          className="stroke-slate-100 dark:stroke-slate-800"
        />

        {/* Progress Ring */}
        <circle
          cx="88"
          cy="88"
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="13"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={hidden}
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {Math.round(safePercent)}%
        </span>

        <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-xs">
          Completed
        </span>

        <div className="mt-3 h-px w-12 bg-slate-200 dark:bg-slate-700" />

        <span className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
          {done} of {total}
        </span>

        <span className="text-xs text-slate-400">questions</span>
      </div>
    </div>
  );
}
