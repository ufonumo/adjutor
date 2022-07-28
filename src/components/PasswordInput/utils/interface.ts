export interface PasswordInputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    togglePasswordVisibility: () => void;
    isShown: boolean;
    setIsSHown?: (isShown: boolean) => void;
    checked?: boolean;
}
