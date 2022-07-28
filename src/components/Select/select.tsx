import styles from "./select.module.scss";
import { IOption, SelectProps } from "./utils/interface";

const Select = ({ className, onChange, options, style, placeholder, ...rest }: SelectProps) => {
    return (
        <div className={styles["select-container"]} style={style} data-testid="select-container">
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
            <div className={styles["select__dropdown-icon"]}>{/* <DropdownIcon /> */}</div>
        </div>
    );
};

export default Select;
