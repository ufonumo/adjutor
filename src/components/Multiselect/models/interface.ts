export interface multiSelectProps {
    placeholder: string;
    handleChange: (value: any) => void;
    children: any;
    icon?: JSX.Element;
    labelStyle?: React.CSSProperties;
    name: string;
    label: string;
}
