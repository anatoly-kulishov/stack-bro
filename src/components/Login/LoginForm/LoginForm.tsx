import React from 'react';
import {Button} from 'antd';
import {LoginOutlined} from "@ant-design/icons";
import {Formik, Form} from 'formik';
import styles from './LoginForm.module.scss';
import {validateEmail, validatePassword} from "../../../utils/validators/loginValidator";
import {iForm} from "../../../interfaces";
import CustomField from "../../common/CustomField";

const LoginForm: React.FC<iForm> = props => {
    const {onSubmit, isValid, errorText} = props;

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, {setSubmitting}) => {
                console.log(JSON.stringify(values, null, 2));
                onSubmit(values, setSubmitting);
            }}>
            {({
                  values, errors, touched, handleChange,
                  handleBlur, handleSubmit, isSubmitting
              }) => (
                <Form onSubmit={handleSubmit} className={styles.form}>
                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <CustomField
                            className={`form-control`}
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Email"
                            validate={validateEmail}
                            errormessage={errors.email && touched.email && errors.email}/>
                    </div>
                    <div className="form-row mb-3">
                        <label htmlFor="password">Password</label>
                        <CustomField
                            className={`form-control`}
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Password"
                            validate={validatePassword}
                            errormessage={errors.password && touched.password && errors.password}/>
                    </div>
                    <div className="validate-box text-center mb-3">
                        {!isValid && <div className="validate-warning">{errorText}</div>}
                    </div>
                    <Button htmlType="submit"
                            icon={<LoginOutlined/>}
                            size="large" ghost
                            type="primary"
                            disabled={isSubmitting}
                            block>Log in
                    </Button>
                    <div className="mt-3 text-center">
                        <div>Forgotten password?</div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;