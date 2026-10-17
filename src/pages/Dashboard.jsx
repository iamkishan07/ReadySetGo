import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import StatCard from "../components/StatCard.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import DonutChart from "../components/DonutChart.jsx";
import Badge from "../components/Badge.jsx";

import { getStats, toPercent } from "../utils.js";

import {
  categoryStyle,
  difficultyStyle,
  statusStyle,
  categoryBar,
} from "../constants.js";

export default function Dashboard() {
  const navigate = useNavigate();

  const list = useSelector((state) => state.questions.list);
  const machineCoding = useSelector((state) => state.questions.machineCoding);

  const stats = getStats(list);
  const recent = list.slice(0, 6);

  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl space-y-5 pb-28 sm:space-y-8 sm:pb-8">
      {/* Dashboard Header */}
      <div className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6 lg:p-8">
        <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
              <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
              YOUR PREPARATION SPACE
            </div>

            <h1 className="break-words text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Dashboard<span className="text-blue-600">.</span>
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
              Track your preparation, improve your skills, and stay consistent
              with your interview goals.
            </p>
          </div>

          <button
            onClick={() => navigate("/add")}
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:w-auto sm:hover:-translate-y-0.5"
          >
            <span className="text-lg leading-none">+</span>
            Add question
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <section className="min-w-0">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Your progress
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            A quick overview of your preparation.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition duration-200 hover:shadow-lg sm:hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
            <StatCard
              title="Total questions"
              value={stats.total}
              suffix="added"
              percent={100}
              dot="bg-blue-600"
              bar="bg-blue-600"
              note={`${stats.completed} completed, ${stats.total - stats.completed} still open`}
            />
          </div>

          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition duration-200 hover:shadow-lg sm:hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
            <StatCard
              title="DSA completed"
              value={stats.dsa.done}
              suffix={`of ${stats.dsa.total}`}
              percent={toPercent(stats.dsa.done, stats.dsa.total)}
              dot="bg-indigo-600"
              bar="bg-indigo-600"
              note={`${stats.dsa.total - stats.dsa.done} problems left in the DSA set`}
            />
          </div>

          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition duration-200 hover:shadow-lg sm:hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 sm:col-span-2 xl:col-span-1">
            <StatCard
              title="Interview questions done"
              value={stats.interviewDone}
              suffix={`of ${stats.interviewTotal}`}
              percent={toPercent(stats.interviewDone, stats.interviewTotal)}
              dot="bg-violet-600"
              bar="bg-violet-600"
              note="Git and Technical combined"
            />
          </div>
        </div>
      </section>

      {/* Machine Coding */}
      <section className="relative min-w-0 overflow-hidden rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-4 shadow-sm dark:border-amber-900/50 dark:from-amber-950/30 dark:via-slate-900 dark:to-slate-900 sm:p-6 lg:p-7">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex min-w-0 items-start gap-3 sm:gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400 sm:h-12 sm:w-12">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="16" rx="3" />
                <path d="m8 9 3 3-3 3m6 0h3" />
              </svg>
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                PRACTICAL SKILLS
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                Machine Coding
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400">
                Track your readiness for practical coding rounds and frontend
                machine coding challenges.
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 sm:w-56 sm:shrink-0">
            <p className="mb-3 break-words text-2xl font-bold text-slate-900 dark:text-white">
              {machineCoding.status}
            </p>

            <ProgressBar percent={machineCoding.percent} color="bg-amber-500" />

            <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {machineCoding.description}
            </p>
          </div>
        </div>
      </section>

      {/* Recent Questions and Analytics */}
      <div className="grid min-w-0 grid-cols-1 items-start gap-5 sm:gap-6 xl:grid-cols-3">
        {/* Recent Questions */}
        <section className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">
          <div className="flex min-w-0 items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 dark:border-slate-800 sm:px-6 sm:py-5">
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Recent questions
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Your latest practice items.
              </p>
            </div>

            <Link
              to="/tracker"
              className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-500/10 sm:px-3"
            >
              View all
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {recent.length > 0 ? (
            <div className="max-w-full overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-[minmax(180px,1fr)_100px_100px_120px] gap-3 bg-slate-50/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-800/50 dark:text-slate-400 sm:px-6">
                  <span>Question</span>
                  <span>Category</span>
                  <span>Difficulty</span>
                  <span>Status</span>
                </div>

                {recent.map((q) => (
                  <div
                    key={q.id}
                    className="grid grid-cols-[minmax(180px,1fr)_100px_100px_120px] items-center gap-3 border-t border-slate-100 px-4 py-4 transition hover:bg-slate-50/80 dark:border-slate-800 dark:hover:bg-slate-800/40 sm:px-6"
                  >
                    <span
                      className="truncate text-sm font-semibold text-slate-800 dark:text-slate-200"
                      title={q.title}
                    >
                      {q.title}
                    </span>

                    <span className="min-w-0">
                      <Badge
                        text={q.category}
                        style={categoryStyle[q.category]}
                      />
                    </span>

                    <span
                      className={`text-sm font-medium ${
                        difficultyStyle[q.difficulty] ?? ""
                      }`}
                    >
                      {q.difficulty}
                    </span>

                    <span className="min-w-0">
                      <Badge
                        text={q.status}
                        style={`${statusStyle[q.status] ?? ""} w-full`}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-5 py-12 text-center sm:px-6 sm:py-14">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                No questions yet
              </h3>

              <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                Add your first question to start tracking your progress.
              </p>

              <button
                onClick={() => navigate("/add")}
                className="mt-5 min-h-10 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Add your first question
              </button>
            </div>
          )}
        </section>

        {/* Analytics */}
        <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
          {/* Overall Completion */}
          <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Overall completion
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                How far you have come.
              </p>
            </div>

            <div className="flex min-w-0 justify-center py-2">
              <DonutChart
                percent={stats.percent}
                done={stats.completed}
                total={stats.total}
              />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Done
                  </span>
                </div>

                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {stats.completed}
                </p>
              </div>

              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    In progress
                  </span>
                </div>

                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {stats.inProgress}
                </p>
              </div>

              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Pending
                  </span>
                </div>

                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {stats.pending}
                </p>
              </div>
            </div>
          </section>

          {/* Category Progress */}
          <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                By category
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Progress across your skill sets.
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-6">
              {stats.byCategory.map((c) => (
                <div key={c.name} className="min-w-0">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="truncate text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {c.name}
                    </span>

                    <span className="shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {c.done} / {c.total}
                    </span>
                  </div>

                  <ProgressBar
                    percent={toPercent(c.done, c.total)}
                    color={categoryBar[c.name]}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
