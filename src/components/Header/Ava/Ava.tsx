import React from 'react';
import {Link} from "react-router-dom";
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import styles from "./Ava.module.scss";
import avatar from '../../../assets/images/no-avatar.svg'

const Ava: React.FC = () => {
    return (
        <>
            <div/>
            <div className={styles.avatar}>
                <Link to="/">
                    {/*<img className={styles.image}*/}
                    {/*     src={avatar}*/}
                    {/*     alt=""/>*/}
                </Link>
            </div>
        </>
    );
}

export default Ava;
