import styles from "../models/signup.module.scss";
export const successful = () => {
    return (
        <div className={styles.sucessContainer}>
            <div className={styles.header}>
                <h1>Your Account is all Set !</h1>
            </div>
            <p>Your Adjutor account is all set up. Go to dashboard and start lending like a PRO!</p>
        </div>
    );
};
