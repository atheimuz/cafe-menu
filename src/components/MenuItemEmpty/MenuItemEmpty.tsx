import { FileX } from "lucide-react";

const MenuItemEmpty = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <FileX className="h-10 w-10 mb-3" />
            <p className="text-sm">메뉴가 없어요</p>
        </div>
    );
};

export default MenuItemEmpty;
