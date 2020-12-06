import mongoose,{ Schema } from "mongoose";
import AccountInterface from "./account.interface";

const accountSchema = new Schema({

    accountName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    schoolType: {
        type: String,
        enum: ["Private", "Government"]
    },
    address: {
        type: String,
    },
    location: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    email: {
        type: String,
        trim: true, 
        lowercase: true, 
        required: true,
        unique: true
    },
    phoneNo: {
        type: Number
    },
    boardType: {
        type: String
    },
     admission: {
        type: Boolean
    },
      fees: {
        type: Number
    },
       registrationId: {
        type: String
    },
        tags: {
        type: String
    },
         promoted: {
        type: Boolean
    },
    
    createdDate: {
        type: Date
    },
    updatedDate: {
        type: Date
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    lastModifiedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    isDeleted: {
        type: Boolean,
        default: false 
    },
    isActive: {
        type: Boolean,
        default: true 
    },

},{  collection: 'Account', timestamps: { createdAt: 'createdDate',updatedAt: 'lastModifiedDate' } 
}
);

export default mongoose.model<AccountInterface>("Account", accountSchema);