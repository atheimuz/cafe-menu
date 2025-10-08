"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { convertBrandName } from "@/utils/brand";
import { convertTitleAndUnit } from "@/utils/menu";
import { IMenuItem } from "@/models/menu";
import { Card } from "@/components/ui/card";

const MenuItem = ({ _id, name, brand, thumbnail, report }: IMenuItem) => {
    const [moreStatus, setMoreStatus] = useState<boolean>(false);

    return (
        <Card className="overflow-hidden py-0 gap-0">
            <div className="flex items-center gap-2.5 p-2.5">
                <Link href={`/menu/${_id}`} className="shrink-0">
                    <img src={thumbnail} className="w-12 h-12 rounded-xl object-cover" alt={name} />
                </Link>
                <Link href={`/menu/${_id}`} className="flex-1 min-w-0">
                    <span className="text-xs text-muted-foreground">
                        {convertBrandName(brand?.name)}
                    </span>
                    <p className="text-sm font-medium truncate mt-0.5">{name}</p>
                </Link>
                <button
                    className={`cursor-pointer shrink-0 p-1.5 rounded-full hover:bg-accent transition-transform ${
                        moreStatus ? "" : "rotate-180"
                    }`}
                    onClick={() => setMoreStatus(!moreStatus)}
                >
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                </button>
            </div>
            {moreStatus && (
                <div className="border-t border-border px-2.5 py-2 bg-muted/40 rounded-b-2xl">
                    <ul className="grid grid-cols-3 gap-2">
                        {Object.entries(report).map(([key, value]) => {
                            const { title, unit } = convertTitleAndUnit(key);
                            if (!title) return null;
                            return (
                                <li key={key} className="text-center">
                                    <dt className="text-[11px] text-muted-foreground">{title}</dt>
                                    <dd
                                        className={`text-xs font-medium mt-0.5 ${key === "calorie" ? "text-[#FF6F00] font-semibold" : ""}`}
                                    >
                                        {value}
                                        {unit}
                                    </dd>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </Card>
    );
};

export default MenuItem;
