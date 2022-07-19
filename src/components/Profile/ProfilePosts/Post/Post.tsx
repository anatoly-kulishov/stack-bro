import React, { createElement, FC, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Comment, Tooltip } from 'antd';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { format } from 'date-fns';

import { TIME_FORMATS } from '../../../../configs/constants';
import { Nullable, ProfileType } from '../../../../shared/types';

export type PostPropsType = {
  profile: Nullable<ProfileType>;
  message: Nullable<string>;
  likesCount: number;
};

export const Post: FC<PostPropsType> = memo(props => {
  const { message, likesCount, profile } = props;

  const [likes, setLikes] = useState<number>(likesCount);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<Nullable<string>>(null);

  const like = () => {
    setLikes(prevValue => prevValue + 1);
    setAction('liked');
  };

  const dislike = () => {
    setDislikes(prevValue => prevValue + 1);
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
        {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
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
        <Tooltip title={format(new Date(), TIME_FORMATS.POST_ITEM_FULL)}>
          <span>{format(new Date(), TIME_FORMATS.POST_ITEM)}</span>
        </Tooltip>
      }
    />
  );
});
