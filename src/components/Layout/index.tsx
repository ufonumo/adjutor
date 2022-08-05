import { Drawer } from "antd";
import { useState } from "react";
import styles from "./layout.module.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

export interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [inactive, setInactive] = useState(true);

    const onCollapse = (inactive: boolean) => {
        setInactive(inactive);
    };

    return (
        <div className={styles.container}>
            <Navbar inactive={inactive} setOpenSidebar={setOpenSidebar} />

            <div className={inactive ? styles.container_sidebar_open : styles.container_sidebar}>
                <div className={styles.sidebar_content}>
                    <Sidebar
                        pageTitle={pageTitle}
                        onCollapse={onCollapse}
                        inactive={inactive}
                        setInactive={setInactive}
                        setOpenSidebar={setOpenSidebar}
                    />
                </div>

                <Drawer
                    visible={openSidebar}
                    onClose={() => setOpenSidebar(false)}
                    closable={false}
                    width={320}
                    bodyStyle={{ padding: "0px" }}
                >
                    <Sidebar
                        pageTitle={pageTitle}
                        onCollapse={onCollapse}
                        inactive={inactive}
                        setInactive={setInactive}
                        setOpenSidebar={setOpenSidebar}
                    />
                </Drawer>

                <main className={styles.main}>
                    <div className={styles.main_container}>{children}</div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
