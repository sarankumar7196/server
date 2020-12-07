import mongoose, { Document, Schema } from "mongoose";

export default interface Product extends Document {

    _id: Schema.Types.ObjectId,
    productId: String,
    name: String,
    currency: Number,
    type: String,
    createdBy?: mongoose.Schema.Types.ObjectId,
    lastModifiedBy?: mongoose.Schema.Types.ObjectId,
    createdDate?: Date,
    updatedDate?: Date,
    isDeleted?: Boolean,
    isActive?: Boolean
}