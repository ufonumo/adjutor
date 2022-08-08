import { Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/authLayout";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import styles from "./login.module.scss";
import { validateSchema } from "./utils/validate";
const Login = () => {
    const [isShown, setIsSHown] = useState(false);

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
    return (
        <AuthLayout>
            <div className="header">
                <h1>Welcome Back!</h1>
                <p>Empowering the smartest lenders.</p>
            </div>

            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validateSchema}
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

                        <Link to="/forgot-password">
                            <p className={styles.forgotPassword}>Forgot Password ?</p>
                        </Link>

                        <Link to="/home">
                            <Button type="submit" variant="primary" disabled={isSubmitting}>
                                Log In
                            </Button>
                        </Link>

                        <p className={styles.signUp}>
                            <span>Don't have an account?</span>{" "}
                            <Link to="/signUp-create">Sign Up</Link>
                        </p>
                    </form>
                )}
            </Formik>
        </AuthLayout>
    );
};

export default Login;
