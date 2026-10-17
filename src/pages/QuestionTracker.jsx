import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Badge from "../components/Badge.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FilterBar from "../components/FilterBar.jsx";

import { changeStatus, deleteQuestion } from "../store/questionsSlice.js";

import {
  categories,
  statuses,
  difficulties,
  categoryStyle,
  difficultyStyle,
  statusStyle,
} from "../constants.js";

export default function QuestionTracker() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const list = useSelector((state) => state.questions.list);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const visible = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return list.filter((q) => {
      const title = String(q.title ?? "").toLowerCase();
      const description = String(q.description ?? "").toLowerCase();

      const matchesSearch =
        title.includes(searchText) || description.includes(searchText);

      const matchesCategory = category === "All" || q.category === category;

      const matchesStatus = status === "All" || q.status === status;

      const matchesDifficulty =
        difficulty === "All" || q.difficulty === difficulty;

      return (
        matchesSearch && matchesCategory && matchesStatus && matchesDifficulty
      );
    });
  }, [list, search, category, status, difficulty]);

  const hasActiveFilters =
    search.trim() !== "" ||
    category !== "All" ||
    status !== "All" ||
    difficulty !== "All";

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setStatus("All");
    setDifficulty("All");
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this question?")) {
      dispatch(deleteQuestion(id));
    }
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl space-y-5 pb-20 sm:space-y-6 sm:pb-8">
      {/* Page Header */}
      <div className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6 lg:p-8">
        <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              YOUR PREPARATION
            </div>

            <h1 className="break-words text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Question Tracker
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Organize your practice, track progress, and stay consistent.
            </p>

            <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">
              <span className="text-blue-600 dark:text-blue-400">
                {visible.length}
              </span>{" "}
              {visible.length === 1 ? "question" : "questions"} shown
              <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
              {list.length} total
            </p>
          </div>

          <button
            onClick={() => navigate("/add")}
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 active:translate-y-0 sm:w-auto sm:hover:-translate-y-0.5"
          >
            <span className="text-lg leading-none">+</span>
            Add Question
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-5">
        <div className="mb-5">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Find your questions
          </h2>
          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
            Search by title or description and combine filters.
          </p>
        </div>

        <div className="min-w-0 space-y-5">
          <SearchBar value={search} onChange={setSearch} />

          <FilterBar
            categories={categories}
            statuses={statuses}
            difficulties={difficulties}
            category={category}
            status={status}
            difficulty={difficulty}
            onCategoryChange={setCategory}
            onStatusChange={setStatus}
            onDifficultyChange={setDifficulty}
            onReset={resetFilters}
          />
        </div>
      </section>

      {/* Questions List */}
      <section className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 dark:border-slate-800 sm:px-6">
          <div className="min-w-0">
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Your Questions
            </h2>
            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Update status or remove questions as needed.
            </p>
          </div>

          <span className="shrink-0 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {visible.length} items
          </span>
        </div>

        {visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-5 py-12 text-center sm:py-16">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl dark:bg-blue-500/10">
              {list.length === 0 ? "📝" : "🔎"}
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {list.length === 0
                ? "No questions added yet"
                : "No matching questions"}
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              {list.length === 0
                ? "Start building your practice list by adding your first question."
                : "Try another search term or change your filters."}
            </p>

            {list.length === 0 ? (
              <button
                onClick={() => navigate("/add")}
                className="mt-5 min-h-10 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                + Add your first question
              </button>
            ) : (
              hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="mt-5 min-h-10 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Clear search and filters
                </button>
              )
            )}
          </div>
        ) : (
          <>
            {/* Desktop Table Header */}
            <div className="hidden grid-cols-12 gap-4 border-b border-slate-100 bg-slate-50/80 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400 md:grid">
              <div className="col-span-5">Question</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-1">Level</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {visible.map((q) => (
                <div
                  key={q.id}
                  className="grid min-w-0 grid-cols-1 gap-4 p-4 transition hover:bg-slate-50/70 dark:hover:bg-slate-800/30 sm:p-5 md:grid-cols-12 md:items-center md:gap-4 md:px-6"
                >
                  {/* Question Title */}
                  <div className="min-w-0 md:col-span-5">
                    <p className="break-words text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                      {q.title}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2 md:hidden">
                      <Badge
                        text={q.category}
                        style={categoryStyle[q.category]}
                      />

                      <span
                        className={`text-xs font-medium ${
                          difficultyStyle[q.difficulty] ?? ""
                        }`}
                      >
                        {q.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="hidden md:col-span-2 md:block">
                    <Badge
                      text={q.category}
                      style={categoryStyle[q.category]}
                    />
                  </div>

                  {/* Difficulty */}
                  <div className="hidden md:col-span-1 md:block">
                    <span
                      className={`text-sm font-medium ${
                        difficultyStyle[q.difficulty] ?? ""
                      }`}
                    >
                      {q.difficulty}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="flex min-w-0 items-center justify-between gap-3 md:col-span-2 md:block">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 md:hidden">
                      Update status
                    </span>

                    <select
                      value={q.status}
                      onChange={(e) =>
                        dispatch(
                          changeStatus({
                            id: q.id,
                            status: e.target.value,
                          }),
                        )
                      }
                      aria-label={`Status for ${q.title}`}
                      className={`max-w-full cursor-pointer rounded-full border border-transparent px-3 py-2 text-xs font-semibold outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 ${
                        statusStyle[q.status] ?? ""
                      }`}
                    >
                      {statuses.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-3 dark:border-slate-800 md:col-span-2 md:justify-end md:border-0 md:pt-0">
                    <span className="text-xs text-slate-400 md:hidden">
                      Question actions
                    </span>

                    <button
                      onClick={() => handleDelete(q.id)}
                      className="min-h-10 shrink-0 rounded-lg border border-red-100 px-4 py-2 text-xs font-semibold text-red-600 transition hover:border-red-200 hover:bg-red-50 dark:border-red-500/20 dark:text-red-400 dark:hover:bg-red-500/10"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Footer */}
        {visible.length > 0 && (
          <div className="border-t border-slate-100 bg-slate-50/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/30 sm:px-6">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Showing {visible.length} of {list.length} questions
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
