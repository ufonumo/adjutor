import { SidebarRoutes } from "../../../routes";
import { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./sidebar.module.scss";
import { ReactComponent as MobileLogo } from "../../../assets/images/login/lendsqr.svg";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineFile } from "react-icons/ai";

interface SidebarProps {
    pageTitle: string;
    onCollapse: (val: any) => void;
    inactive: boolean;
    setInactive: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ pageTitle, onCollapse, inactive, setInactive }: SidebarProps) => {
    useEffect(() => {
        if (inactive) {
            removeActiveClassFromSubMenu();
        }

        onCollapse(inactive);
    }, [inactive]);
    const removeActiveClassFromSubMenu = () => {
        document.querySelectorAll(".sub_menu").forEach((el) => {
            el.classList.remove("active");
        });
    };
    useEffect(() => {
        let menuItems = document.querySelectorAll(".menu_item");
        menuItems.forEach((el) => {
            el.addEventListener("click", (e) => {
                const next = el.nextElementSibling;
                removeActiveClassFromSubMenu();
                menuItems.forEach((el) => el.classList.remove("active"));
                el.classList.toggle("active");
                console.log(next);
                if (next !== null) {
                    next.classList.toggle("active");
                }
            });
        });
    }, []);

    return (
        <div className={inactive ? styles.side_menu : styles.inactive}>
            <div className={styles.top_section}>
                <div className={styles.logo}>
                    <MobileLogo /> <span>lendsqr</span>
                </div>
                <div className={styles.menu_toggle} onClick={() => setInactive(!inactive)}>
                    {inactive ? (
                        <div className={styles.menu_toggle_icon}>
                            <BiArrowBack />
                        </div>
                    ) : (
                        <div className={styles.menu_toggle_icon}>
                            {" "}
                            <BsArrowRight />
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.main_menu}>
                <ul>
                    {/* {SidebarRoutes?.map((list, index) => (
                        <li key={index} className={styles.menu_item}>
                            <Link to={list?.path} className={styles.links}>
                                <span className={styles.menu_icon}>{list?.icon}</span>

                                <span>{list.title}</span>
                            </Link>
                            {list.submenu && (
                                <ul className={styles.sub_menu}>
                                    {list.submenu.map((sublist, index) => (
                                        <li key={index} className={styles.sub_menu_item}>
                                            <Link to={sublist?.path}>
                                                <span>{sublist?.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))} */}
                </ul>
            </div>

            <div className={styles.bottom}>
                <AiOutlineFile size={20} />
                <p>API Documentation</p>
            </div>
        </div>
    );
};

export default Sidebar;
