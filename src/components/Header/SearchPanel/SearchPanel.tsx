import React, {FC} from 'react';
import {Input} from 'antd';

const {Search} = Input;

const SearchPanel: FC = () => {
    const onSearch = (value: string) => alert(`Search: ${value}`);
    return <Search placeholder="Search" onSearch={onSearch} style={{width: '100%'}}/>
}

export default SearchPanel;
