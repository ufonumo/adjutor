import BusinessProfile from "../components/BusinessProfile";
import Profile from "../components/Profile";
import Successful from "../components/sucessfull";
import { BusinessProfileSchema, ProfileSchema } from "./validationSchema";

const FormField = [
    {
        name: "Profile",
        validationSchema: ProfileSchema,
        Component: Profile,
    },
    {
        name: "Business Profile",
        validationSchema: BusinessProfileSchema,
        Component: BusinessProfile,
    },
    {
        name: "successful created",
        validationSchema: null,
        Component: Successful,
    },
];

export default FormField;
