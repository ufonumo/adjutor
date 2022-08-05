import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../../../../../components/Button/button";
import Card from "../../../../../../components/Card/card";
import Input from "../../../../../../components/Input/input";
import Select from "../../../../../../components/Select/select";
import Weight from "../../../../../../components/weight/Weight";
import styles from "../../models//decision.module.scss";
import checkedIcon from "../../../../../../assets/icons/checked.svg";
import { dropdownData } from "../../models/decisionData";
import ScoreDrawer from "./drawer/scoreDrawer";

const Scoring = () => {
    const [quantity, setQuantity] = useState(1);
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>
            <div className={styles.marginTop}>
                <Card variant="default">
                    <div className={styles.card_scoring_header}>
                        <h4>Scoring</h4>
                        <p onClick={showDrawer}>
                            More Fields <BsArrowRight color="#3CB2FF" />
                        </p>
                    </div>
                    <div className={styles.card_scoring}>
                        <div className={styles.scoring_header}>
                            <img src={checkedIcon} alt="check" />
                            <p>AGE</p>
                            <Weight setQuantity={setQuantity} quantity={quantity} />
                        </div>

                        <div className={styles.scoring_content}>
                            <Select
                                placeholder="Previous Loans"
                                name="Previous Loans"
                                onChange={() => {}}
                                options={dropdownData}
                            />
                            <Input type="text" placeholder="00" name="amount" />

                            <div className={styles.inputScore}>
                                <Input type="text" placeholder="00" name="amount" label="Score" />
                                <p> /10</p>
                            </div>
                        </div>
                        <div className={styles.scoring_content}>
                            <Select
                                placeholder="Previous Loans"
                                name="Previous Loans"
                                onChange={() => {}}
                                options={dropdownData}
                            />
                            <Input type="text" placeholder="00" name="amount" />

                            <div className={styles.inputScore}>
                                <Input type="text" placeholder="00" name="amount" label="Score" />
                                <p> /10</p>
                            </div>
                        </div>

                        <div className={styles.location_content}>
                            <div className={styles.scoring_header}>
                                <img src={checkedIcon} alt="check" />
                                <p>LOCATION</p>
                                <Weight setQuantity={setQuantity} quantity={quantity} />
                            </div>

                            <div className={styles.scoring_content}>
                                <Select
                                    placeholder="Previous Loans"
                                    name="Previous Loans"
                                    onChange={() => {}}
                                    options={dropdownData}
                                />

                                <div className={styles.inputScore}>
                                    <Input
                                        type="text"
                                        placeholder="00"
                                        name="amount"
                                        label="Score"
                                    />
                                    <p> /10</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.scoring_bottom}>
                            <Button type="button" variant="primary" disabled>
                                Save details
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
            {visible && (
                <ScoreDrawer title="Add Scoring Fields" visible={visible} onClose={onClose} />
            )}
        </div>
    );
};

export default Scoring;
