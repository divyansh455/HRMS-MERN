const express = require('express');
const router = express.Router();
const MainController = require('../controlers/MainController'); 

//  Health Check Route
router.get('/healthcheck', MainController.healthchecker);

//  Home Route
// router.get('/home', MainController.main);

// ************************** User Management Routes **************************

//  Create User
router.post('/users', MainController.createUser);

//  Get All Users
// router.get('/users', MainController.getAllUsers);

//  Get User by ID
// router.get('/users/:id', MainController.getUserById);

//  Update User
// router.put('/users/:id', MainController.updateUser);

//  Delete User
// router.delete('/users/:id', MainController.deleteUser);

// ************************** Attendance Routes **************************

//  Check-in
router.post('/attendance/checkin', MainController.checkIn);

//  Check-out
router.post('/attendance/checkout', MainController.checkOut);

//  Get User Attendance
// router.get('/attendance/:userId', MainController.getAttendanceByUser);

// ************************** Salary Calculation Routes **************************

//  Calculate Salary
router.get('/salary/:userId', MainController.calculateSalary);

// ************************** Leave Management Routes **************************

//  Apply for Leave
// router.post('/leave/apply', MainController.applyLeave);

//  Approve Leave (Admin)
router.put('/leave/approve/:leaveId', MainController.approveLeave);

//  Reject Leave (Admin)
// router.put('/leave/reject/:leaveId', MainController.rejectLeave);

//  Get User Leave History
// router.get('/leave/:userId', MainController.getLeaveHistory);

module.exports = router;
