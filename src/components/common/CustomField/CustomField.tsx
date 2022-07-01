import React, { FC } from 'react';
import { Field, FieldAttributes } from 'formik';
import { WarningTwoTone } from '@ant-design/icons';

import styles from './CustomField.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomField: FC<FieldAttributes<any>> = props => {
  const { errormessage } = props;
  return (
    <div className={styles.FieldBox}>
      <Field {...props} />
      {errormessage && (
        <div title={errormessage} className={styles.Icon}>
          <WarningTwoTone className={styles.WarningTwoTone} twoToneColor="#dc3545" />
        </div>
      )}
    </div>
  );
};
