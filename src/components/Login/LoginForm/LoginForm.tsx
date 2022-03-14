import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Button, Checkbox } from 'antd';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Formik, FormikConfig } from 'formik';

import { CustomField } from '../../common/CustomField/CustomField';
import { FormPropsType } from '../../../types';
import { CREATE_NEW_ACCOUNT_BUTTON, LOGIN_AS_GUEST_BUTTON, LOGIN_BUTTON } from '../../../constants/buttons';
import { CAPTCHA_PLACEHOLDER, EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER } from '../../../constants/placeholders';
import { MOCK_USER_AUTH_DATA, URL_FOR_REGISTRATION } from '../../../constants/api';
import { REMEMBER_ME_LABEL } from '../../../constants/labels';
import styles from './LoginForm.module.scss';

const initialValues = {
  email: '',
  password: '',
  captcha: '',
  rememberMe: false,
};

type ILoginFormValues = typeof initialValues;

export const LoginForm: React.FC<FormPropsType> = ({ onSubmit, isValid, errorText, captchaUrl }) => {
  const dispatch = useDispatch();

  const submitHandler: FormikConfig<ILoginFormValues>['onSubmit'] = (values, formikHelpers) => {
    dispatch(onSubmit(values, formikHelpers.setSubmitting, formikHelpers.resetForm));
  };

  const logInAsGuestHandler = () => {
    dispatch(onSubmit(MOCK_USER_AUTH_DATA));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={styles.form}>
          <div className="form-row">
            <label htmlFor="email">Email Address</label>
            <CustomField
              className="form-control"
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={EMAIL_PLACEHOLDER}
              errormessage={errors.email && touched.email && errors.email}
            />
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
              placeholder={PASSWORD_PLACEHOLDER}
              autoComplete="on"
              errormessage={errors.password && touched.password && errors.password}
            />
          </div>
          <div className="mb-3">
            <Checkbox name="rememberMe" onChange={handleChange}>
              {REMEMBER_ME_LABEL}
            </Checkbox>
          </div>
          {!isValid && (
            <div className="validate-box text-center mt-3 mb-3">
              <Alert message={errorText} type="error" />
            </div>
          )}
          <Button
            htmlType="submit"
            icon={<LoginOutlined />}
            size="large"
            type="primary"
            disabled={isSubmitting}
            block
            ghost
          >
            {LOGIN_BUTTON}
          </Button>
          {captchaUrl && (
            <>
              <div className={styles.captchaBox}>
                <img src={captchaUrl} alt="" />
              </div>
              <div className={styles.captchaInputBox}>
                <CustomField className="form-control" name="captcha" placeholder={CAPTCHA_PLACEHOLDER} />
              </div>
            </>
          )}
          <div className="mt-3">
            <Button type="primary" icon={<UserOutlined />} block onClick={logInAsGuestHandler}>
              {LOGIN_AS_GUEST_BUTTON}
            </Button>
          </div>
          <div className="mt-3">
            <Button type="link" href={URL_FOR_REGISTRATION} block>
              {CREATE_NEW_ACCOUNT_BUTTON}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
