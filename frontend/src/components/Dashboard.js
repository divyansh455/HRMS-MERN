import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  // Function to handle Punch In
  const handlePunchIn = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/checkin");
      alert(`Punch In Successful: ${response.data.message}`);
    } catch (error) {
      console.error("Error punching in:", error);
      alert("Error Punching In. Try again.");
    }
  };

  // Function to handle Punch Out
  const handlePunchOut = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/checkout");
      alert(`Punch Out Successful: ${response.data.message}`);
    } catch (error) {
      console.error("Error punching out:", error);
      alert("Error Punching Out. Try again.");
    }
  };

  return (
    <div className="bg-gray-100 p-6">
      {/* Flex container for all items in a single row */}
      <div className="flex justify-between items-center gap-x-6 flex-wrap md:flex-nowrap">
        <h1 className="text-3xl font-semibold">HRMS Dashboard</h1>
        <div className="flex gap-x-4">
          <Link
            to="/employees"
            className="p-3 bg-white shadow-md text-center rounded-lg hover:bg-blue-100">
            Employee Management
          </Link>
          <Link
            to="/attendance"
            className="p-3 bg-white shadow-md text-center rounded-lg hover:bg-blue-100">
            Attendance
          </Link>
          <Link
            to="/leaves"
            className="p-3 bg-white shadow-md text-center rounded-lg hover:bg-blue-100">
            Leave Management
          </Link>
          <Link
            to="/payroll"
            className="p-3 bg-white shadow-md text-center rounded-lg hover:bg-blue-100">
            Payroll
          </Link>
        </div>

        {/* Punch In & Punch Out Buttons */}
        <div className="flex gap-x-4">
          <button
            onClick={handlePunchIn}
            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Punch In
          </button>
          <button
            onClick={handlePunchOut}
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Punch Out
          </button>
        </div>

        {/* Sign Out Button */}
        <Link
          to="/signin"
          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
