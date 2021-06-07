import React from 'react';
import {IGoBack} from "../../interfaces";
import {ArrowLeftOutlined} from "@ant-design/icons";

const GoBack: React.FC<IGoBack> = props => {
    const {title = 'Go Back', history} = props;

    return (
        <button onClick={() => history.goBack()} className="btn btn--go-back">
            <ArrowLeftOutlined /><span>{title}</span>
        </button>
    )
};

export default GoBack;