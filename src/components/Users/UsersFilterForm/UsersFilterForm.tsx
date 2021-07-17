import React, {memo} from 'react';
import {Field, Formik} from 'formik';

type UsersSearchFormPropsType = {}

const UsersFilterForm: React.FC<UsersSearchFormPropsType> = props => {
    const {} = props;

    return (
        <Formik
            initialValues={{friend: null}}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                console.log(values)
            }}>
            <Field name="friend" as="select">
                <option value="false">All</option>
                <option value="true">Friends</option>
            </Field>
        </Formik>
    )
}

export default memo(UsersFilterForm);
