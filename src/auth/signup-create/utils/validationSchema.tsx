import { object, string } from "yup";

const ProfileSchema = object().shape({
    fullName: string().required("Required"),
    mobile: string().required("Required"),
    workEmail: string().required("required"),
});

const BusinessProfileSchema = object().shape({
    businessName: string().required("Required"),
    role: string().required("Required"),
});

export { ProfileSchema, BusinessProfileSchema };
