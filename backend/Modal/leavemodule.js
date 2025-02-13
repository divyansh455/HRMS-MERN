const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    leaveType: { type: String, enum: ['Sick Leave', 'Casual Leave', 'Annual Leave'], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    reason: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Leave', LeaveSchema);
