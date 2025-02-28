import UserModel from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signUp(req, resp) {
    try {
        const user = req.body;

        // Vérification si l'email existe déjà
        const existingUser = await UserModel.findOne({ email: user.email });
        if (existingUser) {
            return resp.status(400).json({ message: "Email already exists" });
        }

        // Hash du mot de passe
        const salt = await bcrypt.genSalt(10);
        user.pwd = await bcrypt.hash(user.pwd, salt);

        // Création de l'utilisateur
        const newUser = await UserModel.create(user);
        resp.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        resp.status(500).json({ message: "Server error", error: error.message });
    }
}

export async function logIn(req, resp) {
    try {
        const { email, pwd } = req.body;

        // Vérification de l'utilisateur
        const user = await UserModel.findOne({ email });
        if (!user) {
            return resp.status(404).json({ message: "User not found" });
        }

        // Vérification du mot de passe
        const isMatch = await bcrypt.compare(pwd, user.pwd);
        if (!isMatch) {
            return resp.status(400).json({ message: "Invalid credentials" });
        }

        // Génération d'un token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        resp.status(200).json({ message: "Login successful", token });
    } catch (error) {
        resp.status(500).json({ message: "Server error", error: error.message });
    }
}
