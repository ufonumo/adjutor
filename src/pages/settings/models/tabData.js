import { AiOutlineInfoCircle, AiOutlineMore } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import ToolTips from "../../../components/ToolTip/toolTip";

export const settingsTabs = [
    "Account Management",
    "Team Management",
    "API Pricing",
    "API keys",
    "Notification",
];

export const teamColData = [
    {
        title: "Document Type",
        dataIndex: "document",
        render: (text) => (
            <div className="flex">
                <p>{text}</p>{" "}
                <ToolTips title={text} icon={<AiOutlineInfoCircle size={15} color="#3CB2FF" />} />{" "}
            </div>
        ),
    },
    {
        title: "Permission",
        dataIndex: "permission",
    },
    {
        title: "",
        dataIndex: "icon",
    },
];

export const teamDataSource = [
    {
        document: "Customer Services",

        permission: "5",
        icon: <AiOutlineMore />,
    },
    {
        document: "Team",
        permission: "10",
        icon: <AiOutlineMore />,
    },
];

export const pricingColData = [
    {
        title: "Endpoint",
        dataIndex: "endpoint",
    },
    {
        title: "URL",
        dataIndex: "url",
        render: (text) => (
            <div className="flex">
                <p>{text}</p>{" "}
                <div>
                    <MdContentCopy size={20} color="#213F7D" />
                </div>
            </div>
        ),
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "",
        dataIndex: "icon",
    },
];

export const pricingDataSource = [
    {
        endpoint: "GET /api/v1/account/balance",
        url: "https://api.lendsqr.com/api/v1/account/balance",
        price: "NGN 20.00 PER CALL",
        icon: <AiOutlineMore />,
    },
    {
        endpoint: "GET /api/v1/account/balance",
        url: "https://api.lendsqr.com/api/v1/account/balance",
        price: "NGN 20.00 PER CALL",
        icon: <AiOutlineMore />,
    },
    {
        endpoint: "GET /api/v1/account/balance",
        url: "https://api.lendsqr.com/api/v1/account/balance",
        price: "NGN 20.00 PER CALL",
        icon: <AiOutlineMore />,
    },
    {
        endpoint: "GET /api/v1/account/balance",
        url: "https://api.lendsqr.com/api/v1/account/balance",
        price: "NGN 20.00 PER CALL",
        icon: <AiOutlineMore />,
    },
];
