import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Button from "../../../components/Button/button";
import Layout from "../../../components/Layout";
import Tables from "../../../components/Table/tables";
import AppDrawer from "./components/AppDrawer";
import styles from "./models/app.module.scss";

const BusinessApps = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <Layout pageTitle="Apps">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.header_content}>
                        <h1>Apps (0)</h1>
                        <p>Manage and setup your apps</p>
                    </div>
                    <Button
                        onClick={showDrawer}
                        type="button"
                        variant="light_blue"
                        className={styles.btn}
                    >
                        <BiPlus size={20} /> Create app
                    </Button>
                </div>

                <Tables header="Apps" dataSource={[]} columns={[]} />
            </div>

            {visible && <AppDrawer title="Create app" visible={visible} onClose={onClose} />}
        </Layout>
    );
};

export default BusinessApps;
