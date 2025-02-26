import UserModel from "../models/user_model.js";
import bcrypt from "bcrypt";

export async function singUp(req, resp) {

    const user = req.body;
    const salt = await bcrypt.genSalt();
    user.pwd = bcrypt.hash(user.pwd, salt);
    await UserModel.create(user);
    resp.status(201).json({ message: "User created successfully" });



}

export function logIn(req, resp) {

}