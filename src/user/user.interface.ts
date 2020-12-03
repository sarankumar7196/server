import mongoose, { Document, Schema } from "mongoose";

export default interface User extends Document {
    userId: String,
    userName: String,
    phoneNo?: Number,
    email: String
    profile?: Schema.Types.ObjectId,
    role?: String,
    membership?: String,
    registrationCount?: Number,
    createdDate?: Date,
    updatedDate?: Date,
    isDeleted?: Boolean,
    isActive?: Boolean
}