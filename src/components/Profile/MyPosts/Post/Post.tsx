import React from 'react';
import styles from './Post.module.scss';
import avatar from '../../../../assets/img/no-avatar.svg';

type IPost = {
    message: string,
    likes: number
}

const Post: React.FC<IPost> = ({message, likes}) => {
    return (
        <div className={styles.post}>
            <div className={styles.row}>
                <picture>
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