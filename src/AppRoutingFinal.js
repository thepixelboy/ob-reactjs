import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import DashboardPage from "./pages/dashboard/DashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import TaskListComponent from "./components/containers/task_list";
import RegisterPage from "./pages/auth/RegisterPage";

function AppRoutingFinal() {
  // TODO Change to a value from sessionStorage
  let loggedIn = true;

  return (
    <Routes>
      <Route path="/">
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate from="/" to="dashboard" replace />
            ) : (
              <Navigate from="/" to="login" replace />
            )
          }
        />
        <Route
          path="dashboard"
          element={
            loggedIn ? <DashboardPage /> : <Navigate to="/login" replace />
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="tasks"
          element={
            loggedIn ? <TaskListComponent /> : <Navigate to="/login" replace />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutingFinal;
