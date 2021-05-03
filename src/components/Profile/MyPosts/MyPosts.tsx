import React from 'react';
import styles from './MyPosts.module.scss';
import Post from "./Post";
import {posts} from "./data";

const MyPosts: React.FC = () => {
    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likes={p.likeCount}/>);

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
                <button className="btn btn--light-green">Add Post</button>
            </form>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
