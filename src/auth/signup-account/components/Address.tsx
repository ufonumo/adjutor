import { useFormikContext } from "formik";
import Input from "../../../components/Input/input";
import Select from "../../../components/Select/select";
import styles from "../signup.module.scss";

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
            <Input
                type="text"
                name="addressTwo"
                onChange={(e) => {
                    setFieldValue("addressTwo", e.target.value);
                }}
                placeholder="Address line 2 (Optional)"
                label="Address line 2 (Optional)"
            />
            <div className={styles.infoContainer}>
                <Select
                    name="city"
                    label="City*"
                    placeholder="Select"
                    options={[
                        {
                            title: "Select City",
                            value: "Select City",
                        },
                        { title: "Tomorrow", value: "future" },
                        { title: "Yesterday", value: "past" },
                    ]}
                    onChange={(e) => {
                        setFieldValue("city", e.target.value);
                    }}
                />
                <Select
                    name="state"
                    label="State*"
                    placeholder="Select"
                    options={[
                        {
                            title: "Select State",
                            value: "Select State",
                        },
                        { title: "Tomorrow", value: "future" },
                        { title: "Yesterday", value: "past" },
                    ]}
                    onChange={(e) => {
                        setFieldValue("state", e.target.value);
                    }}
                />
            </div>
            <Select
                name="country"
                label="Country*"
                placeholder="Select"
                options={[
                    {
                        title: "State",
                        value: "Select State",
                    },
                    { title: "Tomorrow", value: "future" },
                    { title: "Yesterday", value: "past" },
                ]}
                onChange={(e) => {
                    setFieldValue("country", e.target.value);
                }}
            />
        </div>
    );
};

export default Address;
