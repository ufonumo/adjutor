import { AiOutlineCloudUpload } from "react-icons/ai";
import styles from "./uploadInput.module.scss";
import { UploadInputProps } from "./models/uploadInputInterface";

const UploadInput = ({
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
    text,
}: UploadInputProps): JSX.Element => {
    return (
        <>
            <label style={labelStyle} className={styles["label"]} htmlFor={`${name}`}>
                {label}
            </label>
            <label htmlFor={`${name}`} className={styles["input-container"]}>
                {text}
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
                <div className={styles.upload}>
                    <AiOutlineCloudUpload color="#3CB2FF" size={20} />
                </div>
            </label>
        </>
    );
};

export default UploadInput;
