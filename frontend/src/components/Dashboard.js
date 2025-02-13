import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">
        HRMS Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Link
          to="/employees"
          className="p-4 bg-white shadow-md text-center rounded-lg hover:bg-blue-100">
          Employee Management
        </Link>
        <Link
          to="/attendance"
          className="p-4 bg-white shadow-md text-center rounded-lg hover:bg-blue-100">
          Attendance
        </Link>
        <Link
          to="/leaves"
          className="p-4 bg-white shadow-md text-center rounded-lg hover:bg-blue-100">
          Leave Management
        </Link>
        <Link
          to="/payroll"
          className="p-4 bg-white shadow-md text-center rounded-lg hover:bg-blue-100">
          Payroll
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
