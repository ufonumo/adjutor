import { Drawer } from "antd";
import styles from "./models/slider.module.scss";
import { SliderInterface } from "./models/sliderInterface";
import backIcon from "../../assets/icons/back.svg";
import { useEffect, useState } from "react";

const Slider = ({ onClose, title, visible, children }: SliderInterface) => {
    const [width, setWidth] = useState("");
    useEffect(() => {
        window.screen.width === 320 ? setWidth("320px") : setWidth("375px");
    }, [width, visible]);

    return (
        <div>
            <Drawer
                placement="right"
                onClose={onClose}
                visible={visible}
                width={width}
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
