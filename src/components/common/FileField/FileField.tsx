import React from 'react';
import {Formik, Form} from 'formik';
import {Button} from "antd";
// import {WarningTwoTone} from '@ant-design/icons';
// import styles from "./FileField.module.scss"

const FileField: React.FC<any> = props => {
    const {save} = props;

    return (
        <Formik
            initialValues={{file: null}}
            onSubmit={(values, {setSubmitting}) => {
                save(values.file)
            }}>
            {({handleSubmit, setFieldValue}) => (
                <Form onSubmit={handleSubmit}>
                    <label>
                        <input name="file" type="file" onChange={(event: any) => {
                            setFieldValue("file", event.currentTarget.files[0])
                        }}/>
                    </label>
                    <div className="mt-2">
                        <Button htmlType="submit" block>Edit</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default FileField;