import React from 'react';
import styles from './Post.module.scss';

type IPost = {
    message: string,
    likes: number
}

const Post: React.FC<IPost> = ({message, likes}) => {
    return (
        <div className={styles.post}>
            <p className={styles.message}>{message}</p>
            <span>Likes: {likes}</span>
        </div>
    );
}

export default Post;