import React, { FC } from 'react';
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik';
import { Alert, Button, Checkbox, Input, Modal, Tabs } from 'antd';
import * as Yup from 'yup';

import { ContactsType, FormPropsType, ProfileType } from '../../../../types';
import { CustomField } from '../../../common/CustomField/CustomField';
import styles from './EditProfileModal.module.scss';

type EditProfileDataModalPropsType = {
  profile: ProfileType;
  isModalVisible: boolean;
  hideModal: () => void;
};

const { TextArea } = Input;
const { TabPane } = Tabs;

export const EditProfileModal: FC<FormPropsType & EditProfileDataModalPropsType> = props => {
  const { onSubmit, errorsText, profile, isModalVisible, hideModal } = props;
  const { fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts } = profile;

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Please enter your full name'),
    /* name: Yup.string().required('Please enter name'), 231312321
     email: Yup.string().email('Must be email address').required('Please enter email'),
     phoneNumber: Yup.string().min(12, 'Invalid phone number').required('Please enter phone number'),
     question: Yup.string().required('Please enter your question'),
     attachedImages: Yup.array().default([]).notRequired(),
     isAgreed: Yup.boolean().oneOf([true]).required('Required'), */
  });

  const initialValues = {
    userId: profile.userId,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    aboutMe,
    contacts,
  };

  const cancelHandler = (resetForm: () => void) => () => {
    resetForm();
    hideModal();
  };

  const submitHandler: FormikConfig<typeof initialValues>['onSubmit'] = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>,
  ) => {
    onSubmit(values, setSubmitting);
    hideModal();
  };

  return (
    <Modal
      wrapClassName="EditModalWrapper"
      title="Edit mode"
      visible={isModalVisible}
      onCancel={hideModal}
      footer={null}
      style={{ top: 30 }}
      maskClosable={false}
    >
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched, isValid, resetForm }) => (
          <Form onSubmit={handleSubmit} className={styles.form}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Main information" key="1">
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
                    placeholder="Full name"
                    errormessage={errors.fullName && touched.fullName && errors.fullName}
                  />
                  <div className="d-flex mt-2">
                    <label className="mr-2" htmlFor="lookingForAJob">
                      Looking for a job
                    </label>
                    <Checkbox
                      id="lookingForAJob"
                      name="lookingForAJob"
                      checked={values.lookingForAJob ?? false}
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
                      value={values.lookingForAJobDescription ?? ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                )}
                <div className="form-row mb-1">
                  <label htmlFor="aboutMe">About Me</label>
                  <TextArea
                    rows={2}
                    id="aboutMe"
                    name="aboutMe"
                    value={values.aboutMe ?? ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </div>
              </TabPane>
              <TabPane tab="Contact information" key="2">
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
              </TabPane>
            </Tabs>
            <div className={styles.modalFooter}>
              <div className="validate-box text-center mb-3">
                {errorsText && <Alert message={errorsText} type="error" />}
              </div>
              <div className="d-flex justify-content-end">
                <Button htmlType="button" size="large" className="mr-2" onClick={cancelHandler(resetForm)}>
                  Cancel
                </Button>
                <Button htmlType="submit" size="large" type="primary" disabled={isSubmitting || !isValid}>
                  Save
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
