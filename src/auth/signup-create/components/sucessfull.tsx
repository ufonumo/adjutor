import styles from "../signup.module.scss";

const Successful = () => {
    return (
        <div className={styles.sucessContainer}>
            <div className={styles.header}>
                <h1>Yay!, Sign up sucessful. Check your email!</h1>
            </div>
            <p>
                Your account is being validated. A link has been sent to
                <span className={styles.span}> danielakachi@hotmail.com</span> , Please access it to
                proceed with your account set up.
            </p>
        </div>
    );
};

export default Successful;
