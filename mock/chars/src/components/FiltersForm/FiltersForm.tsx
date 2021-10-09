import React, {FC} from "react";
import {Field, Form, Formik} from "formik";
import {Button, Checkbox} from "@wavea/ui-kit";
import Calendar from "../Calendar/Calendar";
import * as Yup from 'yup';
import "./FiltersForm.scss";
import {useTypedSelector} from "../../state";
import {getFilterOptions} from "../../state/selectors/app-selectors";
import {FilterState} from "../../state/reducers/filterReducer";
import SubmitFormForChanges from "./Actions/SubmitFormForChanges";
import RadioButtons from "../RadioButtons";
import TagsFilter from "./TagsFilter";

type FiltersFormPropsType = {
  title: string,
  onSubmit: (values: FilterState) => void,
}

const FiltersForm: FC<FiltersFormPropsType> = ({title = 'Filters', onSubmit}) => {
  const initialValues = useTypedSelector(getFilterOptions);
  // const {} = useTypedSelector<FilterState>(getFilterOptions);

  return (
    <Formik
      validateOnMount
      validateOnChange
      initialValues={initialValues}
      validationSchema={Yup.object({
        graphs: Yup.boolean(),
        tables: Yup.boolean(),
      })}
      onSubmit={(values => onSubmit(values))}>
      {({handleSubmit, values, handleChange}) => {
        return (
          <Form onSubmit={handleSubmit} className="filters">
            <SubmitFormForChanges/>
            <div className="container-fluid">
              <div className="filters-head">
                <div className="row">
                  <div className="col-12 col-lg-2">
                    <h3>{title}</h3>
                  </div>
                  <div className="col-12 col-lg-10">
                    <div className="filters-group">
                      <div className="datePicker">
                        <b>Sep 13 - Sep 15</b>
                        <div className="d-none">
                          <Calendar onChange={() => null} value={new Date()}/>
                        </div>
                      </div>
                      <TagsFilter
                        data={values?.devices}
                        handleChange={handleChange}/>
                      <div className='row-group-checkbox'>
                        <Field
                          type="checkbox"
                          name='graphs'
                          component={Checkbox}
                          disabled={!values.tables}
                          label="Graphs"/>
                        <Field
                          type="checkbox"
                          name='tables'
                          disabled={!values.graphs}
                          component={Checkbox}
                          label="Tables"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filters-body">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div className="column">
                      <RadioButtons
                        name='sleepMetrics'
                        data={values?.sleepMetrics}
                        handleChange={handleChange}/>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 border-r border-l">
                    <div className="column">
                      <div className="btn-group disabled">
                        <Button type="button" typeButton="primary" label="Heart Rate"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="column">
                      <RadioButtons
                        name='sleepStages'
                        data={values?.sleepStages}
                        handleChange={handleChange}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default FiltersForm;