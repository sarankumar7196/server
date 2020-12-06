import mongoose, { Document, Schema } from "mongoose";

export default interface Profile extends Document {
    _id: Schema.Types.ObjectId,
    userId: String,
    userName: String,
    password?: String,
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