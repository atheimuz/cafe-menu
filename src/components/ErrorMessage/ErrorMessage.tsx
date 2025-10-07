import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center gap-2 rounded-xl bg-destructive/10 text-destructive px-4 py-3 text-sm mx-4 my-4">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{children}</span>
        </div>
    );
};

export default ErrorMessage;
