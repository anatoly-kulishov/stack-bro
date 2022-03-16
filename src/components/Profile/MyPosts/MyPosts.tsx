import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Input } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Post } from './Post/Post';
import { getProfileState } from '../../../store/selectors/profile-selectors';
import { profileActions } from '../../../store/actions/profileActions';
import { getAppState } from '../../../store/selectors/app-selectors';
import { MY_POST_BUTTON } from '../../../constants/buttons';
import { PostType } from '../../../types';
import styles from './MyPosts.module.scss';

const { TextArea } = Input;
const { ErrorBoundary } = Alert;

const messagesSchema = Yup.object().shape({
  message: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
});

export const MyPosts: FC = () => {
  const dispatch = useDispatch();
  const { profile, posts } = useSelector(getProfileState);
  const { theme } = useSelector(getAppState);

  // ToDo: Fix this bug: https://trello.com/c/AW8VeAyO/13-profile-my-posts
  const postsElements = posts?.map(() => ({ id, message, likesCount }: PostType) => (
    <Post key={id} profile={profile} message={message} likesCount={likesCount} />
  ));

  const onAddPost = (message: string) => {
    const post = {
      id: Date.now(),
      message,
      likesCount: 0,
    };
    dispatch(profileActions.addPost(post));
  };

  return (
    <div className={`${styles.myPosts} default-box default-box--${theme}`}>
      <ErrorBoundary>
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
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.title}>My posts</div>
              <div className="row">
                <div className="col-12">
                  <TextArea
                    name="message"
                    rows={2}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-12">
                  <div className={`${styles.row} mt-3`}>
                    <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                      {MY_POST_BUTTON}
                    </Button>
                    {errors.message && touched.message && (
                      <Alert style={{ marginLeft: 15 }} message={errors.message} type="warning" showIcon />
                    )}
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
        <div className={styles.postWrapper}>{postsElements}</div>
      </ErrorBoundary>
    </div>
  );
};
