import React, {FC, memo} from "react";
import "./NoData.scss";
import sadIcon from "../../assets/icons/sad-icon.svg";

type NoDataPropsType = {
    label?: string,
    minHeight?: string
}

const NoData: FC<NoDataPropsType> = ({label = 'No data', minHeight = '430px'}) => {
    return <div className="no-data" style={{minHeight: minHeight}}><img src={sadIcon} alt=""/>{label}</div>
}

export default memo(NoData);