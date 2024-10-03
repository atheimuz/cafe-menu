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
        const menu = await Menu.findById(menuId)
            .populate({
                path: "brand",
                select: "_id name"
            })
            .populate({
                path: "relatedMenus.menu",
                select: "name thumbnail"
            });

        return NextResponse.json(menu);
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Error fetching menu" },
            { status: 500 }
        );
    }
}
