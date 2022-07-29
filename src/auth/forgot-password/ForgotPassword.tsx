import { ErrorMessage, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/authLayout";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import styles from "../login/login.module.scss";

const ForgotPassword = () => {
    return (
        <AuthLayout>
            <div className="header">
                <h1>Forgot Password ?</h1>
                <p>Please enter your email address and we’ll send a rest link</p>
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
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="you@mail.com"
                            label="Email"
                        />

                        <ErrorMessage name="email">
                            {(msg) => <div className="error">{msg}</div>}
                        </ErrorMessage>

                        <div className={styles.buttonContainer}>
                            <Button type="submit" variant="blue" disabled={!values.email}>
                                Send Reset Link
                            </Button>
                        </div>

                        <p className={styles.signUp}>
                            <span>Remember Password? </span> <Link to="/">Log In</Link>
                        </p>
                    </form>
                )}
            </Formik>
        </AuthLayout>
    );
};

export default ForgotPassword;
