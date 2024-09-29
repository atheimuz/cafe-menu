"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { TextField } from "@atheimuz/react-ui";
import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.scss";

const Search = () => {
    const searchParams = useSearchParams();

    const router = useRouter();
    const [inputValue, setInputValue] = useState<string>("");
    const keyword = searchParams.get("keyword");

    const handleSearch = () => {
        if (!inputValue) return;
        router.push(`/search?keyword=${inputValue}`);
    };

    useEffect(() => {
        setInputValue(keyword || "");
    }, [keyword]);

    return (
        <div className={styles.wrapper}>
            <TextField>
                <TextField.Input
                    size="middle"
                    round
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    placeholder="돌체라떼"
                >
                    <TextField.Addon position="after">
                        <button
                            className={styles.searchBtn}
                            onClick={handleSearch}
                        >
                            <CiSearch />
                        </button>
                    </TextField.Addon>
                </TextField.Input>
            </TextField>
            {/* <h1 className={styles.title}>
                프랜차이즈 커피들의{"\n"}
                <span className={styles.point}>영양성분</span>을 살펴보세요!
            </h1> */}
        </div>
    );
};

export default Search;
