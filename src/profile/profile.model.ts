import mongoose, { Schema, Document, mongo } from 'mongoose';

export interface IProfile extends Document {

    name: String,
    description?: String,
    createdBy?: mongoose.Schema.Types.ObjectId,
    lastModifiedBy?: mongoose.Schema.Types.ObjectId,    
    isAdmin?: Boolean,
    isActive?: Boolean,
    isDeleted?: Boolean,
    isStandard?: Boolean,
    createdDate?: Date,
    lastModifiedDate?: Date,
}

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

export default mongoose.model<IProfile>('Profile', profileSchema);
