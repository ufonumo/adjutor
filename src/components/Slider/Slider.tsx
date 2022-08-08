import { Drawer } from "antd";
import styles from "./models/slider.module.scss";
import { SliderInterface } from "./models/sliderInterface";
import backIcon from "../../assets/icons/back.svg";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const Slider = ({ onClose, title, visible, children }: SliderInterface) => {
    const [drawerWidth, setDrawerWidth] = useState("");

    const { width } = useWindowSize();

    useEffect(() => {
        width < 768 ? setDrawerWidth("320px") : setDrawerWidth("640px");
    }, [width, visible]);

    return (
        <div>
            <Drawer
                placement="right"
                onClose={onClose}
                visible={visible}
                width={drawerWidth}
                headerStyle={{
                    border: "none",
                }}
                closable={false}
                title={
                    <div className={styles.header}>
                        <img onClick={onClose} src={backIcon} alt="back" />
                        <h1>{title}</h1>
                        <div></div>
                    </div>
                }
            >
                <div className={styles.slider_content}>{children}</div>
            </Drawer>
        </div>
    );
};

export default Slider;
