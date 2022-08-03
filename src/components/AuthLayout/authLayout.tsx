import styles from "./models/authlayout.module.scss";
import { ReactComponent as Logo } from "../../assets/images/login/logo.svg";
import { ReactComponent as LoginImage } from "../../assets/images/login/random.svg";
import { ReactComponent as MobileLogo } from "../../assets/images/login/lendsqr.svg";
import { IAuthLayoutProps } from "./models/interface";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbHeadset } from "react-icons/tb";

const AuthLayout = ({ children }: IAuthLayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <Logo />

                <div className={styles.bottomImage}>
                    <LoginImage />
                </div>

                <div className={styles.subText}>
                    <p>Pecunia 2.0 is here! Redesigned for a better experience. 🎉</p>
                </div>
            </div>
            <div className={styles.left}>
                <div className={styles.leftContainer}>
                    <div className={styles.mobileLogo}>
                        {" "}
                        <MobileLogo /> Lendsqr
                    </div>

                    {children}
                </div>

                <div className={styles.left_subText}>
                    <p>
                        Read our FAQs <AiOutlineQuestionCircle size={15} />
                    </p>

                    <p>
                        <TbHeadset size={30} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
