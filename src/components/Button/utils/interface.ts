import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "inactive" | "filter" | "blue";
    style?: React.CSSProperties;
    isLoading?: boolean;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    type: "button" | "submit" | "reset";
}
