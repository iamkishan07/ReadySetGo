export default function Badge({ text, style = "" }) {
  return (
    <span
      className={`inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors sm:px-3 sm:py-1.5 sm:text-xs ${style}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-70" />

      <span className="truncate">{text}</span>
    </span>
  );
}
