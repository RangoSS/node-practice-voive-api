import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        idNumber: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        designation: { type: String, required: true },
        joining_date: { type: String, required: true },
        salary: { type: String, required: true },
        active: { type: Boolean, default: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
    },
    { timestamps: true } // Adds `createdAt` and `updatedAt` automatically
);


 const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

