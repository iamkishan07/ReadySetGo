
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice.js";

function Icon({ children, size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const links = [
  {
    to: "/",
    label: "Dashboard",
    icon: (
      <Icon>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </Icon>
    ),
  },
  {
    to: "/tracker",
    label: "Question Tracker",
    icon: (
      <Icon>
        <line x1="9" y1="6" x2="21" y2="6" />
        <line x1="9" y1="12" x2="21" y2="12" />
        <line x1="9" y1="18" x2="21" y2="18" />
        <circle cx="4" cy="6" r="1" />
        <circle cx="4" cy="12" r="1" />
        <circle cx="4" cy="18" r="1" />
      </Icon>
    ),
  },
  {
    to: "/progress",
    label: "Progress",
    icon: (
      <Icon>
        <line x1="4" y1="20" x2="4" y2="10" />
        <line x1="10" y1="20" x2="10" y2="4" />
        <line x1="16" y1="20" x2="16" y2="13" />
        <line x1="22" y1="20" x2="22" y2="8" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </Icon>
    ),
  },
  {
    to: "/add",
    label: "Add Question",
    icon: (
      <Icon>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </Icon>
    ),
  },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const navClass = ({ isActive }) =>
    `group relative flex min-w-0 items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
      isActive
        ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    }`;

  const navItems = (mobile = false) =>
    links.map((link) => (
      <NavLink
        key={link.to}
        to={link.to}
        end={link.to === "/"}
        aria-label={link.label}
        title={mobile ? link.label : undefined}
        className={({ isActive }) =>
          mobile
            ? `flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] font-medium transition-colors ${
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-500 dark:text-slate-400"
              }`
            : navClass({ isActive })
        }
      >
        {({ isActive }) => (
          <>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
                  : "bg-slate-100 text-slate-500 group-hover:bg-white dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-slate-700"
              }`}
            >
              {link.icon}
            </span>

            <span
              className={
                mobile
                  ? "max-w-full truncate"
                  : "min-w-0"
              }
            >
              {mobile
                ? link.label === "Question Tracker"
                  ? "Tracker"
                  : link.label
                : link.label}
            </span>

            {!mobile && isActive && (
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            )}

            {mobile && isActive && (
              <span className="absolute bottom-0 h-0.5 w-8 rounded-full bg-blue-600 dark:bg-blue-400" />
            )}
          </>
        )}
      </NavLink>
    ));

  const ThemeButton = ({ mobile = false }) => (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={
        mobile
          ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-amber-300 dark:hover:bg-slate-800"
          : "flex w-full items-center gap-2.5 rounded-lg border border-slate-200 px-2.5 py-2 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-700"
      }
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-amber-300">
        {isDark ? (
          <Icon>
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
          </Icon>
        ) : (
          <Icon>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </Icon>
        )}
      </span>

      {!mobile && (
        <>
          <span className="flex-1 text-left">
            {isDark ? "Light mode" : "Dark mode"}
          </span>
          <span className="text-[10px] text-slate-400">
            {isDark ? "On" : "Off"}
          </span>
        </>
      )}
    </button>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col justify-between overflow-y-auto border-r border-slate-200 bg-white px-4 py-4 transition-colors duration-300 md:flex dark:border-slate-800 dark:bg-slate-900">
        <div>
          <NavLink to="/" className="mb-7 flex items-center gap-2.5 px-1">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-600/20">
              <Icon size={20}>
                <polyline points="20 6 9 17 4 12" strokeWidth="2.5" />
              </Icon>
            </div>

            <div className="min-w-0">
              <span className="block text-base font-bold tracking-tight text-slate-900 dark:text-white">
                ReadySetGo
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                Interview Prep
              </span>
            </div>
          </NavLink>

          <div className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.17em] text-slate-400">
            Workspace
          </div>

          <nav className="flex flex-col gap-1">{navItems()}</nav>

          {/* Quick Tip */}
          <div className="mt-5 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/50 p-3 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-indigo-500/5">
            <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm dark:bg-slate-800 dark:text-blue-300">
              <Icon size={15}>
                <path d="M12 3a7 7 0 0 0-4 12.75c.7.5 1 1.25 1 2.25h6c0-1 .3-1.75 1-2.25A7 7 0 0 0 12 3Z" />
                <path d="M9 21h6M10 18h4" />
              </Icon>
            </div>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
              Stay consistent
            </p>
            <p className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400">
              Small daily improvements lead to better interview results.
            </p>
          </div>
        </div>

        <div className="mt-3 flex shrink-0 flex-col gap-2.5">
          <ThemeButton />

          {/* Weekly Focus */}
          <div className="rounded-lg border border-slate-200 px-3 py-2.5 dark:border-slate-800">
            <div className="mb-1.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Weekly focus
              </p>
            </div>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              Keep moving forward
            </p>
            <p className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400">
              Every question brings you closer to your goal.
            </p>
          </div>

          <p className="px-1 text-[8px] tracking-wide text-slate-400">
            READYSETGO · YOUR PREP WORKSPACE
          </p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 md:hidden">
        <NavLink to="/" className="flex min-w-0 items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            <Icon size={18}>
              <polyline points="20 6 9 17 4 12" strokeWidth="2.5" />
            </Icon>
          </span>
          <span className="truncate text-sm font-bold text-slate-900 dark:text-white">
            ReadySetGo
          </span>
        </NavLink>
        <ThemeButton mobile />
      </header>

      {/* Mobile bottom navigation */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 flex items-stretch justify-around border-t border-slate-200 bg-white/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 md:hidden"
      >
        {navItems(true)}
      </nav>
    </>
  );
}
