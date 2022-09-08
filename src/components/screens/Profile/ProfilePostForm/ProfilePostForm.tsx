import React, { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Input } from 'antd';

import { messagesSchema } from '../../../../configs/yup-schemas';
import { profileActions } from '../../../../store/action-creators';
import { IconComp } from '../../../ui/IconComp/IconComp';
import styles from './ProfilePostForm.module.scss';

const { TextArea } = Input;

export const ProfilePostForm: FC = memo(() => {
  const dispatch = useDispatch();

  const onAddPost = (message: string) => {
    const post = {
      id: Date.now(),
      message,
      likesCount: 0,
    };
    dispatch(profileActions.addPost(post));
  };

  return (
    <div className={`${styles.profilePosts} default-box`}>
      <Formik
        initialValues={{ message: '' }}
        validationSchema={messagesSchema}
        onSubmit={(values, { setSubmitting }) => {
          onAddPost(values.message);
          // eslint-disable-next-line no-param-reassign
          values.message = '';
          setSubmitting(false);
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <TextArea
                  name="message"
                  rows={1}
                  className={styles.textarea}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title={errors.message}
                  status={errors.message && 'warning'}
                  disabled={isSubmitting}
                  placeholder="What's new ?"
                />
              </div>
              <button className={`${styles.postButton}`} type="submit" disabled={isSubmitting}>
                <IconComp icon="SubmitIcon" />
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
});
