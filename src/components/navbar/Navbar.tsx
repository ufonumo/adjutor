import { Dispatch, SetStateAction } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import styles from "./navbar.module.scss";
import downArrow from "../../assets/icons/down-arrow.svg";

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
                        <IoMdNotificationsOutline color="#213f7d" size={30} />
                    </div>

                    <div className={styles.profile}>
                        <span className={styles.profile_dets}>D</span>
                        <p className={styles.name}>
                            Adedeji <img src={downArrow} alt="down arrow" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
