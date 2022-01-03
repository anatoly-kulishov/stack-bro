import React, {FC} from 'react';
import {Input} from 'antd';

const {Search} = Input;

const SearchPanel: FC = () => {
  const searchHandler = (value: string) => {
    alert(`Search: ${value}`);
  }
  return <Search placeholder="Search" onSearch={searchHandler} style={{width: '100%'}}/>
}

export default SearchPanel;
