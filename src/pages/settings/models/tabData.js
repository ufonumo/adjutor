import { AiOutlineMore } from "react-icons/ai";

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
