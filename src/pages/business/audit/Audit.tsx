import { useState } from "react";
import Layout from "../../../components/Layout";
import ApiLog from "./components/ApiLog";
import EventAudit from "./components/Event";
import Webhooks from "./components/Webhooks";
import styles from "./models/audit.module.scss";
const Audit = () => {
    const [active, setActive] = useState(1);
    const handleActiveTab = (index: number) => {
        setActive(index);
    };
    return (
        <Layout pageTitle="Audit">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Audits trail</h1>
                </div>

                <div className={styles.audit_content_tab}>
                    <ul className={styles.ul}>
                        <li
                            onClick={() => handleActiveTab(1)}
                            className={active === 1 ? styles.active : styles.links}
                        >
                            Events
                        </li>
                        <li
                            onClick={() => handleActiveTab(2)}
                            className={active === 2 ? styles.active : styles.links}
                        >
                            API Logs
                        </li>
                        <li
                            onClick={() => handleActiveTab(3)}
                            className={active === 3 ? styles.active : styles.links}
                        >
                            Webhooks Logs
                        </li>
                    </ul>

                    <div className={styles.audit_content}>
                        {active === 1 && <EventAudit />}
                        {active === 2 && <ApiLog />}
                        {active === 3 && <Webhooks />}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Audit;
