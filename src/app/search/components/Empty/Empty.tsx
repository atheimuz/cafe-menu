import { SearchX } from "lucide-react";

const Empty = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <SearchX className="h-12 w-12 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground mt-3">검색 결과가 없어요</p>
            <p className="text-xs text-muted-foreground/60 mt-1">다른 키워드로 검색해보세요</p>
        </div>
    );
};

export default Empty;
