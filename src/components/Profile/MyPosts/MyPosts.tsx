import React from 'react';
import styles from './MyPosts.module.scss';
import Post from "./Post";

const MyPosts: React.FC = () => {

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const post = {
            message: form['message'].value
        }
        console.log("Post", post);
    }

    return (
        <div>
            <h3>My posts</h3>
            <form className={styles.form} onSubmit={submitHandler}>
                <textarea className={`form-control ${styles.textarea}`} name="message"/>
                <button className="btn btn--light-green">New Post</button>
            </form>
            <div>
                <Post message="Post 1" likes={69}/>
                <Post message="Post 2" likes={96}/>
            </div>
        </div>
    );
}

export default MyPosts;
