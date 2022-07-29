import Address from "../components/Address";
import BankDetails from "../components/BankDetails";
import BusinessDetails from "../components/BusinessDetails";
import Documents from "../components/Documents";
import { successful } from "../components/successful";

import { AddressSchema, BusinessDetailsSchema } from "./validationSchemaAccount";

const FormFieldAccount = [
    {
        name: "Business Details",
        validationSchema: BusinessDetailsSchema,
        Component: BusinessDetails,
    },
    {
        name: "Address",
        validationSchema: AddressSchema,
        Component: Address,
    },
    {
        name: "Documents",
        validationSchema: null,
        Component: Documents,
    },
    {
        name: "Bank Details",
        validationSchema: null,
        Component: BankDetails,
    },
    {
        name: "Successful created",
        validationSchema: null,
        Component: successful,
    },
];

export default FormFieldAccount;
