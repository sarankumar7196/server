import mongoose,{ Schema } from "mongoose";
import ContactInterface from "./contact.interface";

const contactSchema = new Schema({

    contactName: {
        type: String,
        required: true,
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
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

},{  collection: 'Contact', timestamps: { createdAt: 'createdDate',updatedAt: 'lastModifiedDate' } 
}
);

export default mongoose.model<ContactInterface>("Contact", contactSchema);