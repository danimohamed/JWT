import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Pour éviter les emails en double
    },
    pwd: {
        type: String,
        required: true
    },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
