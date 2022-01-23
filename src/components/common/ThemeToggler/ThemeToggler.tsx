/** Libs **/
import React, {FC, memo, ReactNode} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** Utils **/
import {isLightTheme} from "../../../utils/boolean-helpers";
import {getAppState} from "../../../store/selectors/app-selectors";
import {changeTheme} from "../../../store/actions/appActions";
import {COLOR_THEME} from "../../../constants/localStorage";

type ThemeTogglerPropsType = {
  children: ReactNode
}

const ThemeToggler: FC<ThemeTogglerPropsType> = ({children}) => {
  const dispatch = useDispatch();
  const {theme} = useSelector(getAppState);

  const onChangeTheme = () => {
    const payload = isLightTheme(theme) ? 'dark' : 'light';
    localStorage.setItem(COLOR_THEME, payload);
    dispatch(changeTheme(payload));
  }

  return <span onTouchStartCapture={onChangeTheme} onDoubleClick={onChangeTheme}>{children}</span>
};

export default memo(ThemeToggler);