import styles from "./models/dropArea.module.scss";
import { DropAreaProps } from "./models/interface";
const DropArea = ({ name }: DropAreaProps) => {
    return (
        <div className={styles.container}>
            <label htmlFor="input" className={styles.label}>
                Drop image or click to upload
            </label>
            <input type="file" id="input" className={styles.input} name={name} />
        </div>
    );
};

export default DropArea;
