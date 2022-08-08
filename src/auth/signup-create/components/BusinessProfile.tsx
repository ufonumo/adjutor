import { useFormikContext } from "formik";
import Input from "../../../components/Input/input";
import Select from "../../../components/Select/select";
import { selectData } from "../models/selectData";

const BusinessProfile = () => {
    const { setFieldValue } = useFormikContext();

    return (
        <div>
            <div className="header">
                <h1>Tell Us About Your Business</h1>
                <p>Create your business profile</p>
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

            <Select
                name="role"
                label="What’s your role ?"
                placeholder="Select"
                options={selectData}
                onChange={(e) => {
                    setFieldValue("role", e.target.value);
                }}
            />
            <div className="marginTop">
                <Select
                    name="adjutor"
                    label="How did you learn about Adjutor ?"
                    placeholder="Select"
                    options={selectData}
                    onChange={(e) => {
                        setFieldValue("adjutor", e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default BusinessProfile;
