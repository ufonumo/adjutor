import styles from "./models/passwordInput.module.scss";
import { PasswordInputProps } from "./models/interface";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const PasswordInput = ({
    label,
    name,
    isShown,
    togglePasswordVisibility,
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
                {isShown ? (
                    <span className={styles.showPassword} onClick={togglePasswordVisibility}>
                        <BsEye size={20} color="#213F7D" />
                    </span>
                ) : (
                    <span className={styles.showPassword} onClick={togglePasswordVisibility}>
                        <BsEyeSlash size={20} color="#213F7D" />
                    </span>
                )}
            </div>
        </div>
    );
};

export default PasswordInput;
