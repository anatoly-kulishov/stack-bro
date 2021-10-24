import {Form, Formik, FormikConfig, FormikProps, FormikValues} from 'formik';
import React, {useEffect, useState} from 'react';
import * as yup from 'yup'

export interface Step<T extends FormikValues> { // T - interface of all form fields, like - {user: string; password: number}, it should extends formik field interface
    component: React.ElementType<StepElementProps<T>>; // component of each step to render inside formik multiform
    validationSchema: yup.SchemaOf<T>; // validation schema for each step
}

interface MultiStepFormProps extends Pick<FormikConfig<FormikValues>, 'initialValues' | 'onSubmit'>{ // multistep component accepts steps, submit cb, initial valiues
    steps: Step<any>[];
}

export interface StepElementProps<T> { //step component accepts form (formik bag to manipulate and see form), current and max step numbers to show and cb to change steps
    form: FormikProps<T>;
    currStepIdx: number;
    stepsLength: number
    changeStep: (newStepValue: number) => void;
}

interface StepWrapperProps { // wraps step component, drills all props down and revalidates form via useEffect
    children: Step<FormikValues>["component"]
    stepProps: StepElementProps<FormikValues>
}
const StepWrapper: React.FC<StepWrapperProps> = props => { //Wrapper component for perfoming Formik revalidation by useEffect when step changes
    useEffect(() => {
        props.stepProps.form.validateForm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.stepProps.currStepIdx])

    const StepComponent = props.children;
    return <StepComponent {...props.stepProps} />
}

const MultiStepForm: React.FC<MultiStepFormProps> = props => {
    const [currStepIdx, setCurrStepIdx] = useState<number>(0);
    const stepsLength = props.steps.length;

    const changeStep = (newStepValue: number) => {
        setCurrStepIdx(newStepValue);
    };

    const renderStep = (stepProps: StepElementProps<FormikValues>): React.ReactElement<StepElementProps<FormikValues>> => {
        return <StepWrapper stepProps={stepProps}>{props.steps[currStepIdx].component}</StepWrapper>
    }

    return <Formik
        validateOnMount //validate on first mount
        validateOnChange //validate when any field state changes
        initialValues={props.initialValues}
        validationSchema={props.steps[currStepIdx].validationSchema}
        onSubmit={props.onSubmit}
    >
        {(form: FormikProps<FormikValues>) => {
            return (
                <Form autoComplete="off" style={{width: '100%', display: 'flex'}}>
                    {renderStep({form, currStepIdx, stepsLength, changeStep})}
                </Form>
            )
        }}
    </Formik>;
}

export default MultiStepForm