import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/mongodb";
import { Menu } from "@/models";
import { IMenuItem } from "@/models/menu";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const brandId = searchParams.get("brandId");
    const category = searchParams.get("category");
    const name = searchParams.get("name");
    const skip = searchParams.get("skip");
    const limit = searchParams.get("limit");
    const filter: { [key: string]: unknown } = {};

    if (brandId) {
        filter["brand"] = new mongoose.Types.ObjectId(brandId);
    }

    if (category) {
        filter["category"] = category;
    }

    if (name) {
        filter["name"] = {
            $regex: name.replace(/\s+/g, "\\s*"),
            $options: "i"
        };
    }

    try {
        await connectToDatabase();
        const totalCounts = await Menu.countDocuments(filter);

        if (!totalCounts) {
            return NextResponse.json({
                status: 200,
                data: { totalCounts, list: [] }
            });
        }

        const menus: IMenuItem[] = await Menu.aggregate([
            {
                $match: filter
            },
            {
                $project: {
                    id: 1,
                    name: 1,
                    sortName: 1,
                    thumbnail: 1,
                    type: 1,
                    brand: 1,
                    report: { $arrayElemAt: ["$report", 0] },
                    relatedMenus: 1
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
                    sortName: 1,
                    thumbnail: 1,
                    type: 1,
                    "brand._id": "$brandDetails._id",
                    "brand.name": "$brandDetails.name",
                    report: 1,
                    relatedMenus: 1
                }
            },
            {
                $addFields: {
                    relatedMenusSize: {
                        $size: { $ifNull: ["$relatedMenus", []] }
                    }
                }
            },
            {
                $sort: {
                    sortName: 1,
                    relatedMenusSize: -1,
                    type: 1,
                    name: 1,
                    _id: 1
                }
            },
            {
                $skip: Number(skip) || 0
            },
            {
                $limit: Number(limit) || 20
            }
        ]);
        return NextResponse.json({
            status: 200,
            data: { totalCounts, list: menus }
        });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            {
                success: false,
                message: `Error fetching menus. detail: ${err.message}`
            },
            { status: 500 }
        );
    }
}
