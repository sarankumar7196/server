import { Schema, model } from "mongoose";
import ProfileInterface from "./profile.interface";

const profileSchema: Schema = new Schema({
    name: {
        type: String,
        enum: ["School Admin", "Parents", "Teachers"]
    }
});

export default model<ProfileInterface>("User", profileSchema);