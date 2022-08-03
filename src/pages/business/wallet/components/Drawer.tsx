import { useState } from "react";
import Button from "../../../../components/Button/button";
import Slider from "../../../../components/Slider/Slider";
import styles from "../../models/all.module.scss";
import { DrawerInterface } from "./models/drawerInterface";
import SuccessDrawer from "../../../../components/successSlider/Sucess";

const Drawer = ({ visible, onClose, title }: DrawerInterface) => {
    const [openSuccessDrawer, setOpenSuccessDrawer] = useState(false);
    const handleClose = () => {
        setOpenSuccessDrawer(false);
    };
    return (
        <div>
            <Slider visible={visible} onClose={onClose} title={title}>
                <div className={styles.drawer_content}>
                    <label htmlFor="amount" className={styles.label}>
                        How much do you want to add to your wallet?
                    </label>

                    <div className={styles.amount_container}>
                        <span className={styles.currency}>NGN</span>
                        <input className={styles.input} type="text" id="amount" />
                    </div>

                    <div className={styles.button_container}>
                        <div className={styles.checkbox}>
                            <input type="checkbox" name="terms" id="terms" />
                            <label htmlFor="terms" className={styles.labelCheckbox}>
                                I agree to fund my wallet with this non-refundable, non-transferable
                                deposit.
                            </label>
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
                </div>
            </Slider>
            {openSuccessDrawer && (
                <SuccessDrawer
                    visible={openSuccessDrawer}
                    onClose={handleClose}
                    title="Fund Wallet"
                    content="You have successfully funded your wallet with NGN50,000"
                />
            )}
        </div>
    );
};

export default Drawer;
