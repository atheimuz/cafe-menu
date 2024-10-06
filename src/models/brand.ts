import mongoose, { Document, Model, Schema } from "mongoose";

interface IBrand extends Document {
    _id: string;
    name: string;
    link: string;
    options: {
        type: string;
        options: string[];
    }[];
}

const BrandSchema: Schema<IBrand> = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    options: [
        {
            type: {
                type: String,
                required: true
            },
            options: {
                type: [String],
                required: true
            }
        }
    ]
});

const Brand: Model<IBrand> =
    mongoose.models.Brand || mongoose.model<IBrand>("Brand", BrandSchema);

export default Brand;
export type { IBrand };
