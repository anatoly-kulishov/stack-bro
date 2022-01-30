/** Libs * */
import React, { FC } from 'react';
import { Field, FieldAttributes } from 'formik';
import { WarningTwoTone } from '@ant-design/icons';

/** Styles & Images * */
import styles from './CustomField.module.scss';

export const CustomField: FC<FieldAttributes<any>> = props => {
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
