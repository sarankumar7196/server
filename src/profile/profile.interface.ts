import mongoose, { Document, Schema } from "mongoose";

export default interface Profile extends Document {
    name: String
}