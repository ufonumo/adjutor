import totalIcon from "../../../../assets/icons/karma/total.svg";
import activeIcon from "../../../../assets/icons/karma/active.svg";
import pendingIcon from "../../../../assets/icons/karma/pending.svg";
import { AiOutlineMore } from "react-icons/ai";

export const karmaData = [
    {
        title: "Total Entities",
        value: "10",
        percent: "40% last 30 days",
        icon: totalIcon,
    },
    {
        title: "Active Entities",
        value: "5",
        percent: "40% this month",
        icon: activeIcon,
    },
    {
        title: "Pending Approval",
        value: "5",
        percent: "20% this month",
        icon: pendingIcon,
    },
    {
        title: "All Karma",
        value: "50",
        percent: "40% this month",
        icon: pendingIcon,
    },
];

export const karmaColumnData = [
    {
        title: "Reporting Entity",
        dataIndex: "report",
    },
    {
        title: "Type",
        dataIndex: "type",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "date",
        dataIndex: "date",
    },
    {
        title: "Approved on",
        dataIndex: "approved",
    },
    {
        title: "",
        dataIndex: "icon",
    },
];

export const karmaDataSource = [
    {
        report: "Lending Technology Limited",
        type: "Lender",
        email: "support@lendsqr.com",
        date: "Mar 25th 2022, 10:04am",
        approved: "Apr 25th 2022, 10:04am",
        icon: <AiOutlineMore />,
    },
    {
        report: "Lending Technology Limited",
        type: "Lender",
        email: "support@lendsqr.com",
        date: "Mar 25th 2022, 10:04am",
        approved: "Apr 25th 2022, 10:04am",
        icon: <AiOutlineMore />,
    },
    {
        report: "Lending Technology Limited",
        type: "Lender",
        email: "support@lendsqr.com",
        date: "Mar 25th 2022, 10:04am",
        approved: "Apr 25th 2022, 10:04am",
        icon: <AiOutlineMore />,
    },
    {
        report: "Lending Technology Limited",
        type: "Lender",
        email: "support@lendsqr.com",
        date: "Mar 25th 2022, 10:04am",
        approved: "Apr 25th 2022, 10:04am",
        icon: <AiOutlineMore />,
    },
];
