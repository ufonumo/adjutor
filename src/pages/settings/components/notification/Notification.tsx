import { Switch } from "antd";
import Card from "../../../../components/Card/card";
import styles from "./models/notification.module.scss";
import { notificationData } from "./models/notificationData";

const Notification = () => {
    const onChange = (checked: boolean) => {
        // console.log(`switch to ${checked}`);
    };
    return (
        <Card variant="default">
            <div className={styles.header}>
                <h3>Manage Notification Settings</h3>{" "}
            </div>
            <div className={styles.notification_container}>
                <h4>NOTIFICATIONS YOU’LL RECEIVE</h4>

                <div className={styles.content}>
                    <ul>
                        {notificationData.map((data, index) => (
                            <li key={index} className={styles.list}>
                                <Switch defaultChecked onChange={onChange} />
                                <div className={styles.title}>
                                    <h5>{data.title}</h5>
                                    <p>{data.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
};

export default Notification;
