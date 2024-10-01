import mongoose, { Document, Model, Schema } from "mongoose";

interface IBrand extends Document {
    _id: string;
    name: string;
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
    options: [
        {
            type: "caffeine",
            options: ["decaf", "halfDecaf"]
        },
        {
            type: "milk",
            options: ["lowFat", "fatless", "soyMilk", "oats"]
        }
    ]
});

const Brand: Model<IBrand> =
    mongoose.models.Brand || mongoose.model<IBrand>("Brand", BrandSchema);

export default Brand;
export type { IBrand };
