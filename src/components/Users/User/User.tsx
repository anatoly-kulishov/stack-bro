import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './User.module.scss';
import {Skeleton, Avatar, Card} from 'antd';
import {MinusOutlined, PlusOutlined, EyeOutlined, UserOutlined} from '@ant-design/icons';
import {UserType} from "../../../types";
import {useDispatch} from "react-redux";
import {userFollow, userUnfollow} from "../../../store/actions/usersActions/usersActions";

export type UserPropsType = {
    user: UserType,
    isLoading: boolean,
}

const User: React.FC<UserPropsType> = props => {
    const {user, isLoading} = props;
    const dispatch = useDispatch();
    const {Meta} = Card;
    // const followingInProgress = useSelector(getFollowingInProgress);

    const followAction = (user.followed)
        ? <MinusOutlined key="edit" onClick={() => dispatch(userUnfollow(user.id))}/>
        : <PlusOutlined key="edit" onClick={() => dispatch(userFollow(user.id))}/>

    return (
        <div key={user.id} className={styles.user}>
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
                        avatar={<Avatar src={user.photos.small && user.photos.small} icon={<UserOutlined/>}/>}
                        title={user.name}
                        description={user.status}
                    />
                </Skeleton>
            </Card>
        </div>
    );
}

export default User;
