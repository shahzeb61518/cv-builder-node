const mongoose = require("mongoose");

const coverLetterSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "Users" },
  cvId: { type: mongoose.Schema.ObjectId, ref: "CVs" },
  clFirstName: { type: String, required: true },
  clLastName: { type: String, required: true },
  clProfession: { type: String, required: true },
  clEmail: { type: String, required: true },
  clPhone: { type: String, required: true },
  clAddress: { type: String, required: true },
  clDescription: { type: String, required: true },
  clProfileImage: { type: String, required: true },
  path: { type: String },
});
module.exports = mongoose.model("CoverLetter", coverLetterSchema);
