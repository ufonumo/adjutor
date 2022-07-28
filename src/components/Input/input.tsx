import styles from "./input.module.scss";
import { InputProps } from "./utils/interface";

const Input = ({
    label,
    type,
    name,
    placeholder,
    labelStyle,
    inputStyle,
    minLength,
    maxLength,
}: InputProps): JSX.Element => {
    return (
        <>
            <label style={labelStyle} className={styles["label"]} htmlFor={`${name}`}>
                {label}
            </label>
            <div className={styles["input-container"]}>
                <input
                    type={type}
                    name={`${name}`}
                    placeholder={placeholder}
                    className={styles["input"]}
                    style={inputStyle}
                    id={`${name}`}
                    maxLength={maxLength}
                    minLength={minLength}
                />
            </div>
        </>
    );
};

export default Input;
