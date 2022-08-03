import styles from "./models/passwordInput.module.scss";
import { PasswordInputProps } from "./models/interface";
import { BsEyeSlash } from "react-icons/bs";

const PasswordInput = ({
    label,
    type,
    name,
    placeholder,
    isShown,
    togglePasswordVisibility,
    checked,
    labelStyle,
}: PasswordInputProps) => {
    return (
        <div>
            <label style={labelStyle} className={styles["label"]} htmlFor={`${name}`}>
                {label}
            </label>
            <div className={styles.formGroup_password}>
                <input
                    name="password"
                    type={isShown ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    prefix="Show"
                    aria-label="password"
                />
                <span className={styles.showPassword} onClick={togglePasswordVisibility}>
                    <BsEyeSlash size={20} color="#39cdcc" />
                </span>
            </div>
        </div>
    );
};

export default PasswordInput;
