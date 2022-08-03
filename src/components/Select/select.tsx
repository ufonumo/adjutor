import { BsChevronDown } from "react-icons/bs";
import styles from "./models/select.module.scss";
import { IOption, SelectProps } from "./models/interface";

const Select = ({
    className,
    onChange,
    options,
    style,
    placeholder,
    name,
    label,
    labelStyle,
    ...rest
}: SelectProps) => {
    return (
        <div className={styles["select-container"]} style={style} data-testid="select-container">
            <label style={labelStyle} className={styles["label"]} htmlFor={`${name}`}>
                {label}
            </label>
            <div className={styles.select_wrapper}>
                <select
                    className={`${styles["select"]} ${className ? className : ""}`}
                    {...rest}
                    onChange={onChange}
                    data-testid="select"
                    placeholder={placeholder}
                >
                    {options.map((option: IOption, index: number) => (
                        <option
                            value={option.value}
                            key={index}
                            className={styles["select__option"]}
                            data-testid="select__option"
                        >
                            {option.title}
                        </option>
                    ))}
                </select>
                <div className={styles.select__dropdown}>
                    <BsChevronDown color="#3CB2FF" />
                </div>
            </div>
        </div>
    );
};

export default Select;
