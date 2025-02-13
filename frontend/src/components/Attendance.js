import React, { useState } from "react";
import axios from "axios";

const Attendance = () => {
  const [message, setMessage] = useState("");

  const markAttendance = async (type) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/attendance`, { type });
      setMessage(`Successfully marked ${type}`);
    } catch (error) {
      setMessage("Failed to mark attendance");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Attendance</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => markAttendance("Check-In")}>
        Check-In
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => markAttendance("Check-Out")}>
        Check-Out
      </button>
      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </div>
  );
};

export default Attendance;
