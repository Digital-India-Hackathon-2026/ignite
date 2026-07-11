import mongoose from "mongoose";

const touristSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: String
    },

    aadhaar: {
        type: String
    },

    passport: {
        type: String
    },

    nationality: {
        type: String,
        default: "India"
    },

    travelScore: {
        type: Number,
        default: 100
    },

    verified: {
        type: Boolean,
        default: false
    },

    role: {
        type: String,
        default: "tourist"
    }

},
{
    timestamps: true
});

export default mongoose.model("Tourist", touristSchema);