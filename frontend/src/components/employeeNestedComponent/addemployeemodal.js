import React, { useState } from "react";
import axios from "axios";

const AddEmployeeModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users",
        formData
        );
        
        if (response) {
            console.log("Response:", response.data);
            alert("Employee added successfully!");
            setFormData({ name: "", email: "", password: "" });
            setShow(false);
        }
        
            

      // Reset form and close modal
      
    } catch (err) {
      setError("Failed to add employee. Try again!");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {show ? (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          aria-hidden="true">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add Employee</h2>

            {/* Form Fields */}
            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              className="w-full p-2 mb-3 border rounded"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 mb-3 border rounded"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="w-full p-2 mb-3 border rounded"
              value={formData.password}
              onChange={handleChange}
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setShow(false)}
                disabled={loading}>
                Cancel
              </button>
              <button
                className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleSubmit}
                disabled={loading}>
                {loading ? "Adding..." : "Add Employee"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShow(true)}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Add Employee
        </button>
      )}
    </>
  );
};

export default AddEmployeeModal;
