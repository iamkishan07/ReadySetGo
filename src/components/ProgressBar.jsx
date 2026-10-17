export default function ProgressBar({ percent, color = "bg-blue-600" }) {
  const safePercent = Math.min(100, Math.max(0, Number(percent) || 0));

  return (
    <div
      className="h-2 w-full min-w-0 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700/80 sm:h-2.5"
      role="progressbar"
      aria-valuenow={Math.round(safePercent)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Completion progress"
    >
      <div
        className={`h-full rounded-full ${color} transition-[width] duration-700 ease-out motion-reduce:transition-none`}
        style={{ width: `${safePercent}%` }}
      />
    </div>
  );
}
