import React, { FC } from 'react';
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik';
import { Alert, Button, Checkbox, Input, Modal, Tabs } from 'antd';

import { ProfileEditModalSchema } from '../../../../../configs/yup-schemas';
import { IProfile } from '../../../../../shared/types/profile.types';
import { IFormProps } from '../../../../../shared/types/form.types';
import { CustomField } from '../../../../ui/CustomField/CustomField';
import { Nullable } from '../../../../../shared/types';
import styles from './ProfileEditModal.module.scss';

interface IEditProfileDataModal {
  profile: Nullable<IProfile>;
  isModalVisible: boolean;
  hideModal: () => void;
}

const { TextArea } = Input;
const { TabPane } = Tabs;

export const ProfileEditModal: FC<IFormProps & IEditProfileDataModal> = props => {
  const { onSubmit, errorsText, profile, isModalVisible, hideModal } = props;

  const initialValues = {
    userId: profile?.userId,
    fullName: profile?.fullName,
    lookingForAJob: profile?.lookingForAJob,
    lookingForAJobDescription: profile?.lookingForAJobDescription,
    aboutMe: profile?.aboutMe,
    contacts: profile?.contacts,
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
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={ProfileEditModalSchema}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched, isValid, resetForm }) => (
          <Form onSubmit={handleSubmit} className={styles.Form}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Main information" key="1">
                <div className="form-row mb-3">
                  <label htmlFor="fullName">Full name</label>
                  <CustomField
                    className={`form-control ${styles.CustomsFormControl}`}
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={values.fullName ?? ''}
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
                    profile?.contacts &&
                    Object.keys(profile.contacts).map(key => {
                      return (
                        <div className="form-row" key={key}>
                          <label htmlFor={key}>{key}</label>
                          <CustomField
                            type="text"
                            className="form-control"
                            id={`contacts.${key}`}
                            name={`contacts.${key}`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                      );
                    })}
                </div>
              </TabPane>
            </Tabs>
            <div>
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
