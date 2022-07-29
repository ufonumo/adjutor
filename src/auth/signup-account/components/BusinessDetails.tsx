import { useFormikContext } from "formik";
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
            <Input
                type="text"
                name="shortName"
                onChange={(e) => {
                    setFieldValue("shortName", e.target.value);
                }}
                placeholder="Business short name**"
                label="Business short name* "
            />

            <Input
                type="email"
                name="supportEmail"
                onChange={(e) => {
                    setFieldValue("supportEmail", e.target.value);
                }}
                placeholder="Support email*"
                label="Support email* "
            />
            <Input
                type="email"
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
