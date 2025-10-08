"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { useMenus } from "@/queries/useMenuQuery";
import { IMenuItem } from "@/models/menu";
import { MENU_CATEGORY_LIST } from "@/schema/menu";
import useScrollToBottom from "@/hooks/useScrollToBottom";
import Loading from "@/components/Loading";
import MenuItem from "@/components/MenuItem";
import MenuItemEmpty from "@/components/MenuItemEmpty";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FilteredMenuList = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = useParams();
    const category =
        searchParams.get("category") || MENU_CATEGORY_LIST[0].value;
    const keyword = searchParams.get("keyword") || "";
    const brandId = typeof params.id === "string" ? params.id : "";
    const isBottom = useScrollToBottom();
    const [inputValue, setInputValue] = useState(keyword);

    const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useMenus({
        brandId,
        category: keyword ? undefined : category,
        name: keyword || undefined,
        limit: 20
    });

    const handleCategoryChange = (newCategory: string) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set("category", newCategory);
        currentParams.delete("keyword");
        router.replace(`?${currentParams.toString()}`);
    };

    const handleKeywordSearch = () => {
        const value = inputValue.trim();
        const currentParams = new URLSearchParams(searchParams.toString());
        if (value) {
            currentParams.set("keyword", value);
        } else {
            currentParams.delete("keyword");
        }
        router.replace(`?${currentParams.toString()}`);
        if (document?.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    const handleClearKeyword = () => {
        setInputValue("");
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.delete("keyword");
        router.replace(`?${currentParams.toString()}`);
    };

    useEffect(() => {
        setInputValue(keyword);
    }, [keyword]);

    useEffect(() => {
        if (isBottom && hasNextPage) {
            fetchNextPage();
        }
    }, [isBottom]);

    return (
        <div>
            <div className="sticky top-[49px] z-[5] bg-background px-4 pt-3 pb-2">
                <form onSubmit={(e) => { e.preventDefault(); handleKeywordSearch(); }} className="relative mb-2">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="음료 이름을 검색해보세요"
                        className="h-10 rounded-full pl-4 pr-20"
                    />
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center">
                        {inputValue && (
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={handleClearKeyword}
                                className="h-8 w-8 rounded-full"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                        <Button
                            type="submit"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                        >
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </form>
                {!keyword && (
                    <Tabs value={category} onValueChange={handleCategoryChange}>
                        <TabsList className="w-full h-auto flex-wrap justify-start gap-1.5 bg-transparent p-0">
                            {MENU_CATEGORY_LIST.map((item) => (
                                <TabsTrigger
                                    key={item.value}
                                    value={item.value}
                                    className="rounded-full px-3 py-1.5 text-xs border border-border data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:border-foreground"
                                >
                                    {item.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                )}
            </div>
            <div className="px-4">
            {data.pages[0]?.list?.length > 0 ? (
                <ul className="space-y-2">
                    {data.pages.map((page) =>
                        page?.list?.map((item: IMenuItem) => (
                            <li key={item._id}>
                                <MenuItem {...item} />
                            </li>
                        ))
                    )}
                </ul>
            ) : (
                <MenuItemEmpty />
            )}
            {isFetchingNextPage && <Loading />}
            </div>
        </div>
    );
};

export default FilteredMenuList;
