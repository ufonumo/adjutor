import { useState } from "react";
import Account from "./components/account/Account";
import ApiKeys from "./components/APIkeys/ApiKeys";
import Notification from "./components/notification/Notification";
import Pricing from "./components/pricing/Pricing";
import Team from "./components/team/Team";
import styles from "./models/settings.module.scss";
import { settingsTabs } from "./models/tabData";

const Settings = () => {
    const [active, setActive] = useState(0);
    const handleActiveTab = (index: number) => {
        setActive(index);
    };

    return (
        <>
            <div className={styles.settings_container}>
                <div className={styles.header}>
                    <h1>Settings</h1>
                </div>
                <div className={styles.settings_content_tab}>
                    <ul className={styles.ul}>
                        {settingsTabs.map((tab, index) => (
                            <li
                                onClick={() => handleActiveTab(index)}
                                className={active === index ? styles.active : styles.links}
                                key={index}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>

                    {active === 0 && <Account />}
                    {active === 1 && <Team />}
                    {active === 2 && <Pricing />}
                    {active === 3 && <ApiKeys />}
                    {active === 4 && <Notification />}
                </div>
            </div>
        </>
    );
};

export default Settings;
