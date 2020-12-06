import mongoose, { Document, Schema } from "mongoose";

export default interface Contact extends Document {

    _id: Schema.Types.ObjectId,
    contactName: String,
    phoneNo: Number,
    email: String,
    account: Schema.Types.ObjectId,
    createdBy?: mongoose.Schema.Types.ObjectId,
    lastModifiedBy?: mongoose.Schema.Types.ObjectId,
    createdDate?: Date,
    updatedDate?: Date,
    isDeleted?: Boolean,
    isActive?: Boolean
}