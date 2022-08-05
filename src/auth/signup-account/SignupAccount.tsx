import { Form, Formik, FormikConfig, FormikValues } from "formik";
import React, { ReactNode, useEffect, useState } from "react";
import AuthLayout from "../../components/AuthLayout/authLayout";
import { AccountInitialValues } from "./utils/accountInitialValue";
import FormFieldAccount from "./utils/formFieldAccout";
import styles from "./signup.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";

const SignUpAccount = () => {
    const navigate = useNavigate();

    return (
        <AuthLayout>
            <FormikStepper
                initialValues={AccountInitialValues}
                data-testid="enterprise-service"
                onSubmit={(values) => {
                    navigate("/");
                }}
            >
                {FormFieldAccount.map(({ validationSchema, Component, name }) => (
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

export default SignUpAccount;

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
    // const [error, setError] = useState("");
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const navigate = useNavigate();

    const handleSkipButton = () => {
        setStep(step + 1);
    };

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    const handlePreviousStep = (event: PopStateEvent) => {
        event.preventDefault();

        if (!(step === 0)) {
            setStep(step - 1);
        } else {
            navigate("/signUp-create");
        }
    };

    useEffect(() => {
        window.onpopstate = handlePreviousStep;
    }, []);

    return (
        <div>
            <div className={styles.stepContainer}>
                <ul className={styles.stepper}>
                    <li className={step === 0 ? styles.step : styles.inactive}></li>
                    <li className={step === 1 ? styles.step : styles.inactive}></li>
                    <li className={step === 2 ? styles.step : styles.inactive}></li>
                    <li className={step === 3 ? styles.step : styles.inactive}></li>
                    <li className={step === 4 ? styles.step : styles.inactive}></li>
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

                        <Button
                            className="marginTop"
                            variant="primary"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {step === 4 ? "Let's go" : "Proceed"}
                        </Button>

                        {step === 1 || step === 2 ? (
                            <p className={styles.skip} onClick={handleSkipButton}>
                                Skip
                            </p>
                        ) : (
                            ""
                        )}

                        {/* {error && (
                          <Alert
                              color="red"
                              onClose={() => setError("")}
                              classNames={{
                                  root: "bg-red-10 border-2 border-l-red-100",
                                  message: "text-red-100",
                              }}
                          >
                              {error || " Bummer! something went is wrong"}
                          </Alert>
                      )} */}
                    </Form>
                )}
            </Formik>
        </div>
    );
}
