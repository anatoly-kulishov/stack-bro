import React from 'react';
import {Input} from 'antd';
import {Formik} from 'formik';
import * as Yup from "yup";
import {Alert, Button} from 'antd';
import styles from './MyPosts.module.scss';
import Post from "./Post";
import {PostType, ProfileType} from "../../../types";

type MyPostsPropsType = {
    profile: ProfileType,
    posts: Array<PostType>,
    onAddPost: (message: string) => void
}

const messagesSchema = Yup.object().shape({
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
});

const MyPosts: React.FC<MyPostsPropsType> = props => {
    const {posts, onAddPost, profile} = props;
    const {TextArea} = Input;
    const {ErrorBoundary} = Alert;
    const postsElements = posts.map(p => <Post key={p.id} profile={profile} message={p.message}
                                               likesCount={p.likesCount}/>);
    return (
        <div className={`${styles.myPosts} default-box`}>
            <ErrorBoundary>
                <Formik
                    initialValues={{message: ''}}
                    validationSchema={messagesSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        onAddPost(values.message);
                        values.message = '';
                        setSubmitting(false);
                    }}>
                    {({
                          values, errors,
                          touched, handleChange,
                          handleBlur, handleSubmit, isSubmitting
                      }) => (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.title}>My posts</div>
                            <div className="row">
                                <div className="col-12">
                                    <TextArea name="message" rows={2}
                                              value={values.message}
                                              onChange={handleChange}
                                              onBlur={handleBlur}/>
                                </div>
                                <div className="col-12">
                                    <div className={`${styles.row} mt-3`}>
                                        <Button type="primary" htmlType="submit" disabled={isSubmitting}>Add
                                            Post</Button>
                                        {
                                            errors.message && touched.message &&
                                            <Alert style={{marginLeft: 15}}
                                                   message={errors.message}
                                                   type="warning" showIcon
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
                <div className={styles.postWrapper}>
                    {postsElements}
                </div>
            </ErrorBoundary>
        </div>
    );
}

export default MyPosts;
