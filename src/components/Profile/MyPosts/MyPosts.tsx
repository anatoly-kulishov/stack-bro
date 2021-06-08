import React from 'react';
import {Formik} from 'formik';
import * as Yup from "yup";
import {Alert} from 'antd';
import styles from './MyPosts.module.scss';
import Post from "./Post";
import {IMyPosts} from "../../../interfaces";

const messagesSchema = Yup.object().shape({
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
});

const MyPosts: React.FC<IMyPosts> = props => {
    const {posts, onAddPost} = props;
    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likes={p.likeCount}/>);

    return (
        <div className={styles.myPosts}>
            <Formik
                initialValues={{message: ''}}
                validationSchema={messagesSchema}
                onSubmit={(values, {setSubmitting}) => {
                    onAddPost(values.message);
                    values.message = '';
                    setSubmitting(false);
                }}>
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.title}>My posts</div>
                        <textarea
                            className={`form-control ${styles.textarea}`}
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className={styles.row}>
                            <button type="submit" className="btn btn--light-green" disabled={isSubmitting}>
                                Add Post
                            </button>
                            {errors.message && touched.message &&
                            <Alert style={{marginLeft: 15}} message={errors.message} type="warning"/>}
                        </div>
                    </form>
                )}
            </Formik>
            <div className={styles.postWrapper}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
