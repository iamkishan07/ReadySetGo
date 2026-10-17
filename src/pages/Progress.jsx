import { useSelector } from "react-redux";
import DonutChart from "../components/DonutChart.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import { getStats, toPercent } from "../utils.js";
import { categoryBar } from "../constants.js";

export default function Progress() {
  const list = useSelector((state) => state.questions.list);
  const stats = getStats(list);

  return (
    <div className="mx-auto max-w-7xl pb-20 space-y-8 pb-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            PERFORMANCE OVERVIEW
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Your Progress<span className="text-blue-600">.</span>
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
            See how far you have come, celebrate your achievements, and identify
            the areas that need more practice.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-emerald-900/50 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Completed
            </p>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
            </span>
          </div>
          <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            {stats.completed}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Questions completed
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-amber-900/50 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              In progress
            </p>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
          </div>
          <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            {stats.inProgress}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Questions being practiced
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Pending
            </p>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="5" y="4" width="14" height="17" rx="2" />
                <path d="M9 4V2h6v2m-6 6h6m-6 4h6" />
              </svg>
            </span>
          </div>
          <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            {stats.pending}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Questions left to attempt
          </p>
        </div>
      </div>

      {/* Main Progress Section */}
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-5">
        {/* Overall Completion */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">
          <div className="border-b border-slate-100 px-6 py-5 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Overall completion
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Your total preparation progress.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex justify-center py-3">
              <DonutChart
                percent={stats.percent}
                done={stats.completed}
                total={stats.total}
              />
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-slate-100 pt-6 text-center dark:border-slate-800">
              <div>
                <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {stats.completed}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Completed
                </p>
              </div>

              <div>
                <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-amber-500" />
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {stats.inProgress}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  In progress
                </p>
              </div>

              <div>
                <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-slate-400" />
                <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                  {stats.pending}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Pending
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Progress */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 xl:col-span-3">
          <div className="border-b border-slate-100 px-6 py-5 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Progress by category
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Track your improvement across different skill sets.
            </p>
          </div>

          <div className="space-y-7 p-6 sm:p-8">
            {stats.byCategory.map((c) => {
              const percent = toPercent(c.done, c.total);

              return (
                <div key={c.name}>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {c.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {c.done} out of {c.total} questions completed
                      </p>
                    </div>

                    <span className="shrink-0 rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {Math.round(percent)}%
                    </span>
                  </div>

                  <ProgressBar percent={percent} color={categoryBar[c.name]} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
