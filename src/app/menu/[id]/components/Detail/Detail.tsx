import { AlertTriangle } from "lucide-react";
import { convertAllergy, convertCaution } from "@/utils/menu";
import ItemTitle from "@/components/ItemTitle";
import { Badge } from "@/components/ui/badge";

interface Props {
    desc: string;
    cautions?: string[];
    allergies?: string[];
    children?: React.ReactElement;
}
const Detail = ({ desc, cautions, allergies, children }: Props) => {
    return (
        <div className="px-4 py-4 space-y-4">
            <h2 className="text-sm text-muted-foreground leading-relaxed">{desc}</h2>
            {cautions && cautions.length > 0 && (
                <div className="space-y-2">
                    {cautions.map((item) => (
                        <div
                            key={item}
                            className="flex items-start gap-2 rounded-xl bg-red-50 text-red-700 border border-red-200 px-3 py-2.5 text-xs"
                        >
                            <AlertTriangle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                            <span>{convertCaution(item)}</span>
                        </div>
                    ))}
                </div>
            )}
            {children}
            <div>
                <ItemTitle>알레르기 유발</ItemTitle>
                {allergies && allergies.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                        {allergies.map((item: string) => (
                            <Badge key={item} variant="outline" className="text-xs">
                                {convertAllergy(item)}
                            </Badge>
                        ))}
                    </div>
                ) : (
                    <p className="text-xs text-muted-foreground">없음</p>
                )}
            </div>
        </div>
    );
};

export default Detail;
