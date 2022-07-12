import React, { FC } from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { GO_BACK_BUTTON } from '../../../constants/buttons';
import { Nullable } from '../../../types';

type GoBackPropsType = {
  title?: Nullable<string>;
  history: { goBack: () => void };
};

export const GoBack: FC<GoBackPropsType> = ({ title = GO_BACK_BUTTON, history }) => {
  return (
    <Button onClick={history.goBack} icon={<ArrowLeftOutlined />} type="primary">
      {title}
    </Button>
  );
};
