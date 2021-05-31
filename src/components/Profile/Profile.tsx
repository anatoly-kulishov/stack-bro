import React, {useEffect} from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

type IProfile = {
    setProfile: Function,
    profile: any,
    isLoading: boolean
}

const Profile: React.FC<IProfile> = ({setProfile, profile, isLoading}) => {

    useEffect(() => {
        setProfile(2)
    }, [setProfile])

    return (
        <div>
            <ProfileInfo profile={profile} isLoading={isLoading}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
