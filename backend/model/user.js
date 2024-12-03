import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    phone: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    address: {type: String, default: ""}
}, {
    timestamps: true
});

export const UserModel = mongoose.model("user", UserSchema);