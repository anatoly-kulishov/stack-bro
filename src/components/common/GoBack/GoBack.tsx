import React from 'react';
import {Button} from 'antd';
import {ArrowLeftOutlined} from "@ant-design/icons";

type GoBackPropsType = {
    title?: string | undefined,
    history: { goBack: Function }
}

const GoBack: React.FC<GoBackPropsType> = props => {
    const {title = 'Go Back', history} = props;

    return (
        <Button onClick={() => history.goBack()} icon={<ArrowLeftOutlined/>} type="primary">{title}</Button>
    )
};

export default GoBack;