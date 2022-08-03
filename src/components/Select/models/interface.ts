export interface IOption {
    title: string;
    value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: IOption[];
    className?: string;
    style?: React.CSSProperties;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    placeholder: string;
    name: string;
    label: string;
    labelStyle?: React.CSSProperties;
}
