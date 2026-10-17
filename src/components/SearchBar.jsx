export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <svg
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>

      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search questions by title..."
        aria-label="Search questions"
        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />
    </div>
  );
}
