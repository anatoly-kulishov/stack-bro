import React, { FC, useState } from 'react';
import { Field, FieldAttributes } from 'formik';
import { WarningTwoTone } from '@ant-design/icons';

import { IconComp } from '../IconComp/IconComp';
import { ICustomFieldProps } from './CustomField.props';
import styles from './CustomField.module.scss';

export const CustomField: FC<FieldAttributes<ICustomFieldProps>> = props => {
  const { errormessage, type } = props;

  if (type === 'password') {
    return <PasswordField {...props} />;
  }

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

const PasswordField: FC<FieldAttributes<ICustomFieldProps>> = props => {
  const { errormessage, type } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordShowState = () => setShowPassword(!showPassword);

  return (
    <div className={styles.FieldBox}>
      {type === 'password' && (
        <div
          onMouseDown={togglePasswordShowState}
          onMouseUp={togglePasswordShowState}
          className={styles.ShowPasswordButton}
        >
          <IconComp icon="EyeIcon" size={18} />
        </div>
      )}
      <Field {...props} type={showPassword ? 'text' : 'password'} />
      {errormessage && (
        <div title={errormessage} className={styles.Icon}>
          <WarningTwoTone className={styles.WarningTwoTone} twoToneColor="#dc3545" />
        </div>
      )}
    </div>
  );
};
