import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import styles from './Message.module.scss';
import {useSelector} from "react-redux";
import {getOwnerId} from "../../../../store/selectors/auth-selectors";
import {ChatMessageType} from "../../../../types";

const Message: React.FC<ChatMessageType> = props => {
    const {message, photo, userId, userName} = props;
    const ownerId = useSelector(getOwnerId);

    return (
        <div className={styles.message}>
            <Link to={`/${userId}`}>
                <Avatar src={photo} icon={<UserOutlined/>}/>
            </Link>
            <div className={styles.MessageStack}>
                <Link to={`/${userId}`}>
                    <span className={styles.MessageStackName}>{userName} {(ownerId === userId && '...')}</span>
                </Link>
                <small className={styles.messageBox}>{message}</small>
            </div>
        </div>
    )
}

export default memo(Message);
