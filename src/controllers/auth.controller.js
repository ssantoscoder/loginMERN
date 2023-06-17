import bcrypt from "bcryptjs";
import User from "../models/user.model.js"
import { createAccessToken } from "../libs/jwt.js";


export const register = async (req, res) => {

    const { email, password, username } = req.body;
    try {

        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token);
        res.json({
            message: "User created successfully",
        });
        
        res.json({
            id: userSaved.id,
            username: userSaved.email,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const login = (req, res) => res.send("login");