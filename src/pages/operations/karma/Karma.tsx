import Card from "../../../components/Card/card";
import Layout from "../../../components/Layout";
import styles from "./models/karma.module.scss";

import { BsArrowUpCircle } from "react-icons/bs";
import Tables from "../../../components/Table/tables";
import { karmaData } from "./models/karmaData";

const Karma = () => {
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

                <Tables header="Karma" dataSource={[]} columns={[]} />
            </div>
        </Layout>
    );
};

export default Karma;
