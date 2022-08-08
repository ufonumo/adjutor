import { BusinessSubMenus, OperationsSubMenus, SidebarRoutes } from "../../routes/routes";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./sidebar.module.scss";
import { ReactComponent as MobileLogo } from "../../assets/images/login/lendsqr.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineFile } from "react-icons/ai";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { TbActivityHeartbeat, TbSettings } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";

interface SidebarProps {
    onCollapse: (val: any) => void;
    inactive: boolean;
    setInactive: Dispatch<SetStateAction<boolean>>;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ inactive, setInactive, setOpenSidebar }: SidebarProps) => {
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
            </div>

            <div className={styles.main_menu}>
                <ul>
                    {SidebarRoutes.map((list, index) => (
                        <NavLink
                            to={list.path}
                            key={index}
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : styles.menu_item
                            }
                        >
                            <div className={styles.menu_icon}>{list?.icon}</div>

                            <div className={styles.flex}>
                                <p className={styles.title}>{list.title}</p>
                            </div>
                        </NavLink>
                    ))}

                    {/* Business with submenu */}
                    <li
                        className={styles.menu_item}
                        onClick={() => {
                            setOpenSubMenu(!openSubMenu);
                        }}
                    >
                        <span className={styles.menu_icon}>
                            <BsPeople />
                        </span>

                        <div className={styles.flex}>
                            <p className={styles.title}>Business</p>
                            <span className={styles.dropdown}>
                                {!openSubMenu ? <FiChevronRight /> : <FiChevronDown />}
                            </span>
                        </div>
                    </li>

                    <ul
                        className={openSubMenu && inactive ? styles.activeSubMenu : styles.sub_menu}
                    >
                        {BusinessSubMenus?.map((sublist, index) => (
                            <NavLink
                                to={sublist.path}
                                key={index}
                                className={({ isActive }) =>
                                    isActive ? styles.activeLink : styles.sub_menu_item
                                }
                            >
                                <span>{sublist?.name}</span>
                            </NavLink>
                        ))}
                    </ul>

                    {/* operations with submenu */}
                    <li
                        className={styles.menu_item}
                        onClick={() => {
                            setOperationSubMenu(!operationSubMenu);
                        }}
                    >
                        <span className={styles.menu_icon}>
                            <TbActivityHeartbeat />
                        </span>

                        <div className={styles.flex}>
                            <p className={styles.title}>Operations</p>
                            <span className={styles.dropdown}>
                                {!operationSubMenu ? <FiChevronRight /> : <FiChevronDown />}
                            </span>
                        </div>
                    </li>

                    <ul
                        className={
                            operationSubMenu && inactive ? styles.activeSubMenu : styles.sub_menu
                        }
                    >
                        {OperationsSubMenus?.map((sublist, index) => (
                            <NavLink
                                to={sublist.path}
                                key={index}
                                className={({ isActive }) =>
                                    isActive ? styles.activeLink : styles.sub_menu_item
                                }
                            >
                                <span>{sublist?.name}</span>
                            </NavLink>
                        ))}
                    </ul>

                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : styles.menu_item
                        }
                    >
                        <span className={styles.menu_icon}>
                            <TbSettings />
                        </span>

                        <div className={styles.flex}>
                            <p className={styles.title}>Settings</p>
                        </div>
                    </NavLink>
                </ul>
            </div>

            <div className={styles.bottom}>
                <AiOutlineFile size={16} />
                <p>API Documentation</p>
            </div>
        </div>
    );
};

export default Sidebar;
