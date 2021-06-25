import React from 'react';
import {Formik, Form} from 'formik';
import {Button} from "antd";
import styles from './SettingsForm.module.scss';
import CustomField from "../../common/CustomField";
import {required} from "../../../utils/validators/baseValidator";

const SettingsForm: React.FC<any> = props => {
    const {onSubmit, isValid, errorText} = props;

    return (
        <Formik
            initialValues={{login: '', desc: ''}}
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
                        <label htmlFor="login">Login</label>
                        <CustomField
                            className={`form-control`}
                            id="login"
                            name="login"
                            type="login"
                            value={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Login"
                            validate={required}
                            errormessage={errors.login && touched.login && errors.login}/>
                    </div>
                    <div className="form-row mb-3">
                        <label htmlFor="desc">Description</label>
                        <CustomField
                            className={`form-control`}
                            id="desc"
                            name="desc"
                            type="desc"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.desc}
                            placeholder="Description"
                            validate={required}
                            errormessage={errors.desc && touched.desc && errors.desc}/>
                    </div>
                    <div className="validate-box text-center mb-2">
                        {!isValid && <div className="validate-warning">{errorText}</div>}
                    </div>
                    <Button htmlType="submit"
                            size="large"
                            type="primary"
                            className="mr-2"
                            disabled={isSubmitting}>Save
                    </Button>
                    <Button htmlType="reset"
                            size="large"
                            type="primary"
                            danger
                            disabled={isSubmitting}>Reset
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default SettingsForm;