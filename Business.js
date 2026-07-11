import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  licenseNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Business = mongoose.model("Business", businessSchema);

export default Business;