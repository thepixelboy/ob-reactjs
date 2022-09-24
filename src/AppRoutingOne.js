import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/about-faqs/AboutPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import NotFoundPage from "./pages/404/NotFoundPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import TaskDetailPage from "./pages/tasks/TaskDetailPage.jsx";
import TaskPage from "./pages/tasks/TaskPage.jsx";

import "./App.css";

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| Home |</Link>
          <Link to="/about">| About |</Link>
          <Link to="/faqs">| FAQs |</Link>
          <Link to="/400">| Not exists ||</Link>
        </aside>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/task/:id" element={<TaskDetailPage />} />

            {/* 404 - Page not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
