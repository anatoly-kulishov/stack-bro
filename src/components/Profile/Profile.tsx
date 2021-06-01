import React, {useEffect} from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

type IProfile = {
    setProfile: Function,
    profile: any,
    isLoading: boolean,
    match: any,
    location: any,
    history: any
}

const Profile: React.FC<IProfile> = ({setProfile, profile, isLoading, match, location, history}) => {

    useEffect(() => {
        let userId = match.params.userId;
        setProfile(userId ? userId : 2)
    }, [setProfile, match])

    console.log(match, location, history)

    return (
        <div>
            <ProfileInfo profile={profile} history={history} isLoading={isLoading}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
