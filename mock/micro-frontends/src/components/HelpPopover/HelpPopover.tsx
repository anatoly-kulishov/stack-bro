import React, {FC, memo, useState} from 'react';
import classes from "./HelpPopover.module.scss";
import warningBlueIcon from "./warning-blue-icon.svg";

type HelpPopoverPropsType = {
    description: string
}

const HelpPopover: FC<HelpPopoverPropsType> = props => {
    const {description} = props;
    const [isOpenPopover, setIsOpenPopover] = useState(false);

    return (
        <div className={classes.wrapper}>
            <img src={warningBlueIcon} onClick={() => setIsOpenPopover(!isOpenPopover)} alt=""/>
            <div className={`${classes.popover} ${!isOpenPopover && classes.hide}`}>
                {description}
            </div>
        </div>
    )
}

export default memo(HelpPopover)