import { BusinessSubMenus, OperationsSubMenus, SidebarRoutes } from "../../routes/routes";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./sidebar.module.scss";
import { ReactComponent as MobileLogo } from "../../assets/images/login/lendsqr.svg";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowRight, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineFile } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { TbActivityHeartbeat, TbSettings } from "react-icons/tb";

interface SidebarProps {
    pageTitle: string;
    onCollapse: (val: any) => void;
    inactive: boolean;
    setInactive: Dispatch<SetStateAction<boolean>>;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ pageTitle, inactive, setInactive, setOpenSidebar }: SidebarProps) => {
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [operationSubMenu, setOperationSubMenu] = useState(false);

    return (
        <div className={inactive ? styles.side_menu : styles.inactive}>
            <div className={styles.top_section}>
                <div className={styles.logo}>
                    <MobileLogo /> <span>lendsqr</span>
                </div>
                <div className={styles.close} onClick={() => setOpenSidebar(false)}>
                    {" "}
                    <AiOutlineClose color="#fff" size={30} />
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
                    {SidebarRoutes.map((list, index) => (
                        <li key={index} className={styles.menu_item}>
                            <Link
                                to={list?.path}
                                className={
                                    pageTitle === list.title ? styles.activeLink : styles.links
                                }
                            >
                                <span className={styles.menu_icon}>{list?.icon}</span>

                                <div className={styles.flex}>
                                    <p className={styles.title}>{list.title}</p>
                                </div>
                            </Link>
                        </li>
                    ))}

                    <li
                        className={styles.menu_item}
                        onClick={() => {
                            if (inactive) {
                                setOpenSubMenu(!openSubMenu);
                            }
                        }}
                    >
                        <Link
                            to=""
                            className={pageTitle === "Business" ? styles.activeLink : styles.links}
                        >
                            <span className={styles.menu_icon}>
                                <BsPeople />
                            </span>

                            <div className={styles.flex}>
                                <p className={styles.title}>Business</p>
                                <span className={styles.dropdown}>
                                    <FiChevronRight />
                                </span>
                            </div>
                        </Link>
                    </li>

                    {openSubMenu && (
                        <ul className={styles.sub_menu}>
                            {BusinessSubMenus?.map((sublist, index) => (
                                <li
                                    key={index}
                                    className={
                                        pageTitle === sublist.name
                                            ? styles.active_Link
                                            : styles.sub_menu_item
                                    }
                                >
                                    <Link to={sublist?.path}>
                                        <span>{sublist?.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    <li
                        className={styles.menu_item}
                        onClick={() => {
                            if (inactive) {
                                setOperationSubMenu(!operationSubMenu);
                            }
                        }}
                    >
                        <Link
                            to=""
                            className={
                                pageTitle === "Operations" ? styles.activeLink : styles.links
                            }
                        >
                            <span className={styles.menu_icon}>
                                <TbActivityHeartbeat />
                            </span>

                            <div className={styles.flex}>
                                <p className={styles.title}>Operations</p>
                                <span className={styles.dropdown}>
                                    <FiChevronRight />
                                </span>
                            </div>
                        </Link>
                    </li>

                    {operationSubMenu && (
                        <ul className={styles.sub_menu}>
                            {OperationsSubMenus?.map((sublist, index) => (
                                <li
                                    key={index}
                                    className={
                                        pageTitle === sublist.name
                                            ? styles.active_Link
                                            : styles.sub_menu_item
                                    }
                                >
                                    <Link to={sublist?.path}>
                                        <span>{sublist?.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    <li className={styles.menu_item}>
                        <Link
                            to="/settings"
                            className={pageTitle === "Settings" ? styles.activeLink : styles.links}
                        >
                            <span className={styles.menu_icon}>
                                <TbSettings />
                            </span>

                            <div className={styles.flex}>
                                <p className={styles.title}>Settings</p>
                            </div>
                        </Link>
                    </li>
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
