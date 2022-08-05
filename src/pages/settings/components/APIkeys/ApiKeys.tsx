import Button from "../../../../components/Button/button";
import Card from "../../../../components/Card/card";
import styles from "./models/api.module.scss";
import { GrPowerCycle } from "react-icons/gr";
import InputKeys from "../../../../components/InputKeys/InputKeys";
import { useState } from "react";
import { IoIosWarning } from "react-icons/io";

const ApiKeys = () => {
    const [isShown, setIsSHown] = useState(true);
    const [secretKey, setSecretKey] = useState(false);

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };

    const toggleSecretKey = () => {
        setSecretKey((secretKey) => !secretKey);
    };
    return (
        <Card variant="default">
            <div className={styles.header}>
                <h3>API Keys</h3>{" "}
            </div>
            <div className={styles.api_keys_container}>
                <div className={styles.api_live_keys}>
                    <div className={styles.api_live_keys_header}>
                        <h4>Live Keys</h4>
                        <Button variant="border" type="button">
                            <GrPowerCycle color="#213F7D" /> Generate new keys
                        </Button>
                    </div>

                    <InputKeys
                        defaultValue="sk_test_d54984f569584ba3fb759dae383c0880f2f59747"
                        name="Product Key"
                        label="Product Key"
                        type="text"
                        onChange={togglePassword}
                        togglePasswordVisibility={togglePassword}
                        isShown={isShown}
                    />
                    <InputKeys
                        defaultValue="sk_test_d54984f569584ba3fb759dae383c0880f2f59747"
                        name="Secret Key"
                        label="Secret Key"
                        type="text"
                        onChange={toggleSecretKey}
                        togglePasswordVisibility={toggleSecretKey}
                        isShown={secretKey}
                    />
                </div>
                <div className={styles.api_live_keys}>
                    <div className={styles.api_live_keys_header}>
                        <h4>Test Keys</h4>
                        <Button variant="border" type="button">
                            <GrPowerCycle color="#213F7D" /> Generate new keys
                        </Button>
                    </div>

                    <div className={styles.warning}>
                        <IoIosWarning size={20} color="#9C0F2E" />
                        <p>
                            {" "}
                            These keys are for testing only. Please DO NOT use them in production.
                        </p>
                    </div>

                    <InputKeys
                        defaultValue="sk_test_d54984f569584ba3fb759dae383c0880f2f59747"
                        name="Product Key"
                        label="Product Key"
                        type="text"
                        onChange={togglePassword}
                        togglePasswordVisibility={togglePassword}
                        isShown={isShown}
                    />
                    <InputKeys
                        defaultValue="sk_test_d54984f569584ba3fb759dae383c0880f2f59747"
                        name="Secret Key"
                        label="Secret Key"
                        type="text"
                        onChange={toggleSecretKey}
                        togglePasswordVisibility={toggleSecretKey}
                        isShown={secretKey}
                    />
                </div>
            </div>
        </Card>
    );
};

export default ApiKeys;
