import mongoose, { Document, Schema } from "mongoose";

export default interface Account extends Document {
    _id: Schema.Types.ObjectId,

    accountName: String,
    type: String,
    schoolType: String,
    phoneNo?: Number,
    address: String
    profile: Schema.Types.ObjectId,
    location: String,
    user: Schema.Types.ObjectId,
    email: String,
    boardType: String,
    admission: Boolean,
    fees: Number,
    registrationId: String,
    tags: String,
    promoted: Boolean,
    createdBy?: mongoose.Schema.Types.ObjectId,
    lastModifiedBy?: mongoose.Schema.Types.ObjectId,
    createdDate?: Date,
    updatedDate?: Date,
    isDeleted?: Boolean,
    isActive?: Boolean
}