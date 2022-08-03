import Card from "../../components/Card/card";
import Layout from "../../components/Layout";
import styles from "./models/home.module.scss";

import { homeData } from "./models/data";

const Home = () => {
    return (
        <Layout pageTitle="Home">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Hello Daniel,</h1>
                    <p>We’re excited to have you on board. What would you like to do today?</p>
                </div>
                <div className={styles.body}>
                    {homeData.map((list, index) => (
                        <Card variant={list?.variant} key={index}>
                            <div className={styles.iconContainer}>
                                <img src={list?.icon} alt={list.title} />
                            </div>
                            <div className={styles.titleContainer}>
                                <h2>{list.title}</h2>
                                <p>{list.subtitle}</p>
                            </div>

                            {list.submenu && (
                                <div className={styles.submenu}>
                                    {list.submenu.map((sublist, index) => (
                                        <div className={sublist.variant} key={index}>
                                            <p>{sublist.name}</p>
                                            <img src={sublist.icon} alt={sublist.name} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Home;