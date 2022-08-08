import { ErrorMessage, useFormikContext } from "formik";
import Input from "../../../components/Input/input";
import Select from "../../../components/Select/select";
import { accountSelectData, accountStateSelectData } from "../models/accountData";
import styles from "../models/signup.module.scss";

const Address = () => {
    const { setFieldValue } = useFormikContext();

    return (
        <div>
            {" "}
            <div className="header">
                <h1>Complete account setup</h1>
                <p>Provide your business address</p>
            </div>
            <Input
                type="text"
                name="addressOne"
                onChange={(e) => {
                    setFieldValue("addressOne", e.target.value);
                }}
                placeholder="Address line 1*"
                label="Address line 1* "
            />
            <ErrorMessage name="addressOne">
                {(msg) => <div className="error">This is {msg}</div>}
            </ErrorMessage>
            <Input
                type="text"
                name="addressTwo"
                onChange={(e) => {
                    setFieldValue("addressTwo", e.target.value);
                }}
                placeholder="Address line 2 (Optional)"
                label="Address line 2 (Optional)"
            />
            <ErrorMessage name="addressTwo">
                {(msg) => <div className="error">This is {msg}</div>}
            </ErrorMessage>
            <div className={styles.infoContainer}>
                <div>
                    <Select
                        name="city"
                        label="City*"
                        placeholder="Select"
                        options={accountSelectData}
                        onChange={(e) => {
                            setFieldValue("city", e.target.value);
                        }}
                    />
                    <ErrorMessage name="city">
                        {(msg) => <div className="error">This is {msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <Select
                        name="state"
                        label="State*"
                        placeholder="Select"
                        options={accountStateSelectData}
                        onChange={(e) => {
                            setFieldValue("state", e.target.value);
                        }}
                    />
                    <ErrorMessage name="state">
                        {(msg) => <div className="error">This is {msg}</div>}
                    </ErrorMessage>
                </div>
            </div>
            <Select
                name="country"
                label="Country*"
                placeholder="Select"
                options={accountStateSelectData}
                onChange={(e) => {
                    setFieldValue("country", e.target.value);
                }}
            />
            <ErrorMessage name="country">
                {(msg) => <div className="error">This is {msg}</div>}
            </ErrorMessage>
        </div>
    );
};

export default Address;
