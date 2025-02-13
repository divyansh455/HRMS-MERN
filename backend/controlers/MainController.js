module.exports.healthchecker = async(req , res)=>{
    try {
        return res.status(200).json({
            message:"Every Thing Good"
        })
    } catch (error) {
       return res.status(404).json({
         message:"Error in Container Health"
       }) 
    }
}



const User = require('../Modal/user');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const Attendance = require('../Modal/attendance');

exports.checkIn = async (req, res) => {
    try {
        const { userId } = req.body;
        const checkInTime = new Date();

        const attendance = new Attendance({ userId, checkIn: checkInTime });
        await attendance.save();
        res.status(201).json({ message: 'Checked in successfully', attendance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.checkOut = async (req, res) => {
    try {
        const { userId } = req.body;
        const checkOutTime = new Date();

        const attendance = await Attendance.findOne({ userId, date: new Date().setHours(0, 0, 0, 0) });

        if (!attendance) return res.status(404).json({ message: "No check-in found for today" });

        attendance.checkOut = checkOutTime;
        attendance.workingHours = (checkOutTime - attendance.checkIn) / (1000 * 60 * 60);
        await attendance.save();

        res.status(200).json({ message: 'Checked out successfully', attendance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const Leave = require('../Modal/leavemodule');

exports.requestLeave = async (req, res) => {
    try {
        const leave = new Leave(req.body);
        await leave.save();
        res.status(201).json({ message: 'Leave request submitted', leave });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.approveLeave = async (req, res) => {
    try {
        const { leaveId, status } = req.body;
        const leave = await Leave.findById(leaveId);
        if (!leave) return res.status(404).json({ message: 'Leave not found' });

        leave.status = status;
        await leave.save();
        res.status(200).json({ message: `Leave ${status}`, leave });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const Salary = require('../Modal/salary');

exports.calculateSalary = async (req, res) => {
    try {
        const { userId, month, year } = req.body;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const baseSalary = user.salary;
        const deductions = 0; // Future enhancement: Deduct leaves

        const netSalary = baseSalary - deductions;

        const salary = new Salary({ userId, month, year, baseSalary, deductions, netSalary });
        await salary.save();

        res.status(201).json({ message: 'Salary calculated', salary });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

