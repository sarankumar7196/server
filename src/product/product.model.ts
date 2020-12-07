import mongoose,{ Schema } from "mongoose";
import ProductInterface from "./product.interface";

const productSchema = new Schema({

    productId: {
        type: String,
        required: true,
    },
    productName: {
        type: String
    },
    currency: {
        type: Number
    },
    phoneNo: {
        type: Number
    },
    type: {
        type: String
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

},{  collection: 'Product', timestamps: { createdAt: 'createdDate',updatedAt: 'lastModifiedDate' } 
}
);

export default mongoose.model<ProductInterface>("Product", productSchema);