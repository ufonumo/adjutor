export interface InputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    minLength?: number;
    maxLength?: number;
}
