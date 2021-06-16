import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {IProfile} from "../../interfaces";

const Profile: React.FC<IProfile> = props => {
    const {profile, isLoading, match, history} = props;

    return (
        <div>
            <ProfileInfo profile={profile} history={history} isLoading={isLoading} match={match}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
