import React from 'react';
import {Button} from 'antd';
import {LoginOutlined} from "@ant-design/icons";
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
                <div>
                    <Button htmlType="submit"
                            icon={<LoginOutlined/>}
                            size="large" ghost
                            type="primary"
                            block>Submit
                    </Button>
                </div>
            </Form>
        </Formik>
    );
}

export default LoginForm;