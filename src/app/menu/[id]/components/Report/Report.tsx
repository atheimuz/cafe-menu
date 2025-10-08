"use client";

import { useState } from "react";
import { convertTitleAndUnit } from "@/utils/menu";
import { convertBrandName } from "@/utils/brand";
import ItemTitle from "@/components/ItemTitle";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface Props {
    brandName: string;
    report: { [key: string]: number | string }[];
}
const Report = ({ brandName, report }: Props) => {
    const [index, setIndex] = useState<number>(0);

    if (!report?.length)
        return (
            <div className="px-4 py-4">
                <ItemTitle>영양 성분</ItemTitle>
                <p className="text-xs text-muted-foreground">
                    브랜드에서 정보를 제공하고 있지 않아요
                </p>
            </div>
        );

    return (
        <div className="px-4 py-4">
            <ItemTitle>영양 성분</ItemTitle>
            {report.length > 1 && (
                <Tabs
                    value={String(index)}
                    onValueChange={(val) => setIndex(Number(val))}
                    className="mb-3"
                >
                    <TabsList className="h-8">
                        {report.map((item, sizeIndex) => (
                            <TabsTrigger
                                key={String(item.size)}
                                value={String(sizeIndex)}
                                className="text-xs px-3"
                            >
                                {item.size}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            )}
            <ul className="space-y-0">
                {Object.entries(report[index]).map(([key, value]) => {
                    const { title, unit } = convertTitleAndUnit(key);
                    if (!title) return null;
                    return (
                        <li key={key}>
                            <div className="flex items-center justify-between py-2.5 text-sm">
                                <dt className="text-muted-foreground">{title}</dt>
                                <dd className={`font-medium ${key === "calorie" ? "text-[#FF6F00] font-bold text-base" : ""}`}>
                                    {value}
                                    {key === "capacity"
                                        ? report[index].unit
                                        : unit}
                                </dd>
                            </div>
                            <Separator />
                        </li>
                    );
                })}
            </ul>
            <p className="text-[11px] text-muted-foreground mt-3">
                * 출처: {convertBrandName(brandName)} 공식 홈페이지(앱)
            </p>
        </div>
    );
};

export default Report;
