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
        | "light_purple"
        | "gray"
        | "light_gray"
        | "dark_gray";
    children: React.ReactNode;
    image?: string;
    subtitle?: string;
}
