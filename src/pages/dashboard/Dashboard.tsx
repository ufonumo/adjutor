import Card from "../../components/Card/card";
import styles from "./models/dashboard.module.scss";
import walletImg from "../../assets/icons/dashboard/wallet.svg";
import addIcon from "../../assets/icons/dashboard/add.svg";

import arrowIcon from "../../assets/icons/dashboard/arrow.svg";
import { columns, dashboardData, tableData } from "./models/dashboardData";
import graphIcon from "../../assets/icons/dashboard/graph.svg";
import Tables from "../../components/Table/tables";
import Drawer from "../business/wallet/components/Drawer";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const Dashboard = () => {
    const [visible, setVisible] = useState(false);
    const { width } = useWindowSize();

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Dashboard</h1>
                    <p>Hello daniel 😊👋, How are you doing today</p>
                </div>
                <div className={styles.dashboard_content}>
                    <Card variant="blue">
                        <div className={styles.iconContainer}>
                            <p>Wallet Balance</p>
                            <img src={walletImg} alt="Wallet" />
                        </div>
                        <div className={styles.walletContainer}>
                            <h3>₦ 5,000</h3>
                            <div className={styles.subContainer} onClick={showDrawer}>
                                <img src={addIcon} alt="Add" />
                                <p>Fund wallet</p>
                            </div>
                        </div>
                    </Card>

                    <div className={styles.dashboard_content_list}>
                        {dashboardData.map((list, index) => (
                            <Card variant="default" key={index}>
                                {" "}
                                <h4>{list.title}</h4>
                                <div className={styles.flex}>
                                    <div>
                                        <div className={styles.amountContainer}>
                                            <h3>{list.amount}</h3>
                                        </div>
                                        <div className={styles.percentContainer}>
                                            <img src={arrowIcon} alt={list.title} />
                                            <p>
                                                <span>{list.percent} </span> last 30 days
                                            </p>
                                        </div>
                                    </div>
                                    <img src={graphIcon} alt={list.title} />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {width < 768 ? (
                    <div className={styles.mobile_card_container}>
                        <h3 className="heading3">Recent API Calls</h3>

                        {tableData.map((list, index) => (
                            <Card variant="default" key={index}>
                                <div className={styles.card_container_item} key={index}>
                                    <h3>Method: {list.method}</h3>
                                    <p>Status : {list.status}</p>
                                    <p>URL: {list.url}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Tables header="Recent API Calls" dataSource={tableData} columns={columns} />
                )}
            </div>

            {visible && <Drawer visible={visible} onClose={onClose} title="Fund Wallet" />}
        </>
    );
};

export default Dashboard;
