import Card from "../../components/Card/card";
import Layout from "../../components/Layout";
import styles from "./models/dashboard.module.scss";
import walletImg from "../../assets/icons/dashboard/wallet.svg";
import addIcon from "../../assets/icons/dashboard/add.svg";

import arrowIcon from "../../assets/icons/dashboard/arrow.svg";
import { dashboardData } from "./models/dashboardData";
import graphIcon from "../../assets/icons/dashboard/graph.svg";
import Tables from "../../components/Table/tables";

const Dashboard = () => {
    return (
        <Layout pageTitle="Dashboard">
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
                            <h3>$ 0.00</h3>
                            <div className={styles.subContainer}>
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
                <Tables header="Recent API Calls" dataSource={[]} columns={[]} />
            </div>
        </Layout>
    );
};

export default Dashboard;
