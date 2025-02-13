import React, { useState, useEffect } from "react";
import axios from "axios";

const Payroll = () => {
  const [payrolls, setPayrolls] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/payroll`)
      .then((res) => setPayrolls(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Payroll</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3">Employee</th>
            <th className="p-3">Salary</th>
          </tr>
        </thead>
        <tbody>
          {payrolls.map((pay) => (
            <tr key={pay._id} className="border-b">
              <td className="p-3">{pay.employeeName}</td>
              <td className="p-3">{pay.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;
