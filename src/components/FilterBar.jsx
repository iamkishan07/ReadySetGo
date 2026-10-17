export default function FilterBar({
  categories,
  statuses,
  difficulties,
  category,
  status,
  difficulty,
  onCategoryChange,
  onStatusChange,
  onDifficultyChange,
  onReset,
}) {
  const selectClass =
    "block w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200";

  const labelClass =
    "mb-2 block text-xs font-semibold text-slate-500 dark:text-slate-400";

  return (
    <div className="w-full min-w-0 space-y-4">
      {/* Responsive Filters */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="min-w-0">
          <label className={labelClass}>Category</label>

          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={selectClass}
          >
            <option value="All">All Categories</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-0">
          <label className={labelClass}>Status</label>

          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className={selectClass}
          >
            <option value="All">All Statuses</option>

            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-0 sm:col-span-2 lg:col-span-1">
          <label className={labelClass}>Difficulty</label>

          <select
            value={difficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            className={selectClass}
          >
            <option value="All">All Difficulties</option>

            {difficulties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset Button */}
      <div className="flex justify-end border-t border-slate-100 pt-3 dark:border-slate-800">
        <button
          type="button"
          onClick={onReset}
          className="min-h-10 rounded-lg px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-50 active:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-500/10 dark:active:bg-blue-500/20"
        >
          Reset all filters
        </button>
      </div>
    </div>
  );
}
