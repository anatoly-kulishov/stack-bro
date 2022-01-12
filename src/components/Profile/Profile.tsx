import React, {memo, useEffect} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import ProfileInfo from "./ProfileInfo";
import ProfilePhoto from './ProfilePhoto';
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from '../../store/actions/profileActions';
import {setCurrentUserFollower} from "../../store/actions/usersActions/usersActions";
import MyFriends from "./MyFriends/MyFriends";
import {getOwnerId} from "../../store/selectors/auth-selectors";
import {Nullable} from "../../types";
import {getProfileIsOwnerStatus} from "../../store/selectors/profile-selectors";
import {setOwnerStatus} from '../../store/action-creators';

type PathParamsType = {
    userId: string | undefined
}

const Profile: React.FC<RouteComponentProps<PathParamsType>> = ({match}) => {
    const dispatch = useDispatch();
    const currentUserId = match.params.userId;
    const ownerId: Nullable<number> = useSelector(getOwnerId);
    const isOwner = useSelector(getProfileIsOwnerStatus);

    useEffect(() => {
        if (currentUserId) {
            dispatch(updateProfile(Number(currentUserId)))
            dispatch(setCurrentUserFollower(Number(currentUserId)))
            dispatch(setOwnerStatus(false))
        } else if (!currentUserId && ownerId) {
            dispatch(updateProfile(ownerId))
            dispatch(setOwnerStatus(true))
        }
    }, [currentUserId, ownerId, dispatch])

    return (
        <div>
            <div className="row">
                <div className="col-12 col-lg-4 pr-lg-2">
                    <ProfilePhoto/>
                    {isOwner && <MyFriends/>}
                </div>
                <div className="col-12 col-lg-8 pl-lg-2">
                    <ProfileInfo/>
                    {isOwner && <MyPosts/>}
                </div>
            </div>
        </div>
    );
}

export default withRouter(memo(Profile));
