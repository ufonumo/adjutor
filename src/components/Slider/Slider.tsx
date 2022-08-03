import { Drawer } from "antd";
import styles from "./models/slider.module.scss";
import { SliderInterface } from "./models/sliderInterface";
import backIcon from "../../assets/icons/back.svg";

const Slider = ({ onClose, title, visible, children }: SliderInterface) => {
    return (
        <div>
            <Drawer
                placement="right"
                onClose={onClose}
                visible={visible}
                size="default"
                closable={false}
            >
                <div className={styles.header}>
                    <img onClick={onClose} src={backIcon} alt="back" />
                    <h1>{title}</h1>
                </div>
                <div className={styles.slider_content}>{children}</div>
            </Drawer>
        </div>
    );
};

export default Slider;
