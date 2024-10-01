import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Menu, { IMenuItem } from "@/models/menu";

export async function GET() {
    await connectToDatabase();
    try {
        const menus: IMenuItem[] = await Menu.aggregate([
            {
                $project: {
                    id: 1,
                    name: 1,
                    thumbnail: 1,
                    brand: 1,
                    report: { $arrayElemAt: ["$report", 0] }
                }
            },
            {
                $lookup: {
                    from: "brands",
                    localField: "brand",
                    foreignField: "_id",
                    as: "brandDetails"
                }
            },
            {
                $unwind: "$brandDetails"
            },
            {
                $project: {
                    id: 1,
                    name: 1,
                    thumbnail: 1,
                    "brand._id": "$brandDetails._id",
                    "brand.name": "$brandDetails.name",
                    report: 1
                }
            }
        ]);
        return NextResponse.json({ list: menus });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Error fetching menus" },
            { status: 500 }
        );
    }
}
