import { Select } from "antd";
import styles from "./models/multiselect.module.scss";
import { multiSelectProps } from "./models/interface";

const MultiSelect = ({
    placeholder,
    handleChange,
    children,
    icon,
    labelStyle,
    name,
    label,
}: multiSelectProps) => {
    return (
        <div>
            <label style={labelStyle} className={styles["label"]} htmlFor={`${name}`}>
                {label}
            </label>
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder={placeholder}
                defaultValue={["china"]}
                onChange={handleChange}
                optionLabelProp="label"
                className={styles.select}
            >
                {children}
            </Select>
        </div>
    );
};

export default MultiSelect;
