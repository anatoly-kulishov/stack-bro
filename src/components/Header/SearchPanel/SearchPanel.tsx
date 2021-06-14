import React from 'react';
import {Input} from 'antd';

const SearchPanel = () => {
    const {Search} = Input;
    const onSearch = (value: any) => console.log(`Search: ${value}`);
    return <Search placeholder="Search" onSearch={onSearch} style={{width: 200}}/>
}

export default SearchPanel;
