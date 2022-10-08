import { useEffect, useParams } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/about-faqs/AboutPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import NotFoundPage from "./pages/404/NotFoundPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import StatePage from "./pages/home/StatePage.jsx";
import TaskDetailPage from "./pages/tasks/TaskDetailPage.jsx";
import TaskPage from "./pages/tasks/TaskPage.jsx";

import "./App.css";

function AppRoutingOne() {
  let loggedIn = false;

  let taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description 2",
    },
    {
      id: 3,
      name: "Task 3",
      description: "Description 3",
    },
  ];

  useEffect(() => {
    loggedIn = localStorage.getItem("credentials");
    console.log("Usser logged?: ", loggedIn);
  }, []);

  return (
    <div>
      <aside>
        <Link to="/">|| Home |</Link>
        <Link to="/about">| About |</Link>
        <Link to="/faqs">| FAQs |</Link>
        <Link to="/task/1">| Task 1 |</Link>
        <Link to="/task/2">| Task 2 |</Link>
        <Link to="/login">| Login |</Link>
        <Link to="/400">| Not exists ||</Link>
      </aside>

      <main>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="online-state" element={<StatePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="faqs" element={<AboutPage />} />
            <Route
              path="login"
              element={loggedIn ? <Navigate to="/" replace /> : <LoginPage />}
            />
            <Route
              path="profile"
              element={
                loggedIn ? <ProfilePage /> : <Navigate to="/login" replace />
              }
            />
            <Route path="tasks" element={<TaskPage />} />
            <Route path="task">
              <Route path=":id" element={<TaskDetailPage task={taskList} />} />
            </Route>
            {/* 404 - Page not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutingOne;
