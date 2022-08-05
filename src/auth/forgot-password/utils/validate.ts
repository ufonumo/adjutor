import { object, string } from "yup";

// export const validate = (values: any) => {
//     const errors = {
//         email: "",
//     };
//     if (!values.email) {
//         errors.email = "Email is Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = "Invalid email address";
//     }
//     return errors;
// };

// validate={(values) => {
//     const errors = {
//         email: "",
//     };
//     if (!values.email) {
//         errors.email = "Email is Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = "Invalid email address";
//     }
//     return errors;
// }}

export const validateSchema = object().shape({
    email: string().required("Required").email("Please use a valid email address"),
});
