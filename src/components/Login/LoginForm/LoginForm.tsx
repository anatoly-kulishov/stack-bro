import React, { FC, useState } from 'react';
import { Alert, Button, Checkbox } from 'antd';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Formik, FormikConfig } from 'formik';

import { CREATE_NEW_ACCOUNT_BUTTON, LOGIN_AS_GUEST_BUTTON, LOGIN_BUTTON } from '../../../constants/buttons';
import { CAPTCHA_PLACEHOLDER, EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER } from '../../../constants/placeholders';
import { addCommasToStringsInArray } from '../../../utils/array-helpers/array-strings-helpers';
import { MOCK_USER_AUTH_DATA, URL_FOR_REGISTRATION } from '../../../constants/api';
import { CustomField } from '../../common/CustomField/CustomField';
import { REMEMBER_ME_LABEL } from '../../../constants/labels';
import { FormPropsType } from '../../../types';
import styles from './LoginForm.module.scss';

const initialValues = {
  email: '',
  password: '',
  captcha: '',
  rememberMe: false,
};

type ILoginFormValues = typeof initialValues;

export const LoginForm: FC<FormPropsType> = ({ onSubmit, isValid, errorsText, captchaUrl }) => {
  const [isGuest, setIsGuest] = useState<boolean>(false);
  const setGuestStatusHandler = () => setIsGuest(true);

  const submitHandler: FormikConfig<ILoginFormValues>['onSubmit'] = (values, formikHelpers) => {
    if (isGuest) {
      onSubmit(
        {
          email: MOCK_USER_AUTH_DATA.email,
          password: MOCK_USER_AUTH_DATA.password,
          captcha: values.captcha,
          rememberMe: values.rememberMe,
        },
        formikHelpers.setSubmitting,
        formikHelpers.resetForm,
      );
    } else {
      onSubmit(values, formikHelpers.setSubmitting, formikHelpers.resetForm);
    }
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
              <Alert message={errorsText && addCommasToStringsInArray(errorsText)} type="error" />
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
            <Button type="primary" htmlType="submit" icon={<UserOutlined />} block onClick={setGuestStatusHandler}>
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
