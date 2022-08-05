import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Button from "../../../components/Button/button";
import Card from "../../../components/Card/card";
import Layout from "../../../components/Layout";
import Tables from "../../../components/Table/tables";
import useWindowSize from "../../../hooks/useWindowSize";
import AppDrawer from "./components/AppDrawer";
import styles from "./models/app.module.scss";
import { columns, dataSource } from "./models/appData";

const BusinessApps = () => {
    const [visible, setVisible] = useState(false);
    const { width } = useWindowSize();

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

                {width < 768 ? (
                    <div className={styles.mobile_card_container}>
                        {dataSource.map((list, index) => (
                            <Card variant="default" key={index}>
                                <div className={styles.card_container_item} key={index}>
                                    <h3>App: {list.app}</h3>
                                    <p>Product : {list.product}</p>
                                    <p>Created: {list.created}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Tables header="Apps" dataSource={dataSource} columns={columns} />
                )}
            </div>

            {visible && <AppDrawer title="Create app" visible={visible} onClose={onClose} />}
        </Layout>
    );
};

export default BusinessApps;
