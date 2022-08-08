import { AiOutlineMore } from "react-icons/ai";

export const eventColumnData = [
    {
        title: "When",
        dataIndex: "when",
    },
    {
        title: "Member",
        dataIndex: "member",
    },
    {
        title: "Event",
        dataIndex: "event",
        render: (text) => (
            <>
                <span>{text}</span> <span className="user">Kristin Williams Kristin</span>
            </>
        ),
    },
    {
        title: "",
        dataIndex: "icon",
    },
];

export const eventDataSource = [
    {
        when: "Feb 2th 2020, 9:26am",
        member: "Kristin Williams Kristin",
        event: "User Logged in",
        icon: <AiOutlineMore />,
    },
    {
        when: "Feb 6th 2020, 9:26am",
        member: "Kristin Williams Kristin",
        event: "User Logged in",
        icon: <AiOutlineMore />,
    },
    {
        when: "Feb 8th 2020, 9:26am",
        member: "Kristin Williams Kristin",
        event: "User Logged in",
        icon: <AiOutlineMore />,
    },
    {
        when: "Feb 7th 2020, 9:26am",
        member: "Kristin Williams Kristin",
        event: "User Logged in",
        icon: <AiOutlineMore />,
    },
];
