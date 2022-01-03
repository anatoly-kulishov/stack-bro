import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import {UserType} from "../../../../types";
import classes from "./Friend.module.scss"
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";

type FriendPropsType = {
    data: UserType
}

const Friend: React.FC<FriendPropsType> = ({data}) => {
    return (
        <li>
            <Link to={`/${data.id}`}>
                <Avatar src={data?.photos?.large} icon={<UserOutlined/>} size={50}/>
                <span className={classes.friendName}>{data.name}</span>
            </Link>
        </li>
    );
}

export default memo(Friend);
