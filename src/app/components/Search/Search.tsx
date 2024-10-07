"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "@atheimuz/react-ui";
import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.scss";

interface Props {
    keyword?: string;
}
const Search = ({ keyword }: Props) => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState<string>("");

    const handleSearch = () => {
        if (!inputValue) return;
        router.push(`/search?keyword=${inputValue}`);

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputValue(e.target.value)
                    }
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
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
        </div>
    );
};

export default Search;
