import React from 'react';
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile: React.FC = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={[]}/>
        </div>
    );
}

export default Profile;
