import React from 'react';
import styles from './MyPosts.module.scss';
import Post from "./Post";

type IMyPosts = {
    posts: Array<{
        id: number,
        message: string,
        likeCount: number
    }>
    onAddPost: Function
}

const MyPosts: React.FC<IMyPosts> = ({posts, onAddPost}) => {
    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likes={p.likeCount}/>);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const message = form['message'].value;
        onAddPost(message);
        form['message'].value = '';
    }

    return (
        <div className={styles.myPosts}>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <div className={styles.title}>My posts</div>
                <textarea className={`form-control ${styles.textarea}`}
                          name="message"/>
                <button className="btn btn--light-green"
                        type="submit">Add Post
                </button>
            </form>
            <div className={styles.postWrapper}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
