export interface UploadInputProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    minLength?: number;
    maxLength?: number;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
}
