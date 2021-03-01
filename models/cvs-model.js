const mongoose = require("mongoose");

const cvsSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "Users" },
  personalFirstName: { type: String, required: true },
  personalLastName: { type: String, required: true },
  personalProfession: { type: String, required: true },
  personalSummary: { type: String, required: true },
  personalSpecialization: { type: String },
  personalImage: { type: String },
  contactEmail: { type: String, required: true },
  contactMobile: { type: String, required: true },
  contactHome: { type: String, required: true },
  contactWebsite: { type: String, required: true },
  contactAddress: { type: String, required: true },

  education1From: { type: Date, required: true },
  education1To: { type: Date, required: true },
  education1Course: { type: String },
  educationInstitue1: { type: String },
  education2From: { type: String },
  education2To: { type: String },
  education2Course: { type: String },
  educationInstitue2: { type: String },

  education3From: { type: String },
  education3To: { type: String },
  education3Course: { type: String },
  educationInstitue3: { type: String },

  experience1From: { type: Date, required: true },
  experience1To: { type: Date, required: true },
  experience1Position: { type: String, required: true },
  experience2From: { type: Date },
  experience2To: { type: Date },
  experience2Position: { type: String },
  experience3From: { type: Date },
  experience3To: { type: Date },
  experience3Position: { type: String },
  createdAt: { type: Date, default: Date.now },
  tag: [{ type: String }],
  path: { type: String },
});
module.exports = mongoose.model("CVs", cvsSchema);
