import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Brand from "@/models/brand";

export async function GET() {
    try {
        await connectToDatabase();
        const brands = await Brand.find({}).select(["_id", "name", "options"]);
        return NextResponse.json({ list: brands });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            {
                success: false,
                message: `Error fetching brands. detail: ${err.message}`
            },
            { status: 500 }
        );
    }
}
