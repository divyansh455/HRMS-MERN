const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date },
    workingHours: { type: Number, default: 0 },
    status: { type: String, enum: ['Present', 'Absent', 'On Leave'], default: 'Present' }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);
