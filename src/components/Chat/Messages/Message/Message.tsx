/** Libs **/
import React, {FC, memo} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

/** Components **/
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";

/** Utils **/
import {getOwnerId} from "../../../../store/selectors/auth-selectors";
import {ChatMessageType} from "../../../../types";

/** Styles **/
import styles from './Message.module.scss';

const Message: FC<ChatMessageType> = ({message, photo, userId, userName}) => {
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
