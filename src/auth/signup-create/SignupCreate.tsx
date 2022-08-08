import React, { ReactNode, useState } from "react";
import AuthLayout from "../../components/AuthLayout/authLayout";
import FormField from "./utils/formfields";
import { initialValues } from "./utils/initialvalues";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import styles from "./models/signup.module.scss";

const SignUpCreate = () => {
    const navigate = useNavigate();
    return (
        <AuthLayout>
            <FormikStepper
                initialValues={initialValues}
                data-testid="enterprise-service"
                onSubmit={(values) => {
                    navigate("/signUp-account");
                    // handleSubmit(values);
                }}
            >
                {FormField.map(({ validationSchema, Component, name }) => (
                    <FormikStep
                        key={name}
                        name={name}
                        onSubmit={() => {}}
                        validationSchema={validationSchema}
                    >
                        <Component />
                    </FormikStep>
                ))}
            </FormikStepper>
        </AuthLayout>
    );
};

export default SignUpCreate;

export interface FormikStepProps
    extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema" | "onSubmit"> {
    children: ReactNode | ReactNode[];
    name: string;
}

export function FormikStep({ children }: FormikStepProps): any {
    return children;
}

interface TWizardProps extends FormikConfig<FormikValues> {}

export function FormikStepper({ children, ...props }: TWizardProps) {
    // @ts-ignore
    const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const navigate = useNavigate();

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    const handlePreviousStep = (e: any) => {
        e.preventDefault();
        if (!(step === 0)) {
            setStep(step - 1);
        } else {
            navigate("/signUp-create");
        }
    };

    return (
        <div>
            <div className={styles.stepContainer}>
                <ul className={styles.stepper}>
                    <li className={step === 0 ? styles.step : styles.inactive}></li>
                    <li className={step === 1 ? styles.step : styles.inactive}></li>
                    <li className={step === 2 ? styles.step : styles.inactive}></li>
                </ul>
            </div>

            <Formik
                {...props}
                validationSchema={currentChild.props.validationSchema}
                onSubmit={(values, helpers) => {
                    helpers.setSubmitting(true);
                    if (!isLastStep()) {
                        setStep(step + 1);
                    } else {
                        props.onSubmit(values, helpers) as Promise<any>;

                        props.onSubmit(values, helpers);
                    }
                    helpers.setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {currentChild}
                        <div className="btn_flex">
                            <Button
                                variant="border"
                                type="button"
                                onClick={(e) => handlePreviousStep(e)}
                            >
                                Back
                            </Button>
                            <Button variant="primary" type="submit" disabled={isSubmitting}>
                                {step === 2 ? " Resend Link" : "Proceed"}
                            </Button>
                        </div>
                        <p className="signUp">
                            <span>Have an account?</span> <Link to="/">Sign In</Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
