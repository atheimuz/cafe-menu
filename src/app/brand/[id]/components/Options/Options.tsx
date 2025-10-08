import ItemTitle from "@/components/ItemTitle";
import { convertOption } from "@/utils/brand";
import { Card } from "@/components/ui/card";

const icons: { [key: string]: string } = {
    caffeine: "/images/icons/coffee.png",
    milk: "/images/icons/milk.png",
    sugar: "/images/icons/sugar.png"
};

interface Props {
    options: { type: string; options: string[] }[];
}
const Options = ({ options }: Props) => {
    return (
        <div className="px-4 pb-4">
            <ItemTitle>옵션 제공</ItemTitle>
            <div className="overflow-x-auto -mx-4 px-4 py-1">
                <div className="flex gap-3">
                    {options?.map((item) => (
                        <Card key={item.type} className="shrink-0 p-3 min-w-[140px]">
                            <div className="flex items-center gap-2 mb-2">
                                <img
                                    src={icons[item.type]}
                                    alt={convertOption(item.type)}
                                    className="h-6 w-6"
                                />
                                <p className="text-xs font-medium">
                                    {convertOption(item.type)}
                                </p>
                            </div>
                            <ul className="space-y-0.5">
                                {item.options.map((option) => (
                                    <li key={option} className="text-xs text-muted-foreground">
                                        {convertOption(option)}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Options;
