import { Formik } from "formik";
import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout/authLayout";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import styles from "./login.module.scss";
const Login = () => {
    const [isShown, setIsSHown] = useState(false);

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
    return (
        <AuthLayout>
            <div className={styles.header}>
                <h1>Welcome Back !</h1>
                <p>Empowering the smartest lenders.</p>
            </div>

            <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                    const errors = {
                        email: "",
                    };
                    if (!values.email) {
                        errors.email = "Email is Required";
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = "Invalid email address";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Email"
                            label="Email"
                        />
                        {errors.email && touched.email && errors.email}

                        <PasswordInput
                            type="password"
                            name="password"
                            value={values.password}
                            placeholder="Password"
                            label="Password"
                            onChange={handleChange}
                            togglePasswordVisibility={togglePassword}
                            isShown={isShown}
                        />
                        {errors.password && touched.password && errors.password}

                        <p className={styles.forgotPassword}>Forgot Password ?</p>

                        <Button type="submit" variant="primary" disabled={isSubmitting}>
                            Log In
                        </Button>

                        <p className={styles.signUp}>
                            <span>Don't have an account?</span> <a href="/signup">Sign Up</a>
                        </p>
                    </form>
                )}
            </Formik>
        </AuthLayout>
    );
};

export default Login;
