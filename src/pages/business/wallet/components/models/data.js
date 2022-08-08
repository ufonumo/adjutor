import { AiOutlineMore } from "react-icons/ai";
import dotIcon from "../../../../../assets/icons/dashboard/dot.svg";

export const columns = [
    {
        title: "Date",
        dataIndex: "date",
    },
    {
        title: "Transaction",
        dataIndex: "transaction",
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (text) => (
            <>
                <img src={dotIcon} alt="dot" className="mr-1" />
                <span>{text}</span>
            </>
        ),
    },
    {
        title: "Type",
        dataIndex: "type",
    },
    {
        title: "Amount",
        dataIndex: "amount",
    },
    {
        title: "",
        dataIndex: "icon",
    },
];

export const dataSource = [
    {
        status: "Successful",
        transaction: "Ls578d2f074",
        date: "18 Apr 2021, 8:08pm",
        type: "Top up",
        amount: "₦ 300,000",
        icon: <AiOutlineMore />,
    },
    {
        status: "Successful",
        transaction: "Ls578d2f074",
        date: "18 Apr 2021, 8:08pm",
        type: "Top up",
        amount: "₦ 300,000",
        icon: <AiOutlineMore />,
    },
    {
        status: "Successful",
        transaction: "Ls578d2f074",
        date: "18 Apr 2021, 8:08pm",
        type: "Top up",
        amount: "₦ 300,000",
        icon: <AiOutlineMore />,
    },
    {
        status: "Successful",
        transaction: "Ls578d2f074",
        date: "18 Apr 2021, 8:08pm",
        type: "Top up",
        amount: "₦ 300,000",
        icon: <AiOutlineMore />,
    },
];
