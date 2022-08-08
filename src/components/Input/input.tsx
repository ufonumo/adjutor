// import { ErrorMessage } from "formik";
import styles from "./models/input.module.scss";
import { InputProps } from "./models/interface";

const Input = ({
    label,
    type,
    name,
    placeholder,
    labelStyle,
    inputStyle,
    minLength,
    maxLength,
    onChange,
    value,
}: InputProps): JSX.Element => {
    return (
        <div>
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
                    onChange={onChange}
                    value={value}
                />
            </div>
            {/* <ErrorMessage
                name={name}
                render={(msg) => (
                    <div className="error">
                        {" "}
                        {name} is {msg}
                    </div>
                )}
            /> */}
        </div>
    );
};

export default Input;
