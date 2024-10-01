import React, { FC, useState, useTransition } from 'react';
import { Input } from 'antd';

export const Test: FC = () => {
  const [value, setValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => setValue(e.target.value));
  };

  return (
    <div className="default-box p-3">
      <h3>useTransition: {isPending ? 'True' : 'False'}</h3>
      <Input value={value} onChange={handleChange} />
    </div>
  );
};
