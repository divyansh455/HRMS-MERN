import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./components/login";
import Attendance from "./components/attendance";
import LeaveManagement from "./components/leaveManagement";
import Payroll from "./components/Payroll";
import EmployeeManagement from "./components/employeeManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "attendance", element: <Attendance /> },
      { path: "leaves", element: <LeaveManagement /> },
      { path: "payroll", element: <Payroll /> },
      { path: "employees", element: <EmployeeManagement /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
