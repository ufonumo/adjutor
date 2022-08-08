import { Progress } from "antd";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Button from "../../../../components/Button/button";
import Card from "../../../../components/Card/card";
import styles from "./models/accout.module.scss";
import uploadIcon from "../../../../assets/icons/settings/upload.svg";
import { BsArrowRight } from "react-icons/bs";
import Tables from "../../../../components/Table/tables";
import { companyColumnData, companyData, companyDataSource } from "./models/companyData";
import useWindowSize from "../../../../hooks/useWindowSize";

const Account = () => {
    const { width } = useWindowSize();

    return (
        <div className={styles.container}>
            <Card variant="default">
                <div className={styles.header}>
                    <h3>Change Logo</h3>
                    <p>max file size is 20mb</p>
                </div>
                <div className={styles.change_logo}>
                    <div className={styles.logo_full_container}>
                        <h4>Change Full Logo</h4>
                        <div className={styles.logo_full_container}>
                            <label htmlFor="logo" className={styles.browse}>
                                <AiOutlineCloudUpload color="#213F7D" size={30} />
                                <span>Drag & Drop your file</span>
                            </label>
                            <input type="file" name="" id="logo" className={styles.full_input} />

                            <Button variant="blue" type="button">
                                Browse to Upload
                            </Button>
                        </div>
                    </div>
                    <div className={styles.logo_short_container}>
                        <h4>Change Short Logo</h4>
                        <div className={styles.logo_container}>
                            <label htmlFor="logo" className={styles.browse}>
                                <img src={uploadIcon} alt="upload" />
                                <span className={styles.uploading}>50% Uploaded…</span>
                                <Progress
                                    percent={50}
                                    size="small"
                                    strokeColor="#213F7D"
                                    showInfo={false}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </Card>

            <div className={styles.companyDetails}>
                <Card variant="default">
                    <div className={styles.header}>
                        <h3>Company Details</h3>
                        <p>
                            Edit details <BsArrowRight color="#3CB2FF" />
                        </p>
                    </div>
                    <div className={styles.company_details_container}>
                        <ul className={styles.ul}>
                            {companyData.map((data, index) => (
                                <li className={styles.list} key={index}>
                                    <h3>{data.name}</h3>
                                    <p>{data.value}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </div>

            <div className={styles.companyDetails}>
                {width < 768 ? (
                    <div className={styles.mobile_card_container}>
                        <h3 className="heading3">Company's Details</h3>

                        {companyDataSource.map((list, index) => (
                            <Card variant="default" key={index}>
                                <div className={styles.card_container_item} key={index}>
                                    <h3>Document Type: </h3>
                                    <span>{list.document}</span>
                                    <h3>Type : </h3>
                                    <span>{list.type}</span>
                                    <p>Approved on: {list.approved}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Tables
                        header="Company’s Details"
                        dataSource={companyDataSource}
                        columns={companyColumnData}
                    />
                )}
            </div>
        </div>
    );
};

export default Account;
