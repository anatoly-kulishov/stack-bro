/** Libs **/
import React, {FC, memo, ReactNode} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** Utils **/
import {isLightTheme} from "../../../utils/boolean-helpers";
import {getAppTheme} from "../../../store/selectors/app-selectors";
import {changeTheme} from "../../../store/actions/appActions";
import {COLOR_THEME} from "../../../constants/localStorage";

type ThemeTogglerPropsType = {
  children: ReactNode
}

const ThemeToggler: FC<ThemeTogglerPropsType> = ({children}) => {
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