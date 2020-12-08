import mongoose, { Document, Schema } from "mongoose";

export default interface Price extends Document {

    _id: Schema.Types.ObjectId,
    price: Number,
    product?: mongoose.Schema.Types.ObjectId,
    createdBy?: mongoose.Schema.Types.ObjectId,
    lastModifiedBy?: mongoose.Schema.Types.ObjectId,
    createdDate?: Date,
    updatedDate?: Date,
    isDeleted?: Boolean,
    isActive?: Boolean
}