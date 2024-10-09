"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.scss";

const TextField = dynamic(
    () => import("@atheimuz/react-ui").then((mod) => mod.TextField),
    { ssr: false }
);

const TextFieldInput = dynamic(
    () => import("@atheimuz/react-ui").then((mod) => mod.TextField.Input),
    { ssr: false }
);

const TextFieldAddon = dynamic(
    () => import("@atheimuz/react-ui").then((mod) => mod.TextField.Addon),
    { ssr: false }
);

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
        <div className={styles.wrapper}>
            <TextField>
                <TextFieldInput
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
                    <TextFieldAddon position="after">
                        <button
                            className={styles.searchBtn}
                            onClick={handleSearch}
                        >
                            <CiSearch />
                        </button>
                    </TextFieldAddon>
                </TextFieldInput>
            </TextField>
        </div>
    );
};

export default Search;
