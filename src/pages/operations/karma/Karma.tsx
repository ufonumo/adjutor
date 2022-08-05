import Card from "../../../components/Card/card";
import Layout from "../../../components/Layout";
import styles from "./models/karma.module.scss";

import { BsArrowUpCircle } from "react-icons/bs";
import Tables from "../../../components/Table/tables";
import { karmaColumnData, karmaData, karmaDataSource } from "./models/karmaData";
import useWindowSize from "../../../hooks/useWindowSize";

const Karma = () => {
    const { width } = useWindowSize();

    return (
        <Layout pageTitle="Karma">
            <div className={styles.container}>
                <div className={styles.header}>
                    {" "}
                    <h1>Karma</h1>
                </div>
                <div className={styles.card_container}>
                    {karmaData.map((data, index) => (
                        <Card variant="default" key={index}>
                            <div className={styles.card_header}>
                                <img src={data.icon} alt="total" />
                                <h4>{data.title}</h4>
                            </div>
                            <h2>{data.value}</h2>
                            <div className={styles.card_bottom}>
                                <BsArrowUpCircle color="#18A957" /> <p>{data.percent}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {width < 768 ? (
                    <div className={styles.mobile_card_container}>
                        {karmaDataSource.map((list, index) => (
                            <Card variant="default" key={index}>
                                <div className={styles.card_container_item} key={index}>
                                    <h3>Report: {list.report}</h3>
                                    <p>Type : {list.type}</p>
                                    <p>Email: {list.email}</p>
                                    <p>Approved on: {list.approved}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Tables header="Karma" dataSource={karmaDataSource} columns={karmaColumnData} />
                )}
            </div>
        </Layout>
    );
};

export default Karma;
