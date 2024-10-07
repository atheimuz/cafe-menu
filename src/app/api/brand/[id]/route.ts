import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import mongoose from "mongoose";
import Brand from "@/models/brand";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    await connectToDatabase();
    try {
        const { id } = params;
        const brandId = new mongoose.Types.ObjectId(id);
        const brand = await Brand.findOne({ _id: brandId }).select([
            "_id",
            "name",
            "link",
            "options"
        ]);
        return NextResponse.json(brand);
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            {
                success: false,
                message: `Error fetching brand. detail: ${err.message}`
            },
            { status: 500 }
        );
    }
}
