import { AiOutlineMore } from "react-icons/ai";
import graphIcon from "../../../assets/icons/dashboard/graph.svg";
export const dashboardData = [
    {
        title: "Total API calls",
        amount: "1,000",
        percent: "10%",
        icon: graphIcon,
    },
    {
        title: "Daily API calls",
        amount: "1,000",
        percent: "30%",
        icon: graphIcon,
    },
    {
        title: "API calls per status code",
        amount: "10,000",
        percent: "20%",
        icon: graphIcon,
    },
    {
        title: "Amount spent",
        amount: "5,000",
        percent: "10%",
        icon: graphIcon,
    },
];

export const columns = [
    {
        title: "Status Code",
        dataIndex: "status",
    },
    {
        title: "Request ID",
        dataIndex: "requestID",
    },
    {
        title: "Method",
        dataIndex: "method",
    },
    {
        title: "URL",
        dataIndex: "url",
    },
    {
        title: "Date",
        dataIndex: "date",
    },
    {
        title: "",
        dataIndex: "icon",
    },
];

export const tableData = [
    {
        status: "404",
        requestID: "b7206c32-b945-44d2-9b36-c945868",
        method: "GET",
        url: "https://www.google.com/",
        date: "2020-01-01",
        icon: <AiOutlineMore />,
    },
    {
        status: "200",
        requestID: "b7206c32-b945-44d2-9b36-c945868",
        method: "GET",
        url: "https://www.google.com/",
        date: "2020-01-01",
        icon: <AiOutlineMore />,
    },
    {
        status: "200",
        requestID: "b7206c32-b945-44d2-9b36-c945868",
        method: "GET",
        url: "https://www.google.com/",
        date: "2020-01-01",
        icon: <AiOutlineMore />,
    },
];
