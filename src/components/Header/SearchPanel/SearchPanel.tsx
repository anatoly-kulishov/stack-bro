import React from 'react';
import {Input} from 'antd';

const SearchPanel: React.FC = () => {
    const {Search} = Input;
    const onSearch = (value: string) => console.log(`Search: ${value}`);
    return <Search placeholder="Search" onSearch={onSearch} style={{width: 200}}/>
}

export default SearchPanel;
