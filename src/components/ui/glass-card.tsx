import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className,
    hoverEffect = false
}: GlassCardProps) => {
    return (
        <div
            className={cn(
                "glass-card rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:scale-[1.02] hover:shadow-glass hover:bg-white/10 cursor-pointer",
                className
            )}
        >
            {children}
        </div>
    );
};
