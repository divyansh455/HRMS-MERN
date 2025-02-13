const express = require('express');
const router = express.Router();
const MainController = require('../controlers/MainController'); 

//  Health Check Route
router.get('/healthcheck', MainController.healthchecker);

//  Home Route
// router.get('/home', MainController.main);

router.get('/heathcheck', async (req, res) => {
    res.status(200).send({ message: 'Server is running' });
})

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


// Punch In API
router.post("/checkin", async (req, res) => {
  try {
    const { userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user ID" });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset to midnight for date comparison

    // Check if user has already punched in today
    const existingRecord = await Attendance.findOne({
      userId,
      date: { $gte: today },
    });

    if (existingRecord) {
      return res
        .status(400)
        .json({ success: false, message: "Already checked in today." });
    }

    // Create new attendance entry
    const newAttendance = new Attendance({
      userId,
      checkIn: new Date(),
      status: "Present",
    });

    await newAttendance.save();

    res.status(201).json({
      success: true,
      message: "Punch In successful!",
      data: newAttendance,
    });
  } catch (error) {
    console.error("Error in Punch In:", error);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
});



module.exports = router;
