import React from 'react';
import {Formik, Form} from 'formik';
import {Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import styles from './FileField.module.scss'

const FileField: React.FC<any> = props => {
    const {save} = props;

    return (
        <Formik
            initialValues={{file: null}}
            onSubmit={(values, {setSubmitting}) => {
                save(values.file)
            }}>
            {({handleSubmit, setFieldValue, values}) => (
                <Form onSubmit={handleSubmit}>
                    <label className={styles.label} htmlFor="file"><span className="mr-2">Update photo</span><UploadOutlined/></label>
                    <input name="file" type="file" id="file" className='d-none' onChange={(event: any) => {
                        setFieldValue("file", event.currentTarget.files[0])
                    }}/>
                    <div className="mt-2">
                        <Button htmlType="submit" block disabled={!values.file}>Submit</Button>
                    </div>
                    <div className="mt-2">
                        <Button htmlType="reset" block danger disabled={!values.file}>Cancel</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default FileField;