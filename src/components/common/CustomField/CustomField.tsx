import React, { FC } from 'react';
import { Field, FieldAttributes, FieldProps } from 'formik';
import { WarningTwoTone } from '@ant-design/icons';

import styles from './CustomField.module.scss';

// TODO: Type this!
export const CustomField: FC<FieldAttributes<any & FieldProps>> = props => {
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
