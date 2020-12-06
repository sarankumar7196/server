
import mongoose,{ Schema } from "mongoose";
import ProfileInterface from "./profile.interface";

const profileSchema: Schema = new Schema({

    name: { type: String, required: true, unique: true },

    isAdmin: { type: Boolean, default: false },
    
    description: { type: String },
    
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lastModifiedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
     isStandard: {  type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false }
}, {  collection: 'Profile', timestamps: { createdAt: 'createdDate',updatedAt: 'lastModifiedDate' } });

export default mongoose.model<ProfileInterface>("Profile", profileSchema);
