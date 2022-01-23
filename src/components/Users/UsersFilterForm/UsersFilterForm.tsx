import React, {FC} from 'react';
import {Field, Form, Formik} from 'formik';
import {Button, Input} from "antd";
import classes from "./UsersFilterForm.module.scss";
import {FilterType} from "../../../store/reducers/usersReducer/usersReducer";
import {useSelector} from "react-redux";
import {getUsersState} from "../../../store/selectors/users-selectors";

type UsersSearchFormPropsType = {
    onFilterChanged: (values: FilterType) => void
}

type FriendFormType = 'true' | 'false' | 'null';

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}

const UsersFilterForm: FC<UsersSearchFormPropsType> = props => {
    const {onFilterChanged} = props;

    const {filter} = useSelector(getUsersState);
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }
        onFilterChanged(filter);
        setSubmitting(false)
    }

    return (
        <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
            onSubmit={submit}>
            {({values, handleChange, isSubmitting}) => (
                <Form className={classes.form}>
                    <div className="d-flex align-items-center mr-2">
                        <div>
                            <Input
                                name="term"
                                value={values.term}
                                onChange={handleChange}
                                placeholder="Search users"
                                style={{width: 200}}/>
                        </div>
                        {/*<div className="ml-2">*/}
                        {/*    <Select  defaultValue="false" style={{width: 150}} onChange={handleChange}>*/}
                        {/*        <Option value="true">Only followed</Option>*/}
                        {/*        <Option value="false">Only unfollowed</Option>*/}
                        {/*    </Select>*/}
                        {/*</div>*/}
                        <div className="ml-2">
                            <Field
                                as='select'
                                name="friend"
                                style={{width: 150}}
                                onChange={handleChange}>
                                <option value="true">Only followed</option>
                                <option value="false">Only unfollowed</option>
                            </Field>
                        </div>
                    </div>
                    <Button htmlType="submit" disabled={isSubmitting}>
                        Find
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default UsersFilterForm;
