import styles from "./models/button.module.scss";
import { ButtonProps } from "./models/interface";

const Button = ({
    style,
    variant,
    children,
    className,
    iconLeft,
    iconRight,
    ...rest
}: ButtonProps): JSX.Element => {
    return (
        <button
            style={style}
            className={(className ? `${className} ` : "") + `${styles[`--${variant}`]}`}
            {...rest}
        >
            <span>{iconLeft}</span>
            {rest.isLoading && <span className={styles["loading-icon"]}>loading...</span>}
            {children}
            <span>{iconRight}</span>
        </button>
    );
};

export default Button;
