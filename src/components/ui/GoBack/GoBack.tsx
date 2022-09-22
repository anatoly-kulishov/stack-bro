import { Button } from 'antd';
import React, { FC } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { GO_BACK_BUTTON } from '../../../configs/constants';
import { IGoBack } from './GoBack.props';

export const GoBack: FC<IGoBack> = ({ title = GO_BACK_BUTTON, history }) => {
  return (
    <Button onClick={history.goBack} icon={<ArrowLeftOutlined />} type="primary">
      {title}
    </Button>
  );
};
