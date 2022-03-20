import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { Alert, Button, Checkbox, Input } from 'antd';

import { CustomField } from '../../../common/CustomField/CustomField';
import { ContactsType, FormPropsType, ProfileType } from '../../../../types';
import styles from './ProfileDataForm.module.scss';

type ProfileDataFormForm = {
  profile: ProfileType;
};

const { TextArea } = Input;

export const ProfileDataForm: FC<FormPropsType & ProfileDataFormForm & { closeEditMode: () => void }> = props => {
  const { onSubmit, isValid, errorText, profile, closeEditMode } = props;
  const { fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts } = profile;
  const dispatch = useDispatch();

  const initialValues = {
    userId: profile.userId,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    aboutMe,
    contacts,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(onSubmit(values, setSubmitting, closeEditMode));
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={styles.form}>
          <div className="form-row mb-3">
            <label htmlFor="fullName">Full name</label>
            <CustomField
              className={`form-control ${styles.customFormControl}`}
              id="fullName"
              name="fullName"
              type="text"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <div className="d-flex mt-2">
              <label className="mr-2" htmlFor="lookingForAJob">
                Looking for a job
              </label>
              <Checkbox
                id="lookingForAJob"
                name="lookingForAJob"
                checked={values.lookingForAJob ? values.lookingForAJob : false}
                onChange={handleChange}
              />
            </div>
          </div>
          {values.lookingForAJob && (
            <div className="form-row">
              <label htmlFor="lookingForAJobDescription">My professional skills</label>
              <TextArea
                rows={2}
                id="lookingForAJobDescription"
                name="lookingForAJobDescription"
                value={values.lookingForAJobDescription ? values.lookingForAJobDescription : ''}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>
          )}
          <div className="form-row">
            <label htmlFor="aboutMe">About Me</label>
            <TextArea
              rows={2}
              id="aboutMe"
              name="aboutMe"
              value={values.aboutMe ? values.aboutMe : ''}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          <div>
            {values.contacts &&
              Object.keys(contacts).map(key => {
                return (
                  <div className="form-row" key={key}>
                    <label htmlFor={key}>{key}</label>
                    <CustomField
                      className={`form-control ${styles.customFormControl}`}
                      id={`contacts.${key}`}
                      name={`contacts.${key}`}
                      type="text"
                      value={values?.contacts[key as keyof ContactsType]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                );
              })}
          </div>
          <div className="validate-box text-center mb-3">
            {!isValid && errorText && <Alert message={errorText} type="error" />}
          </div>
          <Button htmlType="submit" size="large" type="primary" className="mr-2" disabled={isSubmitting}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
