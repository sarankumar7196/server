import mongoose,{ Schema } from "mongoose";
import PriceInterface from "./price.interface";

const priceSchema = new Schema({

    price: {
        type: Number
    },
    product: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product'
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

},{  collection: 'Price', timestamps: { createdAt: 'createdDate',updatedAt: 'lastModifiedDate' } 
}
);

export default mongoose.model<PriceInterface>("Price", priceSchema);