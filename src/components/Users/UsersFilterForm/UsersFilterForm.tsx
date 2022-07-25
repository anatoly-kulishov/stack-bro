import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { Checkbox, Input } from 'antd';
import { useSelector } from 'react-redux';

import { getUsersState } from '../../../store/selectors/users-selectors';
import { IUserFilter } from '../../../shared/types/user.types';
import styles from './UsersFilterForm.module.scss';

interface IUsersFilterForm {
  onFilterChanged: (values: IUserFilter) => void;
}

interface IFormType {
  term: string;
  friend: boolean;
}

export const UsersFilterForm: FC<IUsersFilterForm> = ({ onFilterChanged }) => {
  const { filter } = useSelector(getUsersState);
  const initialValues = { term: filter?.term, friend: filter?.friend };

  const submitHandler = (values: IFormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filterProp: IUserFilter = {
      term: values.term,
      friend: values.friend,
    };
    onFilterChanged(filterProp);
    setSubmitting(false);
  };

  return (
    <Formik enableReinitialize initialValues={initialValues} onSubmit={submitHandler}>
      {({ values, handleChange, isSubmitting, setFieldValue }) => (
        <Form className={styles.Form}>
          <div className="d-flex align-items-center mr-2">
            <div>
              <Input
                name="term"
                value={values.term}
                onChange={handleChange}
                placeholder="Search users"
                className={styles.SearchInput}
              />
            </div>
            <div className="ml-2">
              <Checkbox
                checked={values.friend}
                disabled={isSubmitting}
                onChange={value => {
                  setFieldValue('friend', value.target.checked);
                  onFilterChanged({
                    term: values.term,
                    friend: value.target.checked,
                  });
                }}
              >
                My friends
              </Checkbox>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
