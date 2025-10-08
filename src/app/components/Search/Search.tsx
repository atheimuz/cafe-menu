"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface Props {
    keyword?: string;
}
const Search = ({ keyword }: Props) => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState<string>("");

    const handleSearch = () => {
        if (!inputValue) return;
        router.push(`/search?keyword=${inputValue}`);

        if (document?.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    useEffect(() => {
        setInputValue(keyword || "");
    }, [keyword]);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}
            className="relative px-4 py-2"
        >
            <div className="flex items-center gap-2">
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="음료 이름을 검색해보세요"
                    className="h-11 rounded-full pl-4 pr-12"
                />
                <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="absolute right-5 h-10 w-10 rounded-full"
                >
                    <SearchIcon className="h-4 w-4" />
                </Button>
            </div>
        </form>
    );
};

export default Search;
