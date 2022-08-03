import { BsPeople } from "react-icons/bs";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import { TbActivityHeartbeat, TbLayoutDashboard, TbSettings, TbSmartHome } from "react-icons/tb";

export const SidebarRoutes = [
    {
        path: "/home",
        element: <Home />,
        title: "Home",
        icon: <TbSmartHome />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        title: "Dashboard",
        icon: <TbLayoutDashboard />,
    },
    {
        path: "/business",
        element: <div>Business</div>,
        title: "Business",
        icon: <BsPeople />,
        submenu: [
            {
                name: "Wallet",
                path: "/wallet",
            },
            {
                name: "Apps",
                path: "/apps",
            },
            {
                name: "Audit trail",
                path: "audit",
            },
        ],
    },
    {
        path: "/operations",
        element: <div>Operations</div>,
        title: "Operations",
        icon: <TbActivityHeartbeat />,
        submenu: [
            {
                name: "Karma",
                path: "/karma",
            },
            {
                name: "Decision Models",
                path: "/decision-models",
            },
        ],
    },
    {
        path: "/settings",
        element: <div>Settings</div>,
        title: "Settings",
        icon: <TbSettings />,
    },
];
