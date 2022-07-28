export interface CardProps {
    className?: string;
    variant: "default" | "purple" | "offer" | "white" | "blue" | "yellow";
    children: React.ReactNode;
    image?: string;
    subtitle?: string;
}
