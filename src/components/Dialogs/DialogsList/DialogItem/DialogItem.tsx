import React from 'react';
import {NavLink} from "react-router-dom";
import {Avatar} from "antd";
import {UserOutlined} from '@ant-design/icons';
import styles from './DialogItem.module.scss';

type DialogItemPropsType = {
    id: number | string,
    name: string
}

const DialogItem: React.FC<DialogItemPropsType> = props => {
    const {id, name} = props;
    return (
        <li className={styles.listItem} key={id}>
            <NavLink to={`/messenger/${id}`} activeClassName={styles.current}>
                <div>
                    <Avatar size={30} icon={<UserOutlined/>}/>
                    <span className="ml-2">{name}</span>
                </div>
                <i className={styles.dot}/>
            </NavLink>
        </li>
    )
}

export default DialogItem;
