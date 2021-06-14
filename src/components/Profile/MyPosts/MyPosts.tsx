import React from 'react';
import {Input} from 'antd';
import {Formik} from 'formik';
import * as Yup from "yup";
import {Alert, Button} from 'antd';
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
    const {TextArea} = Input;
    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likeCount}/>);

    return (
        <div className={`${styles.myPosts} default-box`}>
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
                        <div className="row">
                            <div className="col-lg-4">
                                <TextArea name="message" rows={2}
                                          value={values.message}
                                          onChange={handleChange}
                                          onBlur={handleBlur}/>
                            </div>
                            <div className="col-12">
                                <div className={`${styles.row} mt-3`}>
                                    <Button type="primary" htmlType="submit" disabled={isSubmitting}>Add Post</Button>
                                    {errors.message && touched.message &&
                                    <Alert style={{marginLeft: 15}} message={errors.message} type="warning"/>}
                                </div>
                            </div>
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
