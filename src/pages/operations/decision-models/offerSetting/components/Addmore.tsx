import Input from "../../../../../components/Input/input";
import styles from "../model/offer.module.scss";
import swapIcon from "../../../../../assets/images/operation/swap.svg";
import { BsChevronDown } from "react-icons/bs";
import Select from "../../../../../components/Select/select";
import { selectData } from "../model/selectData";

const AddMore = () => {
    return (
        <div>
            <div className={styles.card_content}>
                <div className={styles.card_left}>
                    <p>
                        Where <BsChevronDown color="#3CB2FF" />
                    </p>

                    <Select
                        placeholder="Previous Loans"
                        name="Previous Loans"
                        onChange={() => {}}
                        options={selectData}
                    />

                    <p className={styles.difference}>IS</p>

                    <Input type="text" placeholder="amount" name="amount" />
                </div>

                <div className={styles.card_swap}>
                    <img src={swapIcon} alt="swap" />
                </div>

                <div className={styles.card_right}>
                    <Input
                        type="text"
                        placeholder="Input number"
                        name="amount"
                        label="Maximum Tenor Days"
                    />{" "}
                    <Input
                        type="text"
                        placeholder="Input amount"
                        name="amount"
                        label="Maximum Amount"
                    />{" "}
                    <Input
                        type="text"
                        placeholder=" Input rate number"
                        name="amount"
                        label="Interest Rate (%)"
                    />
                </div>
            </div>
        </div>
    );
};

export default AddMore;
