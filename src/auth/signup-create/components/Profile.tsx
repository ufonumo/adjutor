import { ErrorMessage, useFormikContext } from "formik";
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
                type="text"
                name="fullName"
                onChange={(e) => {
                    setFieldValue("fullName", e.target.value);
                }}
                placeholder="Full Name*"
                label="Full name *"
            />
            <ErrorMessage name="fullName">
                {(msg) => <div className="error">This is {msg}</div>}
            </ErrorMessage>
            <Input
                type="tel"
                name="mobile"
                onChange={(e) => {
                    setFieldValue("mobile", e.target.value);
                }}
                placeholder="Email"
                label="Mobile *"
            />
            <ErrorMessage name="mobile">
                {(msg) => <div className="error">This is {msg}</div>}
            </ErrorMessage>
            <Input
                type="email"
                name="workEmail"
                onChange={(e) => {
                    setFieldValue("workEmail", e.target.value);
                }}
                placeholder="workmail@email.com"
                label="Work Email *"
            />
            <ErrorMessage name="workEmail">
                {(msg) => <div className="error">This is {msg}</div>}
            </ErrorMessage>
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
