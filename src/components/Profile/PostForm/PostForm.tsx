import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { profileActions } from '../../../store/actions/profileActions';
import { SubmitIcon } from '../../common/IconsComponent/SubmitIcon';
import styles from './PostForm.module.scss';

const { TextArea } = Input;

const messagesSchema = Yup.object().shape({
  message: Yup.string().min(2, 'Too Short!').max(1000, 'Too Long!').required('Required'),
});

export const PostForm: FC = () => {
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
                <SubmitIcon />
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
