export interface inputkeyInterface {
    label: string;
    type: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    togglePasswordVisibility: () => void;
    isShown: boolean;
    setIsSHown?: (isShown: boolean) => void;
    checked?: boolean;
    defaultValue: string;
}
