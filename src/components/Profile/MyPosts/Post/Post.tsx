import React, {createElement, useState} from 'react';
import {Comment, Tooltip, Avatar} from 'antd';
import moment from 'moment';
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons';
// import styles from './Post.module.scss';
// import avatar from '../../../../assets/images/no-avatar.svg';
import {IPost} from "../../../../interfaces";


const Post: React.FC<IPost> = props => {
    const {message} = props;

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState<any>(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    {message}
                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />

        // <div className={styles.post}>
        //     <div className={styles.row}>
        //         <picture>
        //             <source type="image/jpeg" srcSet={avatar}/>
        //             <img className={styles.authorAvatar} src={avatar} alt=""/>
        //         </picture>
        //         <p className={styles.message}>{message}</p>
        //     </div>
        //     <div>Likes: {likes}</div>
        // </div>
    );
}

export default Post;