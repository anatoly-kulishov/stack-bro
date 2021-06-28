import React from 'react';
import {Formik, Form} from 'formik';
import {Alert, Button, Checkbox} from "antd";
import styles from './ProfileDataForm.module.scss';
import CustomField from "../../../common/CustomField";
import TextArea from "antd/es/input/TextArea";

const ProfileDataForm: React.FC<any> = props => {
    const {onSubmit, isValid, errorText, profile} = props;
    const {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts} = profile;

    return (
        <Formik
            initialValues={
                {
                    fullName,
                    lookingForAJob,
                    lookingForAJobDescription,
                    aboutMe,
                    contacts
                }
            }
            onSubmit={(values, {setSubmitting}) => {
                console.log(JSON.stringify(values, null, 2));
                onSubmit(values, setSubmitting);
            }}>
            {({values, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <Form onSubmit={handleSubmit} className={styles.form}>
                    <div className="form-row">
                        <label htmlFor="fullName">Full name</label>
                        <CustomField
                            className={`form-control ${styles.customFormControl}`}
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required/>
                    </div>
                    <div className="form-row mb-3">
                        <div className="d-flex">
                            <label className="mr-2" htmlFor="lookingForAJob">Looking for a job</label>
                            <Checkbox id="lookingForAJob"
                                      name='lookingForAJob'
                                      checked={values.lookingForAJob}
                                      onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="lookingForAJobDescription">My professional skills</label>
                        <TextArea rows={2}
                                  id="lookingForAJobDescription"
                                  name="lookingForAJobDescription"
                                  value={values.lookingForAJobDescription}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="aboutMe">About Me</label>
                        <TextArea rows={2}
                                  id="aboutMe"
                                  name="aboutMe"
                                  value={values.aboutMe}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required/>
                    </div>
                    <div>
                        {Object.keys(contacts).map(key => {
                            return (
                                <div className="form-row" key={key}>
                                    <label htmlFor={key}>{key}</label>
                                    <CustomField
                                        className={`form-control ${styles.customFormControl}`}
                                        id={`contacts.${key}`}
                                        name={`contacts.${key}`}
                                        type="text"
                                        value={values.contacts.key}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="validate-box text-center mb-3">
                        {!isValid && errorText && <Alert message={errorText} type="error" />}
                    </div>
                    <Button htmlType="submit"
                            size="large"
                            type="primary"
                            className="mr-2"
                            disabled={isSubmitting}>Save
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default ProfileDataForm;