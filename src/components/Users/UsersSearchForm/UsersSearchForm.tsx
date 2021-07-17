import React, {memo} from 'react';
import {Input} from "antd";

type UsersSearchFormPropsType = {
    onFilterChanged: (term: string) => void
}

const UsersSearchForm: React.FC<UsersSearchFormPropsType> = props => {
    const {onFilterChanged} = props;
    const {Search} = Input;
    const onSearch = (term: string) => onFilterChanged(term);
    return (
        <div className="mt-3 mb-3">
            <Search placeholder="Search users" onSearch={onSearch} style={{width: 200}}/>
        </div>
    )
}

export default memo(UsersSearchForm);
