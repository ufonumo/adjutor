import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiNotification } from "react-icons/bi";
import styles from "./navbar.module.scss";

interface NavbarProps {
    inactive: boolean;
}

const Navbar = ({ inactive }: NavbarProps) => {
    return (
        <div className={inactive ? styles.navbar : styles.inactive}>
            <div className={styles.flex}>
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
