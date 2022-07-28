import { Select } from "antd";
import styles from "./multiselect.module.scss";
import { multiSelectProps } from "./utils/interface";

const MultiSelect = ({ placeholder, handleChange, children, icon }: multiSelectProps) => {
    return (
        <div>
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
