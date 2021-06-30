import React from 'react';
import {Button} from 'antd';
import {ArrowLeftOutlined} from "@ant-design/icons";
import {GoBackPropsType} from "../../../types/PropsTypes";

const GoBack: React.FC<GoBackPropsType> = props => {
    const {title = 'Go Back', history} = props;

    return (
        <Button onClick={() => history.goBack()} icon={<ArrowLeftOutlined/>} type="primary">{title}</Button>
    )
};

export default GoBack;