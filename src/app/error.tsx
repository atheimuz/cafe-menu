"use client";

import RouteError from "@/components/RouteError";

export default function HomeError({
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
            message="브랜드 목록을 불러오지 못했어요"
        />
    );
}
