import React, {FC} from 'react';
import {Field, Formik} from "formik";
import * as Yup from "yup";
import './SettingUpForm.scss'
import {Button, Checkbox, Select} from "@wavea/ui-kit";

interface formValues {
    setUp: boolean,
    wrist: string,
    mattress: boolean,
}

const SettingUpForm:FC = () => {

    const initialValues: formValues  = {
        setUp: false,
        wrist: 'Right',
        mattress: false
    };

    const validationSchema = Yup.object(
        {
            setUp: Yup.boolean().required('Check').oneOf([true], "The field must be accepted."),
            wrist: Yup.string().required(),
            mattress: Yup.boolean().required('Check').oneOf([true], "The field must be accepted."),
        }
    );

    return (
        <div className="modal">
            <h3 className="modal-title">Confirming setup</h3>
            <h4 className="modal-subtitle">Fitbit Sense</h4>
            <Formik
                validateOnMount
                validateOnChange
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values, null, 2));
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 500);
                }}>
                {props => {
                    props.submitCount > 0 && (props.validateOnChange = true);
                    const {
                        handleSubmit,
                        isValid
                    } = props;
                    return (
                        <form className="confirming-form" onSubmit={handleSubmit}>
                            <div className="confirming-form__field">
                                <span>Is set up and being worn</span>
                                <Field
                                    type="checkbox"
                                    component={Checkbox}
                                    name="setUp"
                                />
                            </div>
                            <div className="confirming-form__field">
                                <span>Which wrist do you wear it on?</span>
                                <Field
                                    type="select"
                                    name="wrist"
                                    options={[{label: 'Right', value: 'Right'}, {
                                        label: 'Left',
                                        value: 'Left'
                                    }]}
                                    component={Select}
                                />
                            </div>
                            <div className="confirming-form__subtitle">
                                Please contact us if you plan on changing wrists in the future.
                            </div>
                            <h4 className="modal-subtitle">Withings Sleep</h4>
                            <div className="confirming-form__field">
                                <span>Is set up and placed under mattress</span>
                                <Field
                                    type="checkbox"
                                    component={Checkbox}
                                    name="mattress"
                                />
                            </div>
                            <Button disabled={!isValid} label="Confirm" type="submit" typeButton="primary" isLarge/>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default SettingUpForm;
