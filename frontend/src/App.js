import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import EmployeeManagement from "./components/EmployeeManagement";
// import Attendance from "./components/Attendance";
// import LeaveManagement from "./components/LeaveManagement";
// import Payroll from "./components/Payroll";
// import PrivateRoute from "./components/PrivateRoute";
// import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import Dashboard from "./components/dashboard";

function App() {
  return (


    <>
      <Dashboard />
      <Outlet/>
    </>

    // <Router>
    //   <AuthProvider>
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route
    //         path="/dashboard"
    //         element={<PrivateRoute component={Dashboard} />}
    //       />
    //       <Route
    //         path="/employees"
    //         element={<PrivateRoute component={EmployeeManagement} />}
    //       />
    //       <Route
    //         path="/attendance"
    //         element={<PrivateRoute component={Attendance} />}
    //       />
    //       <Route
    //         path="/leaves"
    //         element={<PrivateRoute component={LeaveManagement} />}
    //       />
    //       <Route
    //         path="/payroll"
    //         element={<PrivateRoute component={Payroll} />}
    //       />
    //     </Routes>
    //   </AuthProvider>
    // </Router>
  );
}

export default App;
