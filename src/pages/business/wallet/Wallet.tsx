import { useState } from "react";
import Button from "../../../components/Button/button";
import Card from "../../../components/Card/card";
import Layout from "../../../components/Layout";
import Tables from "../../../components/Table/tables";
import Drawer from "./components/Drawer";
import styles from "../models/all.module.scss";
import { columns, dataSource } from "./components/models/data";
import useWindowSize from "../../../hooks/useWindowSize";

const Wallet = () => {
    const [visible, setVisible] = useState(false);
    const { width } = useWindowSize();

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <Layout pageTitle="Wallet">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Your wallet & Payment account</h1>
                    <p>Fund your wallet and monitor all transactions here.</p>
                </div>
                <div className={styles.wallet_container}>
                    <Card variant="blue">
                        <div className={styles.wallet_blue_content}>
                            <h4>Current Balance for API Billing</h4>
                            <h2>NGN 20,000</h2>
                            <Button onClick={showDrawer} type="button" variant="light_blue">
                                Fund wallet
                            </Button>
                        </div>
                    </Card>
                    <Card variant="default">
                        <div className={styles.wallet_default_content}>
                            <h4>Low wallet Threshold</h4>
                            <h2>NGN 20,000</h2>
                            <p>Set Threshold</p>
                        </div>
                    </Card>
                    <Card variant="default">
                        <div className={styles.wallet_default_content}>
                            <h4>Billing account</h4>
                            <div className={styles.billing}>
                                <div className={styles.line}></div>
                                <div className={styles.billing_content}>
                                    <h5>5679*******6795</h5>
                                    <span>Daniel afolabi</span>
                                </div>
                            </div>
                            <p>Edit Billing Account</p>
                        </div>
                    </Card>
                </div>

                {width < 768 ? (
                    <div className={styles.mobile_card_container}>
                        {dataSource.map((list, index) => (
                            <Card variant="default" key={index}>
                                <div className={styles.card_container_item} key={index}>
                                    <h3>Type: {list.type}</h3>
                                    <p>Transaction : {list.transaction}</p>
                                    <p>Amount: {list.amount}</p>
                                    <p>Date: {list.date}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Tables
                        header="Transaction History"
                        dataSource={dataSource}
                        columns={columns}
                    />
                )}
            </div>

            {visible && <Drawer visible={visible} onClose={onClose} title="Fund Wallet" />}
        </Layout>
    );
};

export default Wallet;
