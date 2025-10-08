"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    title?: string;
}
const Header = ({ title }: Props) => {
    const router = useRouter();

    const handleBack = () => {
        if (document.referrer?.includes(window.location.origin)) {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
        <header className="sticky top-0 z-10 flex items-center gap-2 bg-background/90 backdrop-blur-md px-2 py-3 border-b border-border">
            <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="shrink-0"
            >
                <ChevronLeft className="h-5 w-5" />
            </Button>
            {title && (
                <p className="text-sm font-medium truncate">{title}</p>
            )}
        </header>
    );
};

export default Header;
