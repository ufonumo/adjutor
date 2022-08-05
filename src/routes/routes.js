import { TbLayoutDashboard, TbSmartHome } from "react-icons/tb";

export const SidebarRoutes = [
    {
        path: "/home",
        title: "Home",
        icon: <TbSmartHome />,
    },
    {
        path: "/dashboard",
        title: "Dashboard",
        icon: <TbLayoutDashboard />,
    },
];

export const BusinessSubMenus = [
    {
        name: "Wallet",
        path: "/wallet",
    },
    {
        name: "Apps",
        path: "/business-app",
    },
    {
        name: "Audit trail",
        path: "/audit",
    },
];

export const OperationsSubMenus = [
    {
        name: "Karma",
        path: "/karma",
    },
    {
        name: "Decision Models",
        path: "/decision-model",
    },
];
