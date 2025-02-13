const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Employee', 'Admin'], default: 'Employee' },
    department: { type: String },
    salary: { type: Number, required: true },
    joiningDate: { type: Date, required: true },
    workingHours: { type: Number, default: 8 },
    leaves: { type: Number, default: 12 }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
