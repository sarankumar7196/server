import { Schema, model } from "mongoose";
import UserInterface from "./user.interface";

const userSchema: Schema = new Schema({
    userId: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNo: {
        type: Number,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    role: {
        type: String
    },
    membership: {
        type: String,
        enum: ["Paid", "Free"]
    },
    registrationCount: {
        type: Number
    },
    createdDate: {
        type: Date
    },
    updatedDate: {
        type: Date
    },
    isDeleted: {
        type: Boolean
    },
    isActive: {
        type: Boolean
    },

});

export default model<UserInterface>("User", userSchema);