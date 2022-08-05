import { useState } from "react";
import Layout from "../../../components/Layout";
import ApiLog from "./components/ApiLog";
import EventAudit from "./components/Event";
import Webhooks from "./components/Webhooks";
import styles from "./models/audit.module.scss";
import { auditTabs } from "./models/auditData";
const Audit = () => {
    const [active, setActive] = useState(0);
    const handleActiveTab = (index: number) => {
        setActive(index);
    };
    return (
        <Layout pageTitle="Audit trail">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Audits trail</h1>
                </div>

                <div className={styles.audit_content_tab}>
                    <ul className={styles.ul}>
                        {auditTabs.map((tab, index) => (
                            <li
                                onClick={() => handleActiveTab(index)}
                                className={active === index ? styles.active : styles.links}
                                key={index}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.audit_content}>
                        {active === 0 && <EventAudit />}
                        {active === 1 && <ApiLog />}
                        {active === 2 && <Webhooks />}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Audit;
