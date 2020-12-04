import mongoose,{ Schema } from "mongoose";
import UserInterface from "./user.interface";

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
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

},{  collection: 'User', timestamps: { createdAt: 'createdDate',updatedAt: 'lastModifiedDate' } 
}
);

export default mongoose.model<UserInterface>("User", userSchema);