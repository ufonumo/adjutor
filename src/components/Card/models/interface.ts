export interface CardProps {
    className?: string;
    variant:
        | "default"
        | "purple"
        | "offer"
        | "white"
        | "blue"
        | "yellow"
        | string
        | "light_blue"
        | "light_yellow"
        | "light_purple";
    children: React.ReactNode;
    image?: string;
    subtitle?: string;
}
