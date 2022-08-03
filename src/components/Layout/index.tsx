import { useState } from "react";
import styles from "./layout.module.scss";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

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
            <Navbar inactive={inactive} />

            <div className={inactive ? styles.container_sidebar_open : styles.container_sidebar}>
                <div className={styles.sidebar_content}>
                    <Sidebar
                        pageTitle={pageTitle}
                        onCollapse={onCollapse}
                        inactive={inactive}
                        setInactive={setInactive}
                    />
                </div>
                {/* 
                <Drawer
                    opened={openSidebar}
                    onClose={() => setOpenSidebar(false)}
                    withCloseButton={true}
                    overlayColor="inherit"
                    classNames={{
                        closeButton: styles.closeButton,
                    }}
                >
                    <SideBar pageTitle={pageTitle} />
                </Drawer> */}

                <main className={styles.main}>
                    <div className={styles.main_container}>{children}</div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
