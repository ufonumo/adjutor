import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Button from "../../../../../../../components/Button/button";
import Input from "../../../../../../../components/Input/input";
import Slider from "../../../../../../../components/Slider/Slider";
import SuccessDrawer from "../../../../../../../components/successSlider/Sucess";
import { DrawerInterface } from "../../../../../../business/wallet/components/models/drawerInterface";
import { scoreDrawerData } from "../../../models/decisionData";
import styles from "../model/score.module.scss";

const ScoreDrawer = ({ visible, onClose, title }: DrawerInterface) => {
    const [openSuccessDrawer, setOpenSuccessDrawer] = useState(false);
    const handleClose = () => {
        setOpenSuccessDrawer(false);
    };
    return (
        <div>
            <Slider visible={visible} onClose={onClose} title={title}>
                <div className={styles.drawer_content}>
                    <h4>Click the + sign to add field to your config. box</h4>

                    <div className={styles.content}>
                        {scoreDrawerData.map((data, index) => (
                            <div className={styles.flex} key={index}>
                                <p>
                                    <AiOutlinePlusCircle size={15} color="#3CB2FF" /> {data}
                                </p>
                                <div className={styles.inputWidth}>
                                    <Input type="text" placeholder="00" name="amount" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button
                        onClick={() => {
                            setOpenSuccessDrawer(true);
                        }}
                        type="button"
                        variant="primary"
                    >
                        Save Details
                    </Button>
                </div>
            </Slider>

            {openSuccessDrawer && (
                <SuccessDrawer
                    visible={openSuccessDrawer}
                    onClose={handleClose}
                    title="Add Scoring Fields"
                    content="You have successfully added the app to your config. box"
                />
            )}
        </div>
    );
};

export default ScoreDrawer;
