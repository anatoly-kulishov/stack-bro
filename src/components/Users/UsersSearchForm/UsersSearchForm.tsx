import React from 'react';
import {Input} from "antd";
// import styles from './UsersSearchForm.module.scss';

type UsersSearchFormPropsType = {}

const UsersSearchForm: React.FC<UsersSearchFormPropsType> = props => {
    const {Search} = Input;
    const onSearch = (value: any) => console.log(`Search: ${value}`);
    return (
        <div className="mt-3 mb-3">
            <Search placeholder="Search users" onSearch={onSearch} style={{width: 200}}/>
        </div>
    )
}

export default UsersSearchForm;
