import Card from "../../components/Card/card";
import Layout from "../../components/Layout";
import styles from "./models/operation.module.scss";

import { Link } from "react-router-dom";
import { operationCard } from "./models/operationData";

const Operations = () => {
    return (
        <Layout pageTitle="Decision Models">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Create Your Lending Models</h1>
                    <p>Edit your decision models and offer settings </p>
                </div>

                <div className={styles.card_container}>
                    {operationCard.map((list, index) => (
                        <Link to={list.route} key={index}>
                            <Card variant={list.variant}>
                                <div className={styles.card_header}>
                                    <h4>{list.title}</h4>
                                    <p>{list.subtitle}</p>
                                </div>
                                <div className={styles.iconContainer}>
                                    <img src={list.image} alt={list.title} />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Operations;
