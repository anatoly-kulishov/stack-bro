import React, {memo, useEffect} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import ProfileInfo from "./ProfileInfo";
import ProfilePhoto from './ProfilePhoto';
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from '../../store/actions/profileActions';
import {setCurrentUserFollower} from "../../store/actions/usersActions";
import MyFriends from "./MyFriends/MyFriends";
import {getOwnerId} from "../../store/selectors/auth-selectors";
import {Nullable} from "../../types";

type PathParamsType = {
  userId: string | undefined
}

const Profile: React.FC<RouteComponentProps<PathParamsType>> = props => {
  const {match} = props;
  const dispatch = useDispatch();
  const currentUserId = match.params.userId;
  const ownerId: Nullable<number> = useSelector(getOwnerId);

  useEffect(() => {
    if (currentUserId) {
      dispatch(updateProfile(Number(currentUserId)))
      dispatch(setCurrentUserFollower(Number(currentUserId)))
    } else if (!currentUserId && ownerId) {
      dispatch(updateProfile(ownerId))
    }
  }, [currentUserId, ownerId, dispatch])

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
