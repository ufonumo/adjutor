import { AiOutlineMore } from "react-icons/ai";

export const columns = [
    {
        title: "App name",
        dataIndex: "app",
    },
    {
        title: "Product",
        dataIndex: "product",
        render: (text) => (
            <>
                <span className="connect">{text}</span>
            </>
        ),
    },
    {
        title: "Created",
        dataIndex: "created",
    },
    {
        title: "",
        dataIndex: "icon",
    },
];

export const dataSource = [
    {
        app: "LSQtest",
        product: "Connect",
        created: "18 Apr 2021, 8:08pm",
        icon: <AiOutlineMore />,
    },
    {
        app: "LSQtest",
        product: "Connect",
        created: "18 Apr 2021, 8:08pm",
        icon: <AiOutlineMore />,
    },
    {
        app: "LSQtest",
        product: "Connect",
        created: "18 Apr 2021, 8:08pm",
        icon: <AiOutlineMore />,
    },
];
