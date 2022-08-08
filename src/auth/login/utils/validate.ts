import { object, string } from "yup";

export const validateSchema = object().shape({
    email: string().required("Required").email("Please use a valid email address"),
});
