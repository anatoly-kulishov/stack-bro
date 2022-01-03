import React, {FC, memo} from 'react';
import {isLightTheme} from "../../../utils/boolean-helpers";
import {getAppTheme} from "../../../store/selectors/app-selectors";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../../../store/actions/appActions";
import {COLOR_THEME} from "../../../constants/localStorage";

const ThemeToggler: FC<any> = ({children}) => {
    const dispatch = useDispatch();
    const appTheme = useSelector(getAppTheme);

    const onChangeTheme = () => {
        const payload = isLightTheme(appTheme) ? 'dark' : 'light';
        localStorage.setItem(COLOR_THEME, payload);
        dispatch(changeTheme(payload));
    }

    return <span onTouchStartCapture={onChangeTheme} onDoubleClick={onChangeTheme}>{children}</span>
};

export default memo(ThemeToggler);