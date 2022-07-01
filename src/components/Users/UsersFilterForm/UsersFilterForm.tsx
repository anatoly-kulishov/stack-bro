import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { Checkbox, Input } from 'antd';
import { useSelector } from 'react-redux';

import { getUsersState } from '../../../store/selectors/users-selectors';
import { FilterType } from '../../../types';
import styles from './UsersFilterForm.module.scss';

type UsersSearchFormPropsType = {
  onFilterChanged: (values: FilterType) => void;
};

type FormType = {
  term: string;
  friend: boolean;
};

export const UsersFilterForm: FC<UsersSearchFormPropsType> = ({ onFilterChanged }) => {
  const { filter } = useSelector(getUsersState);

  const initialValues = { term: filter?.term, friend: filter?.friend };

  const submitHandler = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filterProp: FilterType = {
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
