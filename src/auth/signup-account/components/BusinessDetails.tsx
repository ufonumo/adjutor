import { ErrorMessage, useFormikContext } from "formik";
import Input from "../../../components/Input/input";

const BusinessDetails = () => {
    const { setFieldValue } = useFormikContext();

    return (
        <div>
            <div className="header">
                <h1>Complete account setup</h1>
                <p>Complete business profile</p>
            </div>
            <Input
                type="text"
                name="businessName"
                onChange={(e) => {
                    setFieldValue("businessName", e.target.value);
                }}
                placeholder="Business  Name*"
                label="Business Name "
            />
            <ErrorMessage name="businessName">
                {(msg) => <div className="error">This is {msg}</div>}
            </ErrorMessage>
            <Input
                type="text"
                name="shortName"
                onChange={(e) => {
                    setFieldValue("shortName", e.target.value);
                }}
                placeholder="Business short name**"
                label="Business short name* "
            />
            <ErrorMessage name="shortName">
                {(msg) => <div className="error">This is {msg}</div>}
            </ErrorMessage>
            <Input
                type="email"
                name="supportEmail"
                onChange={(e) => {
                    setFieldValue("supportEmail", e.target.value);
                }}
                placeholder="Support email*"
                label="Support email* "
            />
            <ErrorMessage name="shortName">
                {(msg) => <div className="error">This is {msg}</div>}
            </ErrorMessage>
            <Input
                type="text"
                name="website"
                onChange={(e) => {
                    setFieldValue("website", e.target.value);
                }}
                placeholder="Company website URL (Optional)"
                label="Company website URL (Optional) "
            />
        </div>
    );
};

export default BusinessDetails;
