import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

import { Nullable, ProfileType } from '../../../../types';

export type PostPropsType = {
  profile: ProfileType;
  message: Nullable<string>;
  likesCount: number;
};

export const Post: React.FC<PostPropsType> = props => {
  const { message, likesCount, profile } = props;

  const [likes, setLikes] = useState<number>(likesCount);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<Nullable<string>>(null);

  const like = () => {
    setLikes(prevValue => prevValue + 1);
    setDislikes(dislikes);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(likes);
    setDislikes(prevValue => prevValue + 1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'like d' ? LikeFilled : LikeOutlined)}
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
      author={<NavLink to="/">{profile?.fullName}</NavLink>}
      avatar={
        <Avatar src={profile?.photos && profile?.photos.large} alt={profile?.fullName ? profile?.fullName : ''} />
      }
      content={<p>{message}</p>}
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};
