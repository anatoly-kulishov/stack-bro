import React, {useEffect} from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {IProfile} from "../../interfaces";

const Profile: React.FC<IProfile> = props => {
    const {match} = props;
    const currentUserId = match?.params.userId;

    useEffect(() => {
        console.log(currentUserId)
    }, [currentUserId])

    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;