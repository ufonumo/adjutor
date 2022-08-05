import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card/card";
import ToolTips from "../../../../components/ToolTip/toolTip";
import Layout from "../../../../components/Layout";
import Scoring from "./components/scoring/Scoring";
import styles from "./models/decision.module.scss";
import { ModuleData, workspaceData } from "./models/decisionData";
import { BsArrowRight } from "react-icons/bs";

const DecisionModel = () => {
    const [showScoring, setShowScoring] = useState(false);

    return (
        <Layout pageTitle="Decision Models">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Decision Models</h1>
                    <Link to="/offer-setting">
                        <p>
                            go to offer settings <FiChevronsRight size={15} />
                        </p>
                    </Link>
                </div>

                <div className={styles.card_container}>
                    {/* models */}
                    <Card variant="default">
                        <div className={styles.card_content}>
                            <h3>Modules</h3>
                            <div className={styles.card_modules}>
                                {ModuleData.map((item, index) => (
                                    <Card variant="gray" key={index}>
                                        <div className={styles.card_module_content}>
                                            <h4>{item.title}</h4>
                                            {item.charges && <p>Provider :{item.charges}</p>}

                                            <p>
                                                Pre-Offer:{" "}
                                                <span className={styles.offer}>
                                                    {item.pre_offer}
                                                </span>{" "}
                                            </p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* workspace */}
                    <Card variant="light_gray">
                        <div className={styles.card_content}>
                            <div className={styles.card_header}>
                                <h3>
                                    Workspace
                                    <ToolTips
                                        title="Press hold to select and drag each tab up and down to set your sequence"
                                        icon={<AiOutlineInfoCircle color="#3CB2FF" />}
                                    />
                                </h3>
                                <p className={styles.edit}>
                                    Edit Details <BsArrowRight color="#3CB2FF" />
                                </p>
                            </div>

                            <div className={styles.card_sub}>
                                <div>
                                    <h3>model name</h3>
                                    <p>Default Irorun Model</p>
                                </div>
                                <div>
                                    <h3>model description</h3>
                                    <p>Default Irorun Model</p>
                                </div>
                            </div>

                            <div className={styles.card_workspace}>
                                {workspaceData.map((item, index) => (
                                    <div
                                        className={styles.card_workspace_content}
                                        key={index}
                                        onClick={() => setShowScoring(true)}
                                    >
                                        <p>0{item.id}</p>
                                        <Card variant="default">
                                            <h4 className={styles.workspace_name}>{item.name}</h4>
                                            {item.minimum && (
                                                <p className={styles.workspace_sub}>
                                                    Provider: {item.minimum}
                                                </p>
                                            )}
                                            {item.provider && (
                                                <p className={styles.workspace_sub}>
                                                    Provider: {item.provider}
                                                </p>
                                            )}
                                            <p className={styles.workspace_sub}>
                                                Pre-offer:{" "}
                                                <span className={styles.offer}>{item.offer}</span>{" "}
                                            </p>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* configuration */}
                    <Card variant="dark_gray">
                        <div className={styles.card_content}>
                            <h3>Configuration</h3>

                            <Card variant="default">
                                <div className={styles.card_configuration_header}>
                                    <h4>Module: Scoring</h4>
                                    <p>id:345</p>
                                </div>
                                <p className={styles.version}>Version ID: 0</p>
                                <p className={styles.version}>Decision Model ID: 44</p>
                            </Card>

                            {showScoring && <Scoring />}
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default DecisionModel;
