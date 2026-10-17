import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import QuestionTracker from "./pages/QuestionTracker.jsx";
import Progress from "./pages/Progress.jsx";
import AddQuestion from "./pages/AddQuestion.jsx";

export default function App() {
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div className="min-h-screen min-w-0 bg-slate-50 dark:bg-slate-900">
      <Sidebar />

      <main className="ml-0 min-h-screen min-w-0 p-4 pb-6 sm:p-6 sm:pb-6 md:ml-64 lg:p-10">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tracker" element={<QuestionTracker />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/add" element={<AddQuestion />} />
        </Routes>
      </main>
    </div>
  );
}
