import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card/card";
import styles from "./model/offer.module.scss";
import swapIcon from "../../../../assets/images/operation/swap.svg";
import Select from "../../../../components/Select/select";
import { selectData } from "./model/selectData";
import Input from "../../../../components/Input/input";
import { BsChevronDown } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import Button from "../../../../components/Button/button";
import { useState } from "react";
import AddMore from "./components/Addmore";

const OfferSetting = () => {
    const [addMore, setAddMore] = useState<any>([]);

    // function to add more values when user click on add more button
    const handleAddMoreClick = () => {
        setAddMore(addMore.concat(<AddMore key={addMore.length} />));
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Offer settings</h1>
                    <Link to="/decision-sub">
                        <p>
                            go to decision models <FiChevronsRight size={15} />
                        </p>
                    </Link>
                </div>

                <div className={styles.card_container}>
                    <Card variant="default">
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
                                    className={styles.select}
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

                        {addMore}

                        <div className={styles.add_more} onClick={handleAddMoreClick}>
                            <IoIosAdd color="#3CB2FF" size={30} /> Add more Field
                        </div>
                        <div className={styles.card_footer}>
                            <Button type="button" variant="primary" disabled>
                                Save Details
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default OfferSetting;
