import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import mongoose from "mongoose";
import Menu, { IMenu } from "@/models/menu";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    await connectToDatabase();
    try {
        const { id } = params;
        const menuId = new mongoose.Types.ObjectId(id);
        const menu = await Menu.aggregate([
            {
                $match: { _id: menuId }
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
                $addFields: {
                    "brand._id": "$brandDetails._id",
                    "brand.name": "$brandDetails.name"
                }
            }
        ]);

        return NextResponse.json(menu[0]);
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Error fetching menus" },
            { status: 500 }
        );
    }
}
