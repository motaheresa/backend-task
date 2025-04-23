const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  startDate: Date,
  endDate: Date,
  price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);