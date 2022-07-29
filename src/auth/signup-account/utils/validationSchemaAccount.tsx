import { object, string } from "yup";

const BusinessDetailsSchema = object().shape({
    supportEmail: string().required("Required"),
    businessName: string().required("Required"),
    shortName: string().required("required"),
});

const AddressSchema = object().shape({
    addressOne: string().required("Required"),
    city: string().required("Required"),
    state: string().required("Required"),
});

export { AddressSchema, BusinessDetailsSchema };
