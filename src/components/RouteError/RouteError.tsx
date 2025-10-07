"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ErrorMessage";

interface Props {
    error: Error & { digest?: string };
    reset: () => void;
    message?: string;
}

const RouteError = ({ reset, message }: Props) => {
    return (
        <div className="flex flex-col items-center gap-4 py-16">
            <ErrorMessage>
                {message || "오류가 발생했습니다. 잠시 후 다시 시도해주세요."}
            </ErrorMessage>
            <Button variant="outline" size="sm" onClick={reset}>
                다시 시도
            </Button>
        </div>
    );
};

export default RouteError;
