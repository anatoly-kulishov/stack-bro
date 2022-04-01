import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { Button, Input, Select } from 'antd';
import { useSelector } from 'react-redux';

import classes from './UsersFilterForm.module.scss';
import { FilterType } from '../../../store/reducers/usersReducer/usersReducer';
import { getUsersState } from '../../../store/selectors/users-selectors';

type UsersSearchFormPropsType = {
  onFilterChanged: (values: FilterType) => void;
};

type FriendFormType = 'true' | 'false' | 'null';

type FormType = {
  term: string;
  friend: 'true' | 'false' | 'null';
};

const { Option } = Select;

export const UsersFilterForm: FC<UsersSearchFormPropsType> = ({ onFilterChanged }) => {
  const { filter } = useSelector(getUsersState);

  const initialValues = { term: filter.term, friend: String(filter.friend) as FriendFormType };

  const submitHandler = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filterProp: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true',
    };
    onFilterChanged(filterProp);
    setSubmitting(false);
  };

  // eslint-disable-next-line no-console
  console.log(String(filter.friend));

  return (
    <Formik enableReinitialize initialValues={initialValues} onSubmit={submitHandler}>
      {({ values, handleChange, isSubmitting, setFieldValue }) => (
        <Form className={classes.form}>
          <div className="d-flex align-items-center mr-2">
            <div>
              <Input
                name="term"
                value={values.term}
                onChange={handleChange}
                placeholder="Search users"
                style={{ width: 200 }}
              />
            </div>

            <div className="ml-2">
              <Select style={{ width: 150 }} onChange={value => setFieldValue('friend', value)}>
                <Option value="false">Only unfollowed</Option>
                <Option value="true">Only followed</Option>
              </Select>
            </div>
          </div>
          <Button htmlType="submit" disabled={isSubmitting}>
            Find
          </Button>
        </Form>
      )}
    </Formik>
  );
};
