import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const ItemTitle = ({ children }: Props) => {
    return <h3 className="text-sm font-semibold text-foreground mb-3">{children}</h3>;
};

export default ItemTitle;
