import { CardProps } from "./utils/interface";
import styles from "./card.module.scss";

const Card = ({ className, variant, children, image, subtitle }: CardProps) => {
    return (
        <div className={(className ? `${className} ` : "") + `${styles[`--${variant}`]}`}>
            {/* <div className={styles.imgContainer}>
                <img className={styles["image"]} src={image} alt="" />
                <h6 className={styles.subtitle}>{subtitle}</h6>
            </div> */}
            {children} card
        </div>
    );
};

export default Card;
