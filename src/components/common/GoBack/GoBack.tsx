import React, {FC, memo} from 'react';
import {Button} from 'antd';
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Nullable} from "../../../types";

type GoBackPropsType = {
    title?: Nullable<string>,
    history: { goBack: () => void }
}

const GoBack: FC<GoBackPropsType> = props => {
    const {title = 'Go Back', history} = props;

    return (
        <Button onClick={history.goBack} icon={<ArrowLeftOutlined/>} type="primary">{title}</Button>
    )
};

export default memo(GoBack);