import Slider from "../../../../components/Slider/Slider";
import { DrawerInterface } from "../../wallet/components/models/drawerInterface";
import styles from "../../models/all.module.scss";
import Button from "../../../../components/Button/button";
import DropArea from "../../../../components/DropArea/dropArea";
import Input from "../../../../components/Input/input";
import Select from "../../../../components/Select/select";
import MultiSelect from "../../../../components/Multiselect/multiselect";
import { useState } from "react";
import SuccessDrawer from "../../../../components/successSlider/Sucess";

const AppDrawer = ({ visible, onClose, title }: DrawerInterface) => {
    const [openSuccessDrawer, setOpenSuccessDrawer] = useState(false);
    const handleClose = () => {
        setOpenSuccessDrawer(false);
    };
    return (
        <div>
            <Slider visible={visible} onClose={onClose} title={title}>
                <div className={styles.drawer_content}>
                    <DropArea name="upload" />

                    <div className={styles.flex}>
                        <Input
                            type="text"
                            placeholder="App name"
                            label="App Name"
                            name="app_name"
                        />

                        <Input
                            type="text"
                            placeholder="Display name"
                            label="Display Name"
                            name="display_name"
                        />
                    </div>

                    <Select
                        label="Choose product*"
                        placeholder="Choose product*"
                        name="Choose product*"
                        onChange={() => {}}
                        options={[]}
                    />

                    <MultiSelect
                        label="App Scope"
                        handleChange={() => {}}
                        name="app_scope"
                        placeholder="App Scope"
                    >
                        {new Array(5).fill(0).map((_, index) => (
                            <option key={index}>Transactions</option>
                        ))}
                    </MultiSelect>
                    <MultiSelect
                        label="Account type"
                        handleChange={() => {}}
                        name="app_scope"
                        placeholder="Account type"
                    >
                        {new Array(5).fill(0).map((_, index) => (
                            <option key={index}>Transactions</option>
                        ))}
                    </MultiSelect>
                    <MultiSelect
                        label="Industry"
                        handleChange={() => {}}
                        name="app_scope"
                        placeholder="Industry"
                    >
                        {new Array(5).fill(0).map((_, index) => (
                            <option key={index}>Logistics</option>
                        ))}
                    </MultiSelect>

                    <div className={styles.button_container}>
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
                    title="Create App"
                    content="You have sucessfully create APP NAME"
                />
            )}
        </div>
    );
};

export default AppDrawer;
