import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MouseEffects from "./components/MouseEffects";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import WorkDetails from "./pages/WorkDetails";
import CreativeDetails from "./pages/CreativeDetails";

// Scrolls to a section anchor when the URL includes a hash (e.g. "/#projects"),
// and to the top of the page on normal route changes.
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Wait a tick so the target section has mounted before scrolling.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <MouseEffects />
      <Navbar />
      <ScrollManager />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/work/creative/:slug" element={<CreativeDetails />} />
          <Route path="/work/:slug" element={<WorkDetails />} />
          <Route
            path="*"
            element={
              <div className="shell pt-40 pb-24 text-center text-[var(--color-ink-muted)]">
                Page not found.
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
