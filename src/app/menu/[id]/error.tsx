"use client";

import RouteError from "@/components/RouteError";

export default function MenuError({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <RouteError
            error={error}
            reset={reset}
            message="메뉴 정보를 불러오지 못했어요"
        />
    );
}
