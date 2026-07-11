import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import touristRoutes from "./routers/touristRoutes.js";
import businessRoutes from "./routers/businessRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/tourists", touristRoutes);
app.use("/api/business", businessRoutes);

// ADD THIS HERE (or leave it here if it's already present)
app.get("/", (req, res) => {

    console.log("Root route was called");

    res.send("TravelX Backend Running");

});

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});