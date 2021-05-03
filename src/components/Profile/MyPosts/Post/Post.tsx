import React from 'react';
import styles from './Post.module.scss';
import avatar from '../../../../images/avatar-2.jpg';

type IPost = {
    message: string,
    likes: number
}

const Post: React.FC<IPost> = ({message, likes}) => {
    return (
        <div className={styles.post}>
            <div className={styles.row}>
                <img className={styles.authorAvatar} src={avatar} alt=""/>
                <p className={styles.message}>{message}</p>
            </div>
            <div>Likes: {likes}</div>
        </div>
    );
}

export default Post;