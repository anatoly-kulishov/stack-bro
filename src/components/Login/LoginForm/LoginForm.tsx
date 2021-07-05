import React from 'react';
import {Button, Checkbox} from 'antd';
import {LoginOutlined} from "@ant-design/icons";
import {Formik, Form} from 'formik';
import styles from './LoginForm.module.scss';
import CustomField from "../../common/CustomField";
import {validateEmail, validatePassword} from "../../../utils/validators/loginValidator";
import {FormPropsType} from "../../../types/PropsTypes";

const LoginForm: React.FC<FormPropsType> = props => {
    const {onSubmit, isValid, errorText, captchaUrl} = props;
    return (
        <Formik
            initialValues={{email: '', password: '', captcha: '', rememberMe: false}}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                // console.log(JSON.stringify(values, null, 2));
                onSubmit(values, setSubmitting, resetForm);
                values.captcha = '';
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
                            autoComplete="on"
                            errormessage={errors.password && touched.password && errors.password}/>
                    </div>
                    <Checkbox name='rememberMe'>Remember me</Checkbox>
                    <div className="validate-box text-center mt-3 mb-3">
                        {!isValid && <div className="validate-warning">{errorText}</div>}
                    </div>
                    <Button htmlType="submit"
                            icon={<LoginOutlined/>}
                            size="large" ghost
                            type="primary"
                            disabled={isSubmitting}
                            block>Log in
                    </Button>
                    {captchaUrl && <div className={styles.captchaBox}><img src={captchaUrl} alt=""/></div>}
                    {captchaUrl && (
                        <div className={styles.captchaInputBox}>
                            <CustomField className={`form-control`}
                                         name="captcha"
                                         placeholder="Symbols from image"/>
                        </div>
                    )}
                    <div className="mt-3 text-center">
                        <div>Forgotten password?</div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;