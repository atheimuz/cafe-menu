import { numberWithCommas } from "@/utils/common";
import ItemTitle from "@/components/ItemTitle";

interface Props {
    prices: { size: string; price: number }[];
}

const Price = ({ prices }: Props) => {
    return (
        <div>
            <ItemTitle>가격</ItemTitle>
            <ul className="space-y-1.5">
                {prices?.map((item) => (
                    <li key={item.size} className="flex items-center justify-between text-sm">
                        <p className="text-muted-foreground">{item.size}</p>
                        <span className="font-medium">
                            {numberWithCommas(item.price)}원
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Price;
