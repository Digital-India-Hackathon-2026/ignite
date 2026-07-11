import Tourist from "../models/Tourist.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";


// Register Tourist
export const registerTourist = async (req, res) => {

    try {

        const {
            fullName,
            email,
            password,
            phone,
            aadhaar,
            passport,
            nationality
        } = req.body;

        const existingUser = await Tourist.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Tourist already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const tourist = await Tourist.create({

            fullName,
            email,
            password: hashedPassword,
            phone,
            aadhaar,
            passport,
            nationality

        });

        res.status(201).json({

            message: "Tourist Registered Successfully",

            token: generateToken(
                tourist._id,
                tourist.role
            ),

            tourist

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Login Tourist
export const loginTourist = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        const tourist = await Tourist.findOne({ email });

        if (!tourist) {

            return res.status(404).json({
                message: "Tourist not found"
            });

        }

        const match = await bcrypt.compare(
            password,
            tourist.password
        );

        if (!match) {

            return res.status(401).json({
                message: "Invalid Password"
            });

        }

        res.json({

            message: "Login Successful",

            token: generateToken(
                tourist._id,
                tourist.role
            ),

            tourist

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};