import React, {FC} from 'react';
import userPhoto from '../../assets/images/user-photo.png'
import './UserProfile.scss'
import {Link} from "react-router-dom";

interface UserProfileProp {
    email: string
}

const UserProfile:FC<UserProfileProp> = ({email}) => {
    return (
        <Link to="/profile" className="user-profile">
            <span>{email}</span>
            <img src={userPhoto} alt=""/>
        </Link>
    );
};

export default UserProfile;
