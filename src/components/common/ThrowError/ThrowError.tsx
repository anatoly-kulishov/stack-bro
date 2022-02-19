/* Libs */
import React, { FC, useState } from 'react';
import { Button } from 'antd';

export const ThrowError: FC = () => {
  const [error, setError] = useState<Error>();

  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }

  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};
