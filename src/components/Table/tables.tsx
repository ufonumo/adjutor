import { Table } from "antd";
import { TableProps } from "./models/interface";
import styles from "./models/table.module.scss";
import Button from "../Button/button";
import filterIcon from "../../assets/icons/filter.svg";

const Tables = ({ columns, dataSource, header }: TableProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h6>{header}</h6>
                <Button variant="filter" type="button">
                    Filter by <img src={filterIcon} alt="" />
                </Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default Tables;
