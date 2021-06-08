import React from 'react';
import {Skeleton, Avatar, Card} from 'antd';
import {EyeOutlined, UserOutlined} from '@ant-design/icons';
import styles from './ProfileInfo.module.scss';
import CopyToClipboard from "../../CopyToClipboard";
import Spinner from "../../Spinner/Spinner";
import GoBack from "../../GoBack";
import noAvatar from "../../../assets/images/no-avatar.svg"
import {IProfileInfo} from "../../../interfaces";

const ProfileInfo: React.FC<IProfileInfo> = props => {
    const {profile, isLoading, history} = props;
    const {Meta} = Card;

    console.log(profile)

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className={styles.descriptionBlock}>
            <GoBack history={history}/>
            <Card style={{width: 300, marginTop: 16}}>
                <Skeleton loading={isLoading} avatar active>
                    <Meta
                        avatar={
                            <Avatar src={profile.photos.small && profile.photos.small} icon={<UserOutlined/>}/>
                        }
                        title={profile.fullName}
                        description={
                            <div className="mt-3">
                                <CopyToClipboard>
                                    {profile?.lookingForAJobDescription}
                                </CopyToClipboard>
                            </div>
                        }
                    />
                </Skeleton>
            </Card>
        </div>
    );
}

export default ProfileInfo;