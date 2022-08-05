import { Dispatch, SetStateAction } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import styles from "./navbar.module.scss";

interface NavbarProps {
    inactive: boolean;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ inactive, setOpenSidebar }: NavbarProps) => {
    return (
        <div className={styles.container}>
            <div className={inactive ? styles.navbar : styles.inactive}>
                <div className={styles.toggleSidebar} onClick={() => setOpenSidebar(true)}>
                    <AiOutlineMenu size={30} color="#213f7d" />
                </div>
                <div className={styles.navbar_searchbar}>
                    <div className={styles.search}>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search for anything..."
                        />
                        <div className={styles.search_img}>
                            {" "}
                            <AiOutlineSearch color="#fff" size={20} />
                        </div>
                    </div>
                </div>
                <div className={styles.options}>
                    <div className={styles.notificationIcon}>
                        <IoMdNotificationsOutline color="#fff" size={25} />
                    </div>

                    <div className={styles.profile}>
                        <span className={styles.profile_dets}>D</span>
                        <select name="profile" id="">
                            <option value="Adedeji">Adedeji</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
