import React, { FC } from 'react';
import { Field, FieldAttributes, FieldProps } from 'formik';
import { WarningTwoTone } from '@ant-design/icons';

import styles from './CustomField.module.scss';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const CustomField: FC<FieldAttributes<any & FieldProps>> = props => {
  const { errormessage } = props;
  return (
    <div className={styles.fieldBox}>
      <Field {...props} />
      {errormessage && (
        <div title={errormessage} className={styles.icon}>
          <WarningTwoTone twoToneColor="#dc3545" style={{ fontSize: 20 }} />
        </div>
      )}
    </div>
  );
};
