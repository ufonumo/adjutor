import { AiOutlineMore } from "react-icons/ai";
import dotIcon from "../../../../../assets/icons/dashboard/dot.svg";

export const companyData = [
    {
        name: "Company Name",
        value: "Nigerian Bank",
    },
    {
        name: "phone number",
        value: "08012345678",
    },
    {
        name: "support email",
        value: "support@irorun.com",
    },
    {
        name: "primary email",
        value: "support@irorun.com",
    },
    {
        name: "website",
        value: "www.irorun.com",
    },
    {
        name: "rc number",
        value: "123456789",
    },
    {
        name: "address",
        value: "Nigeria",
    },
    {
        name: "App url",
        value: "x3d4d4d7d.cloudfront.net",
    },
];

export const companyColumnData = [
    {
        title: "Document Type",
        dataIndex: "document",
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
        title: "Approved on",
        dataIndex: "approved",
    },
    {
        title: "",
        dataIndex: "icon",
    },
];

export const companyDataSource = [
    {
        document: "Certificate of Incorporation",
        type: "-",
        approved: "Apr 15, 2022, 05:47 am",
        icon: <AiOutlineMore />,
    },
    {
        document: "Certificate of Incorporation",
        type: "-",
        approved: "Apr 15, 2022, 05:47 am",
        icon: <AiOutlineMore />,
    },
];
