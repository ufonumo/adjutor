import { BsEye, BsEyeSlash } from "react-icons/bs";
import { inputkeyInterface } from "./models/inputkeyInterface";
import styles from "./models/inputkeys.module.scss";
import { MdContentCopy } from "react-icons/md";

const InputKeys = ({
    label,
    name,
    isShown,
    togglePasswordVisibility,
    defaultValue,
}: inputkeyInterface) => {
    return (
        <div>
            <label className={styles["label"]} htmlFor={`${name}`}>
                {label}
            </label>
            <div className={styles.content}>
                <div className={styles.formGroup_password}>
                    <input
                        name="password"
                        type={isShown ? "text" : "password"}
                        placeholder="Password"
                        id="password"
                        prefix="Show"
                        aria-label="password"
                        defaultValue={defaultValue}
                    />
                    <MdContentCopy size={20} color="#39cdcc" />
                </div>
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

export default InputKeys;
