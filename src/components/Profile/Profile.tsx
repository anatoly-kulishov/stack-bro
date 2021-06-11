import React, {useEffect} from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {IProfile} from "../../interfaces";

const Profile: React.FC<IProfile> = props => {
    const {setProfile, profile, isLoading, match, history} = props;

    useEffect(() => {
        let userId = match.params.userId;
        setProfile(userId ? userId : 17495)
    }, [setProfile, match])

    return (
        <div>
            <ProfileInfo profile={profile} history={history} isLoading={isLoading} match={match}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
