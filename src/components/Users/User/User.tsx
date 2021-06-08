import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './User.module.scss';
import {IUser} from "../../../interfaces";
import {Skeleton, Avatar, Card} from 'antd';
import {MinusOutlined, PlusOutlined, EyeOutlined, UserOutlined} from '@ant-design/icons';

const User: React.FC<IUser> = props => {
    const {user, userFollow, userUnfollow, isLoading} = props;
    const {Meta} = Card;

    // disabled={followingInProgress.some((id: number) => id === user.id)}
    const followAction = (user.followed)
        ? (
            <MinusOutlined key="edit"
                           onClick={() => userUnfollow(user.id)}/>
        ) : (
            <PlusOutlined key="edit"
                          onClick={() => userFollow(user.id)}/>
        )

    return (
        <li key={user.id} className={styles.user}>

            <Card
                style={{width: 300, marginTop: 16}}
                actions={[
                    <NavLink to={`profile/${user.id}`}>
                        <EyeOutlined/>
                    </NavLink>,
                    followAction
                ]}>
                <Skeleton loading={isLoading} avatar active>

                    <Meta
                        avatar={
                            <Avatar src={user.photos.small && user.photos.small} icon={<UserOutlined/>}/>
                        }
                        title={user.name}
                        description={user.status}
                    />
                </Skeleton>
            </Card>
            {/*<button*/}
            {/*    className="btn btn--small btn--light-green ml-3"*/}
            {/*    onClick={() => (!user.followed) ? userFollow(user.id) : userUnfollow(user.id)}>*/}
            {/*    {user.followed ? 'Unfollow' : 'Follow'}*/}
            {/*</button>*/}
        </li>
    );
}

export default User;
