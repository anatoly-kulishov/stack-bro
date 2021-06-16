import React from 'react';
import {Button} from 'antd';
import {LoginOutlined} from "@ant-design/icons";
import {Formik, Field, Form} from 'formik';
import styles from './LoginForm.module.scss';
import {validateEmail, validatePassword} from "../../../utils/validates";
import {iForm} from "../../../interfaces";

const LoginForm: React.FC<iForm> = props => {
    const {onSubmit, isValid} = props;
    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                }, 500);
                onSubmit(values);
                setSubmitting(false);
            }}>
            {({
                  values, errors, touched, handleChange,
                  handleBlur, handleSubmit, isSubmitting
              }) => (
                <Form onSubmit={handleSubmit} className={styles.form}>
                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <Field
                            className={`form-control`}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            validate={validateEmail}
                        />
                        {errors.email && touched.email && errors.email}
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
                            validate={validatePassword}
                        />
                        {errors.password && touched.password && errors.password}
                    </div>
                    <div className="text-center mb-3">
                        {!isValid && <small>Incorrect Email or Password.</small>}
                    </div>
                    <div>
                        <Button htmlType="submit"
                                icon={<LoginOutlined/>}
                                size="large" ghost
                                type="primary"
                                block>Log in
                        </Button>
                    </div>
                    <div className="mt-3 text-center">
                        <div>Forgotten password?</div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;