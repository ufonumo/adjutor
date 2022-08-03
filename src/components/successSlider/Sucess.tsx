import Button from "../Button/button";
import Slider from "../Slider/Slider";
import styles from "./models/success.module.scss";

import successIcon from "../../assets/icons/success.svg";
import { SuccessInterface } from "./models/successInterface";

const SuccessDrawer = ({ visible, onClose, title, content }: SuccessInterface) => {
    return (
        <div>
            <Slider visible={visible} onClose={onClose} title={title}>
                <div className={styles.drawer_content}>
                    <div className={styles.success_container}>
                        <img src={successIcon} alt="success" />
                        <p> {content}</p>
                    </div>

                    <div className={styles.button_container}>
                        <Button type="button" variant="primary">
                            Continue
                        </Button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SuccessDrawer;
