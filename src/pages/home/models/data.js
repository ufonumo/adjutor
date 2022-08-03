import quickIcon from "../../../assets/icons/home/quick.svg";
import rightArrowIcon from "../../../assets/icons/home/rightArrow.svg";
import apiIcon from "../../../assets/icons/home/api.svg";
import yellowArrowIcon from "../../../assets/icons/home/yellowIcon.svg";
import pricingIcon from "../../../assets/icons/home/pricing.svg";
import purpleArrowIcon from "../../../assets/icons/home/purpleArrow.svg";

export const homeData = [
    {
        title: "Quick Access",
        subtitle: "Jump right into it",
        icon: quickIcon,
        variant: "blue",
        submenu: [
            {
                name: "Create a product",
                icon: rightArrowIcon,
                variant: "light_blue",
            },
            {
                name: "Create a decision model",
                icon: rightArrowIcon,
                variant: "light_blue",
            },
            {
                name: "Review loan request",
                icon: rightArrowIcon,
                variant: "light_blue",
            },
        ],
    },
    {
        title: "API Docs",
        subtitle: "Learn about all the available features on the admin platform",
        icon: apiIcon,
        variant: "yellow",
        submenu: [
            {
                name: "Read Docs",
                icon: yellowArrowIcon,
                variant: "light_yellow",
            },
        ],
    },
    {
        title: "Pricing",
        subtitle: "See the pricing plans available on adjutor",
        icon: pricingIcon,
        variant: "purple",
        submenu: [
            {
                name: "Read Docs",
                icon: purpleArrowIcon,
                variant: "light_purple",
            },
        ],
    },
];
