import React, {FC} from 'react';
import {Input} from 'antd';
import {ColorThemes} from "../../../types";
import {isDarkTheme} from "../../../utils/boolean-helpers";
import styles from "./SearchPanel.module.scss";

const {Search} = Input;

type SearchPanelPropsType = {
    theme: ColorThemes
}

const SearchPanel: FC<SearchPanelPropsType> = ({theme = 'light'}) => {
    const onSearch = (value: string) => alert(`Search: ${value}`);
    return (
        <Search placeholder="Search" onSearch={onSearch}
                className={`${styles.searchPanel} ${isDarkTheme(theme) && styles.searchPanelDarkTheme}`}
        />
    )
}

export default SearchPanel;