
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuestion } from "../store/questionsSlice.js";
import { categories, difficulties, statuses } from "../constants.js";

export default function AddQuestion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "DSA",
      difficulty: "Easy",
      status: "Pending",
    },
  });

  function onSubmit(data) {
    dispatch(addQuestion(data));
    navigate("/tracker");
  }

  const inputStyle =
    "block w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:px-4 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-800";

  const labelStyle =
    "mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200";

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-5 pb-20 sm:space-y-6 sm:pb-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8 dark:border-slate-700 dark:bg-slate-900">
        <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex min-w-0 items-start gap-3 sm:gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl dark:bg-blue-500/10">
            ✍️
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-blue-600 sm:text-xs sm:tracking-widest dark:text-blue-400">
              Build your preparation plan
            </p>

            <h1 className="break-words text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl dark:text-white">
              Add a Question
            </h1>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400">
              Add a DSA problem, technical question, or machine-coding topic to
              your practice list and keep your preparation organized.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
      >
        <div className="border-b border-slate-100 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 dark:border-slate-800">
          <h2 className="font-semibold text-slate-900 dark:text-white">
            Question Details
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Fill in the details below to add a new question.
          </p>
        </div>

        <div className="space-y-5 p-4 sm:space-y-6 sm:p-6 lg:p-8">
          {/* Title */}
          <div className="min-w-0">
            <label className={labelStyle} htmlFor="title">
              Question Title <span className="text-red-500">*</span>
            </label>

            <input
              id="title"
              type="text"
              placeholder="e.g. Reverse a linked list"
              aria-invalid={Boolean(errors.title)}
              aria-describedby={errors.title ? "title-error" : "title-help"}
              className={`${inputStyle} ${
                errors.title
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                  : ""
              }`}
              {...register("title", {
                required: "Please enter a title",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
              })}
            />

            {errors.title ? (
              <p
                id="title-error"
                className="mt-2 flex items-start gap-1.5 text-sm text-red-500"
              >
                <span>!</span>
                <span>{errors.title.message}</span>
              </p>
            ) : (
              <p id="title-help" className="mt-2 text-xs text-slate-400">
                Use a clear, easy-to-recognize question name.
              </p>
            )}
          </div>

          {/* Category */}
          <div className="min-w-0">
            <label className={labelStyle} htmlFor="category">
              Category
            </label>

            <select
              id="category"
              className={inputStyle}
              {...register("category")}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <p className="mt-2 text-xs text-slate-400">
              Choose the area this question belongs to.
            </p>
          </div>

          {/* Difficulty and Status */}
          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            <div className="min-w-0">
              <label className={labelStyle} htmlFor="difficulty">
                Difficulty
              </label>

              <select
                id="difficulty"
                className={inputStyle}
                {...register("difficulty")}
              >
                {difficulties.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0">
              <label className={labelStyle} htmlFor="status">
                Current Status
              </label>

              <select
                id="status"
                className={inputStyle}
                {...register("status")}
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Info */}
          <div className="flex min-w-0 items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-3 sm:p-4 dark:border-blue-500/20 dark:bg-blue-500/5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
              i
            </span>

            <p className="min-w-0 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">
              New questions are saved to your Redux store. You can update their
              status later from the Question Tracker.
            </p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/70 px-4 py-4 sm:flex-row sm:justify-end sm:px-6 sm:py-5 lg:px-8 dark:border-slate-800 dark:bg-slate-800/30">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="min-h-11 w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 active:bg-slate-200 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 active:bg-blue-800 sm:w-auto sm:hover:-translate-y-0.5"
          >
            <span className="text-lg leading-none">+</span>
            Save Question
          </button>
        </div>
      </form>
    </div>
  );
}
