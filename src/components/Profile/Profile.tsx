import React, {memo, useEffect} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import ProfileInfo from "./ProfileInfo";
import ProfilePhoto from './ProfilePhoto';
import MyPosts from "./MyPosts";
import {useDispatch} from "react-redux";
import {updateProfile} from '../../store/actions/profileActions';
import {setCurrentUserFollower} from "../../store/actions/usersActions/usersActions";
import MyFriends from "./MyFriends/MyFriends";

type PathParamsType = {
    userId: string | undefined
}

const Profile: React.FC<RouteComponentProps<PathParamsType>> = props => {
    const {match} = props;
    const currentUserId = match?.params?.userId;
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUserId) {
            dispatch(updateProfile(Number(currentUserId)))
            dispatch(setCurrentUserFollower(Number(currentUserId)))
        } else {
            dispatch(updateProfile(17461))
        }
    }, [currentUserId, dispatch])

    return (
        <div>
            <div className="row">
                <div className="col-12 col-lg-4 pr-lg-2">
                    <ProfilePhoto/>
                    <MyFriends/>
                </div>
                <div className="col-12 col-lg-8 pl-lg-2">
                    <ProfileInfo/>
                    <MyPosts/>
                </div>
            </div>
        </div>
    );
}

export default withRouter(memo(Profile));
