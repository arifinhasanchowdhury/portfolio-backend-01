const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String },
  codeLink: { type: String },
  liveLink: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
}, { timestamps: true }); // Automatically manage createdAt, updatedAt

module.exports = mongoose.model('Portfolio', portfolioSchema);
