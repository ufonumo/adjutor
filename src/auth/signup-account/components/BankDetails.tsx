import { useFormikContext } from "formik";
import Input from "../../../components/Input/input";

const BankDetails = () => {
    const { setFieldValue } = useFormikContext();

    return (
        <div>
            <div className="header">
                <h1>One last thing...</h1>
                <p>Provide your bank information</p>
            </div>
            <Input
                type="text"
                name="accountNumber"
                onChange={(e) => {
                    setFieldValue("accountNumber", e.target.value);
                }}
                placeholder="10-digit number"
                label="Bank Account Number"
            />
            <Input
                type="text"
                name="accountNumber"
                onChange={(e) => {
                    setFieldValue("bankName", e.target.value);
                }}
                placeholder="Bank Name"
                label="Bank Name"
            />
        </div>
    );
};

export default BankDetails;
