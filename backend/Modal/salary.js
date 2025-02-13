const mongoose = require('mongoose');

const SalarySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    baseSalary: { type: Number, required: true },
    deductions: { type: Number, default: 0 },
    netSalary: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Salary', SalarySchema);
