import React from 'react';
import {Formik, Field, Form, FormikHelpers} from 'formik';
import styles from './LoginForm.module.scss';
import {iForm} from "../../../interfaces";

interface Values {
    email: string;
    password: string;
}

const LoginForm: React.FC<iForm> = props => {
    const {onSubmit} = props;
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
                onSubmit(values);
                setSubmitting(false);
            }}>
            <Form className={styles.form}>
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <Field
                        className={`form-control`}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <Field
                        className={`form-control`}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="on"
                    />
                </div>
                <button
                    className="btn btn--block btn--green mb-2"
                    type="submit">Submit
                </button>
            </Form>
        </Formik>
    );
}

export default LoginForm;