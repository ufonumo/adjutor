import { useFormikContext } from "formik";
import { useState } from "react";
import Input from "../../../components/Input/input";
import PasswordInput from "../../../components/PasswordInput/PasswordInput";

const Profile = () => {
    const [isShown, setIsSHown] = useState(false);

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
    const { setFieldValue } = useFormikContext();

    return (
        <div>
            <div className="header">
                <h1>Let’s Create Your Account</h1>
                <p>Create your profile</p>
            </div>

            <Input
                type="email"
                name="fullName"
                onChange={(e) => {
                    setFieldValue("fullName", e.target.value);
                }}
                placeholder="Full Name*"
                label="Email *"
            />
            <Input
                type="tel"
                name="mobile"
                onChange={(e) => {
                    setFieldValue("mobile", e.target.value);
                }}
                placeholder="Email"
                label="Mobile *"
            />
            <Input
                type="email"
                name="workEmail"
                onChange={(e) => {
                    setFieldValue("workEmail", e.target.value);
                }}
                placeholder="workmail@email.com"
                label="Work Email *"
            />
            <PasswordInput
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                togglePasswordVisibility={togglePassword}
                isShown={isShown}
            />
        </div>
    );
};

export default Profile;
