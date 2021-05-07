import React from 'react';
import styles from './Post.module.scss';
import avatar from '../../../../images/avatar-2.jpg';
import avatarWebp from '../../../../images/avatar-2.webp';

type IPost = {
    message: string,
    likes: number
}

const Post: React.FC<IPost> = ({message, likes}) => {
    return (
        <div className={styles.post}>
            <div className={styles.row}>
                <picture>
                    <source type="image/webp" srcSet={avatarWebp}/>
                    <source type="image/jpeg" srcSet={avatar}/>
                    <img className={styles.authorAvatar} src={avatar} alt=""/>
                </picture>
                <p className={styles.message}>{message}</p>
            </div>
            <div>Likes: {likes}</div>
        </div>
    );
}

export default Post;