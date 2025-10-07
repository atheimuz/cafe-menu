"use client";

import RouteError from "@/components/RouteError";

export default function BrandError({
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
            message="브랜드 정보를 불러오지 못했어요"
        />
    );
}
