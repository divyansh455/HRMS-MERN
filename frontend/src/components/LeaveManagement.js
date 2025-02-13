import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaveManagement = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/leaves`)
      .then((res) => setLeaves(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Leave Management</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3">Type</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave._id} className="border-b">
              <td className="p-3">{leave.type}</td>
              <td className="p-3">{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveManagement;
