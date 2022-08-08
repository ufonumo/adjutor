import { Drawer } from "antd";
import { useState } from "react";
import styles from "./layout.module.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import useWindowSize from "../../hooks/useWindowSize";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export interface LayoutProps {
    children: React.ReactNode;
    pageTitle?: string;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [inactive, setInactive] = useState(true);

    const onCollapse = (inactive: boolean) => {
        setInactive(inactive);
    };

    const { width } = useWindowSize();

    return (
        <div className={styles.container}>
            <Navbar inactive={inactive} setOpenSidebar={setOpenSidebar} />

            <div
                className={inactive ? styles.menu_toggle : styles.active_menu_toggle}
                onClick={() => setInactive(!inactive)}
            >
                {inactive ? <BiArrowBack /> : <BsArrowRight />}
            </div>

            <div className={inactive ? styles.container_sidebar_open : styles.container_sidebar}>
                <div className={styles.sidebar_content}>
                    <Sidebar
                        onCollapse={onCollapse}
                        inactive={inactive}
                        setInactive={setInactive}
                        setOpenSidebar={setOpenSidebar}
                    />
                </div>

                {width < 800 ? (
                    <Drawer
                        visible={openSidebar}
                        onClose={() => setOpenSidebar(false)}
                        closable={false}
                        width={320}
                        bodyStyle={{ padding: "0px" }}
                    >
                        <Sidebar
                            onCollapse={onCollapse}
                            inactive={inactive}
                            setInactive={setInactive}
                            setOpenSidebar={setOpenSidebar}
                        />
                    </Drawer>
                ) : null}

                <main className={styles.main}>
                    <div className={styles.main_container}>{children}</div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
