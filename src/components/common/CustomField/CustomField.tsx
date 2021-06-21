import React from 'react';
import {Field} from "formik";
import {WarningTwoTone} from '@ant-design/icons';
import styles from "./CustomField.module.scss"

const CustomField: React.FC<any> = props => {
    const {errormessage} = props;
    return (
        <div className={styles.fieldBox}>
            <Field {...props} />
            {errormessage && <span title={errormessage} className={styles.icon}><WarningTwoTone twoToneColor="#dc3545" style={{fontSize: 20}} /></span>}
        </div>
    )
}

export default CustomField;